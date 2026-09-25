(function(){
"use strict";

/* ---------- PERFIS E BARALHOS ----------
   O conteúdo mora em js/decks/*.js e a lista de pessoas em js/profiles.js.
   Aqui só juntamos as duas coisas. */
function C(arr){ return {id:arr[0], cat:arr[1], pt:arr[2], en:arr[3], ex:arr[4], vars:(arr[5]||[]).map(function(v){ return {en:v[0], pt:v[1]}; })}; }
var PROFILE_KEYS = [];
var PROFILES = {};
window.CS_PROFILES.forEach(function(p){
  var cats = [], chunks = [];
  p.decks.forEach(function(d){
    var deck = window.CS_DECKS[d];
    if(!deck) return;
    cats = cats.concat(deck.cats);
    chunks = chunks.concat(deck.chunks.map(C));
  });
  PROFILE_KEYS.push(p.key);
  PROFILES[p.key] = { name:p.name, cats:cats, chunks:chunks };
});

var INTERVALS = [1,2,4,7,14,30]; // dias por caixa 0..5
var REST_DAY = 0;   // domingo: dia livre, não quebra a sequência
var REVIEW_DAY = 6; // sábado: só revisão, sem chunks novos (a não ser que a pessoa peça)

/* ---------- STATE ---------- */
function defaultProfileState(){
  return { cards:{}, streak:0, longestStreak:0, lastDoneDate:null, log:{}, settings:{pace:6}, dialogs:{} };
}
var STATE = { activeProfile: PROFILE_KEYS[0], profiles: {} };
PROFILE_KEYS.forEach(function(k){ STATE.profiles[k] = defaultProfileState(); });
var route = 'hoje';
var session = null; // sessão em andamento

function todayStr(){
  var d = new Date();
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}
function addDays(dateStr, n){
  var d = new Date(dateStr+'T00:00:00');
  d.setDate(d.getDate()+n);
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}
function weekday(dateStr){ return new Date(dateStr+'T00:00:00').getDay(); }
function activeState(){ return STATE.profiles[STATE.activeProfile]; }
function activeDeck(){ return PROFILES[STATE.activeProfile]; }
function shuffle(arr){ var a=arr.slice(); for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=a[i]; a[i]=a[j]; a[j]=t; } return a; }
function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

/* A sequência continua viva se, entre o último dia praticado e hoje, só
   faltaram domingos. Antes, folgar no domingo (como o próprio método manda)
   zerava o 🔥 na segunda. */
function streakAlive(st, today){
  if(!st.lastDoneDate) return false;
  for(var d = addDays(st.lastDoneDate, 1); d < today; d = addDays(d, 1)){
    if(weekday(d) !== REST_DAY) return false;
  }
  return true;
}
function currentStreak(st){ return streakAlive(st, todayStr()) ? (st.streak||0) : 0; }

/* ---------- PERSISTENCE ----------
   Fora do claude.ai o progresso fica no navegador de cada aparelho.
   Para levar de um aparelho a outro: Progresso → Exportar / Importar. */
function initPersistence(){
  PROFILE_KEYS.forEach(loadProfile);
  applySeedOnce();
  try{
    var savedActive = localStorage.getItem('cs_active_profile');
    if(PROFILES[savedActive]) STATE.activeProfile = savedActive;
  }catch(e){}
  render();
}
function loadProfile(name){
  try{
    var raw = localStorage.getItem('cs_profile_'+name);
    if(raw) STATE.profiles[name] = Object.assign(defaultProfileState(), JSON.parse(raw));
  }catch(e){}
}
/* Progresso trazido da versão do claude.ai (js/migracao.js). Só entra num
   perfil que ainda não tem nada salvo neste aparelho, e só uma vez. */
function applySeedOnce(){
  var seed = window.CS_SEED || {};
  var applied = {}; try{ applied = JSON.parse(localStorage.getItem('cs_seed_applied')||'{}'); }catch(e){}
  Object.keys(seed).forEach(function(k){
    if(!PROFILES[k] || applied[k]) return;
    var hasLocal = false; try{ hasLocal = !!localStorage.getItem('cs_profile_'+k); }catch(e){}
    if(!hasLocal){ STATE.profiles[k] = Object.assign(defaultProfileState(), seed[k]); saveProfile(k); }
    applied[k] = true;
  });
  try{ localStorage.setItem('cs_seed_applied', JSON.stringify(applied)); }catch(e){}
}
var saveTimer = null, pendingSave = {};
function flushSaves(){
  clearTimeout(saveTimer); saveTimer = null;
  Object.keys(pendingSave).forEach(function(name){
    try{ localStorage.setItem('cs_profile_'+name, JSON.stringify(STATE.profiles[name])); }catch(e){}
  });
  pendingSave = {};
}
function saveProfile(name){
  pendingSave[name] = true;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(flushSaves, 400);
}
document.addEventListener('visibilitychange', function(){ if(document.visibilityState==='hidden') flushSaves(); });
window.addEventListener('pagehide', flushSaves);
function setActiveProfile(name){
  STATE.activeProfile = name;
  try{ localStorage.setItem('cs_active_profile', name); }catch(e){}
  session = null;
  render();
}

/* ---------- EXPORTAR / IMPORTAR ---------- */
function exportProgress(){
  flushSaves();
  var data = { app:'chunk-sprint', formato:1, exportadoEm:new Date().toISOString(), profiles:STATE.profiles };
  var blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'chunk-sprint-progresso-'+todayStr()+'.json';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(function(){ URL.revokeObjectURL(a.href); }, 2000);
}
function importProgress(file){
  var reader = new FileReader();
  reader.onload = function(){
    var data;
    try{ data = JSON.parse(reader.result); }catch(e){ data = null; }
    if(!data || data.app!=='chunk-sprint' || !data.profiles){
      showNotice('Esse arquivo não é um progresso do Chunk Sprint.'); return;
    }
    var keys = Object.keys(data.profiles).filter(function(k){ return PROFILES[k]; });
    if(!keys.length){ showNotice('O arquivo não tem nenhum perfil conhecido.'); return; }
    var names = keys.map(function(k){ return PROFILES[k].name; }).join(', ');
    askConfirm('Substituir o progresso de '+names+' neste aparelho pelo do arquivo? O que está salvo aqui agora será trocado.', 'Substituir', function(){
      keys.forEach(function(k){ STATE.profiles[k] = Object.assign(defaultProfileState(), data.profiles[k]); saveProfile(k); });
      flushSaves(); session = null; render();
      showNotice('Progresso importado.');
    });
  };
  reader.readAsText(file);
}
/* confirm() nativo some sozinho no Safari; por isso a confirmação é desenhada na página */
function askConfirm(text, okLabel, onOk){
  var b = el('<div class="modal-backdrop"><div class="modal"><p style="margin:0 0 16px; line-height:1.5;"></p><div class="cta-row"><button class="btn btn-primary" data-ok></button><button class="btn btn-ghost" data-cancel>Cancelar</button></div></div></div>');
  b.querySelector('p').textContent = text;
  b.querySelector('[data-ok]').textContent = okLabel;
  b.querySelector('[data-ok]').onclick = function(){ b.remove(); onOk(); };
  b.querySelector('[data-cancel]').onclick = function(){ b.remove(); };
  b.onclick = function(e){ if(e.target===b) b.remove(); };
  document.body.appendChild(b);
}
function showNotice(text){
  var n = el('<div class="toast" role="status"></div>');
  n.textContent = text;
  document.body.appendChild(n);
  setTimeout(function(){ n.remove(); }, 3500);
}

/* ---------- AUDIO (voz mais natural) ----------
   A Web Speech API usa as vozes instaladas no aparelho. A diferença entre
   "robótico" e "humano" está quase toda em QUAL voz é escolhida: aqui a gente
   ranqueia as vozes neurais/premium do sistema, deixa o usuário escolher e
   guarda a escolha por aparelho. */
var AUDIO = { voiceURI:null, rate:0.95, autoplay:true };
var HAS_TTS = ('speechSynthesis' in window) && ('SpeechSynthesisUtterance' in window);
var SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
function loadAudioPrefs(){ try{ var raw=localStorage.getItem('cs_audio'); if(raw) Object.assign(AUDIO, JSON.parse(raw)); }catch(e){} }
function saveAudioPrefs(){ try{ localStorage.setItem('cs_audio', JSON.stringify(AUDIO)); }catch(e){} }
function englishVoices(){
  if(!HAS_TTS) return [];
  try{ return speechSynthesis.getVoices().filter(function(v){ return /^en([-_]|$)/i.test(v.lang||''); }); }catch(e){ return []; }
}
function voiceScore(v){
  var n=(v.name||'').toLowerCase(), s=0;
  if(/natural|neural|premium|enhanced|\bhd\b/.test(n)) s+=60;
  if(/siri/.test(n)) s+=55;
  if(/\b(ava|zoe|samantha|allison|nicky|evan|nathan|joelle|tom|susan|karen|moira|daniel|serena)\b/.test(n)) s+=25;
  if(/google/.test(n)) s+=35;
  if(/aria|jenny|guy|michelle|christopher|eric|emma|andrew|brian|ana\b|sonia|ryan|libby/.test(n)) s+=20;
  if(/microsoft/.test(n)) s+=10;
  if(/en[-_]us/i.test(v.lang)) s+=8; else if(/en[-_]gb/i.test(v.lang)) s+=5;
  if(/espeak|compact|\bfred\b|albert|bad news|bells|boing|bubbles|cellos|deranged|good news|hysterical|jester|organ|superstar|trinoids|whisper|wobble|zarvox|junior|ralph|kathy|grandma|grandpa|rocko|shelley|eddy|\bflo\b|\breed\b|sandy|novelty|pipe/.test(n)) s-=80;
  return s;
}
function rankedVoices(){ return englishVoices().sort(function(a,b){ return voiceScore(b)-voiceScore(a); }); }
function bestVoice(){
  var vs = rankedVoices();
  if(AUDIO.voiceURI){ var f = vs.find(function(v){ return v.voiceURI===AUDIO.voiceURI || v.name===AUDIO.voiceURI; }); if(f) return f; }
  return vs[0] || null;
}
function voiceQualityIsLow(){ var v = bestVoice(); return !v || voiceScore(v) < 20; }
function humanizeForSpeech(text){
  return String(text).replace(/\s*—\s*/g,', ').replace(/\.\.\./g,'.').replace(/\s+/g,' ').trim();
}
var speakingBtn = null;
function speak(text, opts){
  opts = opts || {};
  if(!HAS_TTS) return;
  try{
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(humanizeForSpeech(text));
    var v = bestVoice();
    u.lang = (v && v.lang) || 'en-US';
    if(v) u.voice = v;
    u.rate = opts.slow ? Math.max(0.5, AUDIO.rate*0.68) : AUDIO.rate;
    u.pitch = 1;
    if(opts.btn){
      var b = opts.btn; b.classList.add('playing');
      u.onend = u.onerror = function(){ b.classList.remove('playing'); };
    }
    if(opts.onend){ var prev=u.onend; u.onend=function(){ if(prev) prev(); opts.onend(); }; }
    speechSynthesis.speak(u);
  }catch(e){}
}
function stopSpeaking(){ try{ speechSynthesis.cancel(); }catch(e){} }
function autoSpeak(text){ if(AUDIO.autoplay) setTimeout(function(){ speak(text); }, 120); }
if(HAS_TTS){ speechSynthesis.onvoiceschanged = function(){ /* vozes chegaram; nada a fazer, bestVoice() lê na hora */ }; try{ speechSynthesis.getVoices(); }catch(e){} }

/* ---------- COMPARAÇÃO DE RESPOSTAS ---------- */
var CONTRACTIONS = [
  [/\bi'm\b/g,'i am'],[/\bi'd\b/g,'i would'],[/\bi'll\b/g,'i will'],[/\bi've\b/g,'i have'],
  [/\bit's\b/g,'it is'],[/\blet's\b/g,'let us'],[/\bthat's\b/g,'that is'],[/\bwhat's\b/g,'what is'],
  [/\bwho's\b/g,'who is'],[/\bwhere's\b/g,'where is'],[/\bhere's\b/g,'here is'],[/\bthere's\b/g,'there is'],[/\bhow's\b/g,'how is'],
  [/\bwe're\b/g,'we are'],[/\bwe'll\b/g,'we will'],[/\bwe've\b/g,'we have'],[/\byou're\b/g,'you are'],[/\byou'll\b/g,'you will'],[/\bthey're\b/g,'they are'],
  [/\bdon't\b/g,'do not'],[/\bdidn't\b/g,'did not'],[/\bdoesn't\b/g,'does not'],[/\bcan't\b/g,'cannot'],[/\bwon't\b/g,'will not'],
  [/\bisn't\b/g,'is not'],[/\baren't\b/g,'are not'],[/\bwasn't\b/g,'was not'],[/\bwanna\b/g,'want to'],[/\bgonna\b/g,'going to'],[/\bgimme\b/g,'give me']
];
function normalize(s){
  s = String(s||'').toLowerCase().replace(/[’‘`´]/g,"'").replace(/[—–]/g,' ').replace(/\.\.\./g,' ');
  CONTRACTIONS.forEach(function(p){ s = s.replace(p[0], p[1]); });
  return s.replace(/[^a-z0-9' ]+/g,' ').replace(/'/g,'').replace(/\s+/g,' ').trim();
}
function levenshtein(a,b){
  if(a===b) return 0; if(!a.length) return b.length; if(!b.length) return a.length;
  var prev = [], cur = [], i, j;
  for(j=0;j<=b.length;j++) prev[j]=j;
  for(i=1;i<=a.length;i++){
    cur[0]=i;
    for(j=1;j<=b.length;j++){
      var cost = a[i-1]===b[j-1] ? 0 : 1;
      cur[j] = Math.min(prev[j]+1, cur[j-1]+1, prev[j-1]+cost);
    }
    prev = cur.slice();
  }
  return prev[b.length];
}
function similarity(a,b){
  var na = normalize(a), nb = normalize(b);
  if(!na && !nb) return 1;
  var d = levenshtein(na, nb);
  return 1 - d/Math.max(na.length, nb.length, 1);
}
function grade(answer, target){
  var s = similarity(answer, target);
  return s >= 0.93 ? 'ok' : (s >= 0.72 ? 'almost' : 'bad');
}
/* quantas palavras do alvo apareceram no que foi dito (ordem não conta) —
   mais tolerante que a similaridade por caractere pra frases faladas, onde
   faltar só a última palavra não devia contar como "errou tudo" */
function wordCoverage(said, target){
  var saidWords = normalize(said).split(' ').filter(Boolean);
  var targetWords = normalize(target).split(' ').filter(Boolean);
  if(!targetWords.length) return 1;
  var hits = targetWords.filter(function(w){ return saidWords.indexOf(w) !== -1; }).length;
  return hits / targetWords.length;
}
/* nota usada pra sugerir Errei/Difícil/Fácil a partir de fala: usa o sinal
   mais generoso entre similaridade de caractere e cobertura de palavras, já
   que qualquer um dos dois indicando "você lembrou" já é sinal suficiente */
function reviewGrade(said, target){
  var charSim = similarity(said, target);
  var cov = wordCoverage(said, target);
  var charScore = charSim >= 0.93 ? 2 : (charSim >= 0.72 ? 1 : 0);
  var covScore = cov >= 0.95 ? 2 : (cov >= 0.5 ? 1 : 0);
  var best = Math.max(charScore, covScore);
  return best === 2 ? 'ok' : (best === 1 ? 'almost' : 'bad');
}
/* marca no alvo as palavras que faltaram/erraram na resposta */
function diffTarget(target, answer){
  var said = normalize(answer).split(' ');
  return target.split(/(\s+)/).map(function(tok){
    if(!tok.trim()) return tok;
    var n = normalize(tok);
    if(!n) return esc(tok);
    var hit = n.split(' ').every(function(w){ return said.indexOf(w) !== -1; });
    return hit ? esc(tok) : '<span class="miss">'+esc(tok)+'</span>';
  }).join('');
}

/* dica de iniciais: "I’d like to introduce myself" → "I’_ l___ t_ i________ m_____" */
function initialsHint(en){
  return en.split(/\s+/).map(function(w){
    return w.replace(/^([^A-Za-z]*[A-Za-z])(.*)$/, function(m, first, rest){
      return first + rest.replace(/[A-Za-z]/g, '_');
    });
  }).join('  ');
}
/* das alternativas que o reconhecedor devolve, fica a mais parecida com o alvo */
function bestAlternative(alts, target){
  var best = null;
  alts.forEach(function(t){ var s = similarity(t, target); if(!best || s > best.score) best = {transcript:t, score:s}; });
  return best;
}

/* ---------- RECONHECIMENTO DE FALA (revisão, shadowing) ---------- */
var recog = null;
var IS_IOS = /iPhone|iPad|iPod/.test(navigator.userAgent||'') || (/Mac/.test(navigator.platform||'') && navigator.maxTouchPoints > 1);
var IS_SAFARI = /Safari/.test(navigator.userAgent||'') && !/Chrome|CriOS|Edg|FxiOS/.test(navigator.userAgent||'');
function listenOnce(onResult, onError, onEnd){
  /* Um erro por tentativa. Antes, depois de um "not-allowed" o onend ainda
     disparava "no-speech" por cima, e a tela dizia "não ouvi nada, fale mais
     alto" quando o problema era permissão. */
  if(!SR){ onError('unsupported'); if(onEnd) onEnd(); return; }
  var got = false, failed = false, ended = false;
  function fail(code){ if(failed || got) return; failed = true; onError(code); }
  function end(){ if(ended) return; ended = true; if(!got) fail('no-speech'); if(onEnd) onEnd(); }
  try{
    recog = new SR();
    recog.lang = 'en-US'; recog.interimResults = false; recog.maxAlternatives = 5; recog.continuous = false;
    recog.onresult = function(e){
      var alts = [];
      for(var i=0;i<e.results[0].length;i++) alts.push(e.results[0][i].transcript);
      if(!alts.length) return;
      got = true; onResult(alts);
    };
    recog.onerror = function(e){ fail(e.error === 'aborted' ? 'no-speech' : (e.error || 'error')); };
    recog.onend = end;
    recog.start();
  }catch(e){ fail(e && e.name==='NotAllowedError' ? 'not-allowed' : 'error'); end(); }
}
function micErrorText(code){
  var perm = IS_IOS ? 'No iPhone: Ajustes → Apps → Safari → Microfone → Permitir, e confira se o Ditado está ligado (Ajustes → Geral → Teclado → Ativar Ditado).'
    : (IS_SAFARI ? 'No Safari: menu Safari → Ajustes → Sites → Microfone → Permitir para este site.'
    : 'Clique no cadeado ao lado do endereço e mude Microfone para Permitir. Depois recarregue a página.');
  return ({
    'not-allowed': 'O navegador bloqueou o microfone. '+perm,
    'service-not-allowed': IS_IOS || IS_SAFARI ? 'O reconhecimento de fala está desligado. Ligue o Ditado nos ajustes do aparelho e tente de novo.' : 'O reconhecimento de fala foi bloqueado. '+perm,
    'no-speech': 'Não ouvi nada. Toque no botão e comece a falar logo em seguida, um pouco mais perto do microfone.',
    'audio-capture': 'Nenhum microfone encontrado neste aparelho.',
    'network': 'O reconhecimento de fala precisa de internet neste navegador.',
    'unsupported': 'Este navegador não reconhece fala. Use Chrome, Edge ou Safari'+(IS_IOS ? ' (no iPhone, o Safari).' : '.')
  })[code] || ('Não deu certo agora ('+esc(code)+'). Tente de novo.');
}
function stopListening(){ try{ if(recog) recog.stop(); }catch(e){} }

/* ---------- SESSION LOGIC ---------- */
function dueQueue(){
  var st = activeState(), deck = activeDeck(), today = todayStr(), out = [];
  deck.chunks.forEach(function(c){
    var card = st.cards[c.id];
    if(card && card.due <= today) out.push(c);
  });
  return out;
}
function unseenQueue(){
  var st = activeState(), deck = activeDeck();
  return deck.chunks.filter(function(c){ return !st.cards[c.id]; });
}
function pace(){ return activeState().settings.pace || 6; }

function newSession(reviewQueue, newQueue){
  return {
    step: reviewQueue.length ? 'review' : (newQueue.length ? 'new' : 'practice'),
    reviewQueue: reviewQueue, reviewIndex: 0, revealed:false, reviewModes:{}, reviewAttempts:{},
    newQueue: newQueue, newIndex: 0, newPhase:'show', newCheck:null,
    ratedIds: [], learnedIds: [],
    practiceQueue: [], practiceIndex: 0, ex:null, retried:{}, lastExType:null,
    shadowQueue: [], shadowIndex: 0, shadow:null,
    dialog:null, standalone:false,
    stats:{ pRight:0, pTotal:0, newRight:0, newTotal:0, shadowScores:[] }
  };
}
function startSession(includeNew){
  var due = shuffle(dueQueue());
  var unseen = includeNew === false ? [] : unseenQueue().slice(0, pace());
  session = newSession(due, unseen);
  if(session.step === 'practice') buildPracticeQueue();
  route = 'hoje';
  render();
}
function startBonusReview(){
  var st = activeState(), deck = activeDeck();
  var chunks = Object.keys(st.cards).map(function(id){
    return deck.chunks.find(function(c){ return c.id === id; });
  }).filter(Boolean);
  session = newSession(shuffle(chunks).slice(0, 15), []);
  if(session.step === 'practice') buildPracticeQueue();
  route = 'hoje';
  render();
}
function buildPracticeQueue(){
  var deck = activeDeck();
  var ids = session.ratedIds.concat(session.learnedIds);
  var uniq = [];
  ids.forEach(function(id){ if(uniq.indexOf(id) === -1) uniq.push(id); });
  var list = uniq.map(function(id){ return deck.chunks.find(function(c){ return c.id===id; }); }).filter(Boolean);
  session.practiceQueue = shuffle(list);
  session.shadowQueue = shuffle(list);
  session.practiceIndex = 0; session.ex = null;
  if(!session.practiceQueue.length){ session.step = 'shadow'; }
  if(!session.shadowQueue.length && session.step==='shadow'){ goToDialogOrFinish(); }
}
/* Intervalos. Antes, um erro devolvia o chunk para a caixa 0 mesmo que ele
   estivesse quase dominado, e "Difícil" só mantinha o intervalo. Agora:
   - Errei: desce 2 caixas (não zera) e volta amanhã;
   - Difícil: fica na caixa, com metade do intervalo;
   - Fácil: sobe uma caixa. */
function nextInterval(card, rating){
  if(rating === 'again'){ card.box = Math.max(0, card.box-2); card.lapses++; return 1; }
  if(rating === 'hard'){ return Math.max(1, Math.round(INTERVALS[card.box]/2)); }
  card.box = Math.min(5, card.box+1);
  return INTERVALS[card.box];
}
function rateCard(chunk, rating){
  var st = activeState();
  var card = st.cards[chunk.id] || { box:0, reps:0, lapses:0 };
  card.reps++;
  card.due = addDays(todayStr(), nextInterval(card, rating));
  st.cards[chunk.id] = card;
  session.ratedIds.push(chunk.id);
  saveProfile(STATE.activeProfile);
  advanceReview();
}
function advanceReview(){
  stopListening();
  session.reviewIndex++; session.revealed = false;
  if(session.reviewIndex >= session.reviewQueue.length){
    session.step = session.newQueue.length ? 'new' : 'practice';
    if(session.step === 'practice') buildPracticeQueue();
  }
  render();
}
function learnCard(chunk, startBox){
  var st = activeState();
  st.cards[chunk.id] = { box: startBox||0, reps:0, lapses:0, due: addDays(todayStr(), INTERVALS[startBox||0]) };
  session && session.learnedIds && session.learnedIds.push(chunk.id);
  saveProfile(STATE.activeProfile);
}
function advanceNew(){
  session.newIndex++; session.newPhase = 'show'; session.newCheck = null;
  if(session.newIndex >= session.newQueue.length){
    session.step = 'practice';
    buildPracticeQueue();
  }
  render();
}
function advancePractice(){
  session.practiceIndex++; session.ex = null;
  if(session.practiceIndex >= session.practiceQueue.length){ session.step = 'shadow'; session.shadow = null; }
  render();
}
function advanceShadow(){
  stopListening();
  session.shadowIndex++; session.shadow = null;
  if(session.shadowIndex >= session.shadowQueue.length){ goToDialogOrFinish(); return; }
  render();
}
/* ---------- CONVERSAS (bloco 5) ----------
   Uma conversa por sessão, escolhida entre as liberadas (todos os chunks dela
   já aprendidos), dando preferência à que foi praticada há mais tempo. */
function dialogsFor(profileKey){
  var deck = PROFILES[profileKey], st = STATE.profiles[profileKey];
  var G = window.CS_DIALOGS || {};
  return deck.cats.filter(function(c){ return G[c.key]; }).map(function(c){
    var g = G[c.key];
    var learned = g.usa.filter(function(id){ return st.cards[id]; }).length;
    return { key:c.key, cat:c, d:g, learned:learned, total:g.usa.length, unlocked: learned===g.usa.length, last:(st.dialogs||{})[c.key]||null };
  });
}
function pickDialog(){
  var today = todayStr();
  var open = dialogsFor(STATE.activeProfile).filter(function(x){ return x.unlocked && x.last !== today; });
  if(!open.length) return null;
  open.sort(function(a,b){ return (a.last||'') < (b.last||'') ? -1 : ((a.last||'') > (b.last||'') ? 1 : 0); });
  return open[0].key;
}
function startDialog(key){
  session.step = 'dialog';
  session.dialog = { key:key, phase:'listen', showText:false, showPt:false, idx:0, turns:{}, playing:false };
}
function goToDialogOrFinish(){
  stopListening();
  var key = pickDialog();
  if(key){ startDialog(key); render(); } else finishSession();
}
function finishDialog(){
  var st = activeState();
  st.dialogs = st.dialogs || {};
  st.dialogs[session.dialog.key] = todayStr();
  saveProfile(STATE.activeProfile);
  if(session.standalone){
    var dlgName = window.CS_DIALOGS[session.dialog.key].titulo;
    session = null; route = 'baralho'; render();
    showNotice('Conversa concluída: '+dlgName);
    return;
  }
  finishSession();
}
function startStandaloneDialog(key){
  session = newSession([], []);
  session.standalone = true;
  startDialog(key);
  route = 'hoje';
  render();
}
/* segunda voz para o "outro" da conversa: a próxima melhor voz em inglês;
   se o aparelho só tiver uma, a mesma voz um pouco mais grave */
function otherVoice(){
  var vs = rankedVoices(), mine = bestVoice();
  var alt = vs.find(function(v){ return mine && v.name !== mine.name && voiceScore(v) >= 0; });
  return alt || null;
}
function speakLine(text, who, onend){
  if(!HAS_TTS){ if(onend) onend(); return; }
  try{
    var u = new SpeechSynthesisUtterance(humanizeForSpeech(text));
    var v = who==='outro' ? (otherVoice() || bestVoice()) : bestVoice();
    if(v){ u.voice = v; u.lang = v.lang; } else u.lang = 'en-US';
    u.rate = AUDIO.rate;
    u.pitch = (who==='outro' && !otherVoice()) ? 0.85 : 1;
    var done = false;
    u.onend = u.onerror = function(){ if(done) return; done = true; if(onend) onend(); };
    speechSynthesis.speak(u);
  }catch(e){ if(onend) onend(); }
}
function playConversation(falas, onDone){
  stopSpeaking();
  var i = 0;
  (function next(){
    if(!session || !session.dialog || !session.dialog.playing || i >= falas.length){ if(onDone) onDone(); return; }
    var f = falas[i++];
    speakLine(f[1], f[0], function(){ setTimeout(next, 350); });
  })();
}

function finishSession(){
  var st = activeState(), today = todayStr();
  var prevLog = st.log[today] || { reviewCount:0, newCount:0 };
  st.log[today] = { reviewCount: prevLog.reviewCount + session.ratedIds.length, newCount: prevLog.newCount + session.learnedIds.length, done:true };
  if(st.lastDoneDate !== today) st.streak = streakAlive(st, today) ? (st.streak||0)+1 : 1;
  st.longestStreak = Math.max(st.longestStreak||0, st.streak||0);
  st.lastDoneDate = today;
  saveProfile(STATE.activeProfile);
  session.step = 'done';
  render();
}

/* ---------- EXERCÍCIOS ---------- */
function distractors(chunk, n){
  var deck = activeDeck();
  var same = deck.chunks.filter(function(c){ return c.id!==chunk.id && c.cat===chunk.cat; });
  var others = deck.chunks.filter(function(c){ return c.id!==chunk.id && c.cat!==chunk.cat; });
  return shuffle(same).slice(0, n).concat(shuffle(others)).slice(0, n);
}
var STOP = ['this','that','with','your','have','from','what','when','where','like','would','could','there','here','about','them','they','will','does','were','been','into','more','some','than','then','just','only','very','much'];
function clozeWord(en){
  var toks = en.split(/\s+/);
  var cands = toks.map(function(t,i){ return {i:i, raw:t, n:normalize(t)}; })
    .filter(function(x){ return x.n.length>=4 && STOP.indexOf(x.n)===-1 && x.n.indexOf(' ')===-1; });
  if(!cands.length) cands = toks.map(function(t,i){ return {i:i, raw:t, n:normalize(t)}; }).filter(function(x){ return x.n.length>=3; });
  if(!cands.length) return null;
  cands.sort(function(a,b){ return b.n.length-a.n.length; });
  return pick(cands.slice(0, Math.min(3, cands.length)));
}
/* acha o chunk dentro da frase de exemplo, para treinar o chunk em contexto */
function contextBlank(chunk){
  var norm = function(x){ return x.replace(/[’‘]/g,"'"); };
  var target = norm(chunk.en).replace(/[.?!…]+$/,'').replace(/\.\.\.$/,'').trim();
  var ex = norm(chunk.ex);
  var i = ex.toLowerCase().indexOf(target.toLowerCase());
  if(i === -1 || target.length < 6 || ex.length - target.length < 6) return null;
  return { before: chunk.ex.slice(0, i), answer: chunk.ex.slice(i, i+target.length), after: chunk.ex.slice(i+target.length) };
}
function pickExerciseType(chunk){
  var box = (activeState().cards[chunk.id]||{}).box||0;
  var words = chunk.en.split(/\s+/).length;
  var pool;
  if(box<=1) pool=['choice','scramble','cloze','type','context'];
  else if(box<=3) pool=['scramble','cloze','type','dictation','context'];
  else pool=['type','dictation','context','type'];
  if(!contextBlank(chunk)) pool = pool.filter(function(t){ return t!=='context'; });
  /* substituição: a partir da caixa 1, o mesmo chunk numa situação nova */
  if(box>=1 && chunk.vars && chunk.vars.length) pool.push('variation');
  if(words<4) pool = pool.filter(function(t){ return t!=='scramble'; });
  if(!HAS_TTS) pool = pool.filter(function(t){ return t!=='dictation'; });
  if(!pool.length) pool=['type'];
  var t, guard=0;
  do{ t = pick(pool); guard++; }while(pool.length>1 && t===session.lastExType && guard<10);
  session.lastExType = t;
  return t;
}
function buildExercise(chunk){
  var type = pickExerciseType(chunk);
  var ex = { chunkId:chunk.id, type:type, done:false, result:null, answer:'' };
  if(type==='choice'){ ex.options = shuffle([chunk].concat(distractors(chunk,3))); }
  if(type==='scramble'){
    var words = chunk.en.split(/\s+/);
    var order = shuffle(words.map(function(w,i){ return i; }));
    if(order.join(',')===words.map(function(w,i){return i;}).join(',')) order.reverse();
    ex.tiles = order.map(function(i){ return {w:words[i], used:false}; });
    ex.picked = [];
  }
  if(type==='context'){ ex.ctx = contextBlank(chunk); }
  if(type==='variation'){ ex.variant = pick(chunk.vars); }
  if(type==='cloze'){
    var cw = clozeWord(chunk.en);
    if(!cw){ ex.type='type'; } else { ex.cloze = cw; }
  }
  return ex;
}
function practiceResult(chunk, ok){
  session.stats.pTotal++;
  if(ok) session.stats.pRight++;
  else {
    var st = activeState(), card = st.cards[chunk.id];
    if(card){ card.due = addDays(todayStr(), 1); saveProfile(STATE.activeProfile); }
    if(!session.retried[chunk.id]){ session.retried[chunk.id]=true; session.practiceQueue.push(chunk); }
  }
}

/* ---------- RENDER HELPERS ---------- */
function el(html){ var t=document.createElement('template'); t.innerHTML=html.trim(); return t.content.firstElementChild; }
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
/* uma cor por caixa; antes a caixa 0 e a 1 tinham a mesma cor */
var BOX_COLORS = ['var(--ramp1)','var(--ramp2)','var(--ramp3)','var(--ramp4)','var(--ramp5)','var(--good)'];
var BOX_LABELS = ['Aprendendo','Caixa 1','Caixa 2','Caixa 3','Caixa 4','Dominado'];
function boxColor(box){ return BOX_COLORS[box] || BOX_COLORS[0]; }
/* "vários exemplos": as variações aparecem junto do exemplo, com áudio */
function variantsHtml(chunk){
  if(!chunk.vars || !chunk.vars.length) return '';
  return '<div class="vars"><div class="kicker" style="font-size:.7rem;">Em outras situações</div>'+chunk.vars.map(function(v){
    return '<button class="var-line" data-say="'+esc(v.en)+'" data-slow=""><span>🔊 '+esc(v.en)+'</span><span class="pt">'+esc(v.pt)+'</span></button>';
  }).join('')+'</div>';
}
function soundRow(chunk, opts){
  opts = opts || {};
  var h = '<div class="sound-row">';
  h += '<button class="sound-btn" data-say="'+esc(chunk.en)+'">🔊 Ouvir</button>';
  h += '<button class="sound-btn slow" data-say="'+esc(chunk.en)+'" data-slow="1">🐢 Devagar</button>';
  if(opts.example !== false) h += '<button class="sound-btn slow" data-say="'+esc(chunk.ex)+'">💬 Exemplo</button>';
  h += '</div>';
  return h;
}
function bindSound(root){
  root.querySelectorAll('[data-say]').forEach(function(b){
    b.onclick = function(){ speak(b.dataset.say, {slow: !!b.dataset.slow, btn:b}); };
  });
}
function bindEnter(input, fn){ input.addEventListener('keydown', function(e){ if(e.key==='Enter'){ e.preventDefault(); fn(); } }); }
function feedbackHtml(res, chunk, answer, opts){
  opts = opts || {};
  var title = res==='ok' ? '✅ Certo!' : (res==='almost' ? '🟡 Quase. Olha o detalhe:' : '❌ Ainda não. A forma certa:');
  var h = '<div class="feedback '+res+'"><div>'+title+'</div>';
  h += '<div class="target">'+(res==='ok' || !answer ? esc(chunk.en) : diffTarget(chunk.en, answer))+'</div>';
  if(res!=='ok' && answer && !opts.hideSaid) h += '<div class="said">Você: “'+esc(answer)+'”</div>';
  h += '</div>';
  return h;
}

function renderProfileSwitch(){
  var wrap = document.getElementById('profileSwitch');
  wrap.innerHTML = '';
  PROFILE_KEYS.forEach(function(k){
    var b = document.createElement('button');
    b.textContent = PROFILES[k].name;
    if(k === STATE.activeProfile) b.className = 'active';
    b.onclick = function(){ setActiveProfile(k); };
    wrap.appendChild(b);
  });
  document.getElementById('streakPill').textContent = '🔥 ' + currentStreak(activeState());
  document.getElementById('settingsBtn').onclick = openSettings;
}
function renderTabs(){
  document.querySelectorAll('.tab-btn').forEach(function(btn){
    btn.classList.toggle('active', btn.dataset.route === route);
    btn.onclick = function(){ stopListening(); route = btn.dataset.route; render(); };
  });
}

/* ---------- CONFIGURAÇÕES DE VOZ ---------- */
function openSettings(){
  var backdrop = el('<div class="modal-backdrop"></div>');
  var vs = rankedVoices();
  var cur = bestVoice();
  var opts = vs.map(function(v,i){
    var rec = i===0 ? ' ★ recomendada' : '';
    var sel = cur && (v.voiceURI===cur.voiceURI) ? ' selected' : '';
    return '<option value="'+esc(v.voiceURI)+'"'+sel+'>'+esc(v.name)+' ('+esc(v.lang)+')'+rec+'</option>';
  }).join('');
  var isMac = /Mac|iPhone|iPad/.test(navigator.platform||'') || /Mac|iPhone|iPad/.test(navigator.userAgent||'');
  var isWin = /Win/.test(navigator.platform||'');
  var tip = '';
  if(isMac) tip = 'No Mac/iPhone: as vozes mais humanas são as <b>Siri</b> e as marcadas como <b>Premium/Enhanced</b> (Ava, Zoe, Evan, Nathan, Samantha). Se não aparecerem na lista, baixe em <i>Ajustes → Acessibilidade → Conteúdo Falado → Vozes do Sistema → Inglês</i>. Depois recarregue esta página.';
  else if(isWin) tip = 'No Windows: use o <b>Microsoft Edge</b>, que traz vozes <b>“Online (Natural)”</b> (Aria, Jenny, Guy) que são praticamente humanas. No Chrome, a melhor costuma ser a “Google US English”.';
  else tip = 'No Android/Chrome, a voz “Google US English” é a mais natural. Em outros sistemas, prefira vozes com “Natural”, “Neural” ou “Premium” no nome.';
  backdrop.innerHTML = '<div class="modal">'+
    '<h3>Voz, áudio e microfone</h3>'+
    '<p class="tip" style="margin:6px 0 0;">A voz vem do seu aparelho, então a escolha aqui vale pra este navegador. Teste algumas: a diferença entre uma voz “robô” e uma natural é enorme.</p>'+
    '<div class="settings-row"><label>Voz em inglês</label>'+
      (vs.length ? '<select id="voiceSel">'+opts+'</select>' : '<p class="tip">Nenhuma voz em inglês encontrada ainda. Toque em “Testar” ou recarregue a página.</p>')+
    '</div>'+
    '<div class="settings-row"><label>Velocidade <span class="mono" id="rateVal">'+AUDIO.rate.toFixed(2)+'×</span></label><input type="range" id="rateRange" min="0.7" max="1.15" step="0.05" value="'+AUDIO.rate+'"></div>'+
    '<div class="settings-row"><label class="toggle" style="text-transform:none; letter-spacing:0; font-weight:500; color:var(--ink);"><input type="checkbox" id="autoChk" '+(AUDIO.autoplay?'checked':'')+'> Tocar o áudio automaticamente ao mostrar um chunk</label></div>'+
    '<div class="settings-row"><p class="tip">'+tip+'</p>'+
    '</div>'+
    '<div class="settings-row"><label>Microfone</label>'+
      (SR ? '<p class="tip" id="micStatus">Usado na revisão e no shadowing. Toque em testar e diga <i>“nice to meet you”</i>.</p><div><button class="mic-btn" id="micTest">🎤 Testar microfone</button></div>'
          : '<p class="tip">'+micErrorText('unsupported')+'</p>')+
    '</div>'+
    '<div class="cta-row" style="margin-top:16px;">'+
      '<button class="sound-btn" id="testVoice">🔊 Testar</button>'+
      '<button class="btn btn-ghost" id="settingsClose">Fechar</button>'+
    '</div></div>';
  document.body.appendChild(backdrop);
  backdrop.onclick = function(e){ if(e.target === backdrop) backdrop.remove(); };
  var sel = backdrop.querySelector('#voiceSel');
  if(sel) sel.onchange = function(){ AUDIO.voiceURI = sel.value; saveAudioPrefs(); speak('Nice to meet you. Let’s stay in touch.'); };
  var range = backdrop.querySelector('#rateRange');
  range.oninput = function(){ AUDIO.rate = parseFloat(range.value); backdrop.querySelector('#rateVal').textContent = AUDIO.rate.toFixed(2)+'×'; saveAudioPrefs(); };
  range.onchange = function(){ speak('How can I help you today?'); };
  backdrop.querySelector('#autoChk').onchange = function(e){ AUDIO.autoplay = e.target.checked; saveAudioPrefs(); };
  backdrop.querySelector('#testVoice').onclick = function(){ speak('Hi, I’d like to introduce myself. It’s a pleasure to meet you.', {btn:this}); };
  var micTest = backdrop.querySelector('#micTest');
  if(micTest) micTest.onclick = function(){
    var status = backdrop.querySelector('#micStatus');
    try{ speechSynthesis.cancel(); }catch(e){}
    micTest.classList.add('listening'); micTest.textContent = '🎙️ Ouvindo… fale agora';
    listenOnce(function(alts){
      status.innerHTML = '<b style="color:var(--good)">Funcionando.</b> Entendi: “'+esc(alts[0])+'”';
    }, function(err){
      status.innerHTML = '<b style="color:var(--bad)">Não funcionou.</b> '+micErrorText(err);
    }, function(){ micTest.classList.remove('listening'); micTest.textContent = '🎤 Testar de novo'; });
  };
  backdrop.querySelector('#settingsClose').onclick = function(){ stopListening(); backdrop.remove(); render(); };
}

/* ---------- VIEWS ---------- */
function viewDashboard(){
  var st = activeState(), deck = activeDeck(), today = todayStr();
  var wd = weekday(today), isSat = wd===REVIEW_DAY, isSun = wd===REST_DAY;
  var unseenLeft = unseenQueue().length;
  var due = dueQueue().length, unseen = Math.min(unseenLeft, pace());
  var newToday = isSat ? 0 : unseen;
  var doneToday = st.log[today] && st.log[today].done;
  var learnedTotal = Object.keys(st.cards).length;
  var mastered = Object.values(st.cards).filter(function(c){ return c.box >= 5; }).length;
  var caughtUp = (due===0 && newToday===0);
  var html = '';
  var dismissed = false; try{ dismissed = localStorage.getItem('cs_voice_hint')==='1'; }catch(e){}
  if(HAS_TTS && !AUDIO.voiceURI && !dismissed && englishVoices().length && voiceQualityIsLow()){
    html += '<div class="hint-banner"><span>🎧 A voz em inglês deste aparelho pode ficar bem mais natural. Escolha uma voz melhor nas configurações.</span><span style="display:flex;gap:6px;"><button id="hintOpen">Escolher voz</button><button id="hintClose" style="background:transparent;color:var(--blue);">Depois</button></span></div>';
  }
  html += '<div class="card">';
  html += '<h2>Olá, '+esc(deck.name)+'</h2>';
  var msg;
  if(isSun && !doneToday) msg = 'Domingo é dia livre: um filme, um jogo ou uma conversa em inglês, sem cobrança. A sequência não quebra. Se quiser praticar mesmo assim, conta como dia a mais.';
  else if(caughtUp && !unseenLeft) msg = 'Você já passou por todo o conteúdo deste baralho e não há nada vencendo hoje. Dá para fazer uma revisão bônus enquanto o próximo pacote de chunks não chega.';
  else if(caughtUp && isSat) msg = 'Sábado é dia só de revisão, e hoje não há nada vencendo. Dá para fazer uma revisão bônus ou aproveitar a folga.';
  else if(caughtUp) msg = 'Baralho em dia: nada vencendo hoje e nenhum chunk novo nesse ritmo. Sinal de que está indo bem. Dá para fazer uma revisão bônus.';
  else if(doneToday) msg = 'Sessão de hoje concluída. Pode repetir para praticar mais.';
  else if(isSat) msg = 'Sábado é dia só de revisão: '+due+' chunk(s) para revisar, sem conteúdo novo. É o dia de zerar o que ficou pendente na semana.';
  else msg = 'Pronto para a sessão de hoje? '+due+' para revisar e '+newToday+' chunk(s) novo(s). A sessão tem 5 blocos: revisão, novos, exercícios, shadowing e uma conversa, quando houver uma liberada.';
  html += '<p class="muted">'+msg+'</p>';
  html += '<div class="cta-row" style="margin-top:12px;">';
  if(caughtUp){
    html += '<button class="btn btn-primary" id="startBtn">Fazer revisão bônus →</button>';
  } else {
    html += '<button class="btn btn-primary" id="startBtn">'+(doneToday?'Praticar mais hoje':'Iniciar sessão de hoje')+' →</button>';
  }
  if(isSat && unseen) html += '<button class="btn btn-ghost" id="satNewBtn">Quero chunks novos hoje também</button>';
  html += '<label class="muted" style="display:flex; align-items:center; gap:6px;">Ritmo <select class="pace" id="paceSel"><option value="4">Leve, 4 por dia</option><option value="6">Padrão, 6 por dia</option><option value="9">Intenso, 9 por dia</option></select></label>';
  html += '</div></div>';
  html += '<div class="stat-grid">';
  html += statTile(currentStreak(st),'Sequência (dias)');
  html += statTile(learnedTotal+'/'+deck.chunks.length,'Chunks aprendidos');
  html += statTile(mastered,'Dominados');
  html += statTile(due,'Pra revisar hoje');
  html += '</div>';
  document.getElementById('view').innerHTML = html;
  document.getElementById('startBtn').onclick = caughtUp ? startBonusReview : function(){ startSession(!isSat); };
  var satNew = document.getElementById('satNewBtn'); if(satNew) satNew.onclick = function(){ startSession(true); };
  var sel = document.getElementById('paceSel');
  sel.value = String(pace());
  sel.onchange = function(){ activeState().settings.pace = parseInt(sel.value,10); saveProfile(STATE.activeProfile); render(); };
  var ho = document.getElementById('hintOpen'); if(ho) ho.onclick = openSettings;
  var hc = document.getElementById('hintClose'); if(hc) hc.onclick = function(){ try{ localStorage.setItem('cs_voice_hint','1'); }catch(e){} render(); };
}
function statTile(num,label){
  return '<div class="stat-tile"><div class="num mono">'+num+'</div><div class="label">'+label+'</div></div>';
}

function viewSession(){
  if(!session){ viewDashboard(); return; }
  var v = document.getElementById('view');
  var steps = ['review','new','practice','shadow','dialog','done'];
  var curIdx = steps.indexOf(session.step);
  var stepper = session.standalone ? '' : '<div class="stepper">' + steps.slice(0,5).map(function(s,i){
    var cls = i < curIdx ? 'done' : (i === curIdx ? 'now' : '');
    return '<div class="seg '+cls+'"></div>';
  }).join('') + '</div>';

  /* ---- 1. REVISÃO ---- */
  if(session.step === 'review'){
    var chunk = session.reviewQueue[session.reviewIndex];
    var card = activeState().cards[chunk.id] || {box:0};
    if(!session.reviewModes[session.reviewIndex]){
      session.reviewModes[session.reviewIndex] = (HAS_TTS && card.box>=2 && Math.random()<0.45) ? 'listen' : 'pt';
      if(session.reviewModes[session.reviewIndex]==='listen') autoSpeak(chunk.en);
    }
    var mode = session.reviewModes[session.reviewIndex];
    var html = stepper + sectionLabel('Aquecimento: revisão', (session.reviewIndex+1)+' de '+session.reviewQueue.length);
    html += '<div class="flashcard">';
    if(mode==='listen'){
      html += '<div class="ex-tag">Só de ouvido</div>';
      html += '<div class="kicker">Ouça e diga (em voz alta) o que significa e como se escreve</div>';
      if(!session.revealed){
        html += '<div class="listen-only">🎧</div>';
        html += '<div class="sound-row"><button class="sound-btn" data-say="'+esc(chunk.en)+'">🔊 Ouvir de novo</button><button class="sound-btn slow" data-say="'+esc(chunk.en)+'" data-slow="1">🐢 Devagar</button></div>';
      }
    } else {
      html += '<div class="kicker">Como você diz isso em inglês? Fale em voz alta antes de virar</div>';
      html += '<div class="front">'+esc(chunk.pt)+'</div>';
      if(!session.revealed && SR){
        var attPre = session.reviewAttempts[session.reviewIndex];
        if(attPre && attPre.listening){
          html += '<button class="mic-btn listening" id="reviewMicBtn">🎙️ Ouvindo… fale agora</button>';
        } else if(attPre && attPre.best){
          html += '<div class="tip">🎤 Gravado, '+Math.round(attPre.best.score*100)+'% de correspondência. Vire a carta pra ver o detalhe.</div>';
          html += '<button class="mic-btn" id="reviewMicBtn">🎤 Gravar de novo</button>';
        } else if(attPre && attPre.error){
          var micErr = micErrorText(attPre.error);
          html += '<div class="tip">'+micErr+'</div>';
          html += '<button class="mic-btn" id="reviewMicBtn">🎤 Tentar de novo</button>';
        } else {
          html += '<button class="mic-btn" id="reviewMicBtn">🎤 Falar em voz alta</button>';
        }
      }
    }
    if(session.revealed){
      html += '<div class="back">'+(mode==='listen'?'<div class="front" style="font-size:1.05rem;">'+esc(chunk.pt)+'</div>':'')+'<div class="en">'+esc(chunk.en)+'</div><div class="ex">“'+esc(chunk.ex)+'”</div>'+soundRow(chunk)+'</div>';
      var attPost = session.reviewAttempts[session.reviewIndex];
      var suggested = null;
      if(attPost && attPost.best){
        var g = reviewGrade(attPost.best.transcript, chunk.en);
        suggested = g==='ok' ? 'easy' : (g==='almost' ? 'hard' : 'again');
        var head2 = g==='ok' ? '🎉 Bateu certinho com o que você falou' : (g==='almost' ? '👍 Quase lá. A diferença:' : '🔁 Ficou bem diferente do que você falou:');
        html += '<div class="feedback '+g+'"><div>'+head2+'</div><div class="target">'+diffTarget(chunk.en, attPost.best.transcript)+'</div><div class="said">Você disse: “'+esc(attPost.best.transcript)+'”</div></div>';
      }
      html += '<div class="rate-row">';
      html += '<button class="rate-btn rate-again'+(suggested==='again'?' suggested':'')+'" data-r="again">Errei <span class="kbd">1</span></button>';
      html += '<button class="rate-btn rate-hard'+(suggested==='hard'?' suggested':'')+'" data-r="hard">Difícil <span class="kbd">2</span></button>';
      html += '<button class="rate-btn rate-easy'+(suggested==='easy'?' suggested':'')+'" data-r="easy">Fácil <span class="kbd">3</span></button>';
      html += '</div>';
      if(suggested) html += '<p class="kbd-hint">Sugestão com base no que você falou. A decisão final é sua.</p>';
    } else {
      html += '<button class="btn btn-secondary" id="revealBtn">Virar carta <span class="kbd">Enter</span></button>';
    }
    html += '</div>';
    v.innerHTML = html;
    bindSound(v);
    if(!session.revealed){
      document.getElementById('revealBtn').onclick = function(){ session.revealed = true; render(); if(mode!=='listen') autoSpeak(chunk.en); };
      var reviewMicBtn = document.getElementById('reviewMicBtn');
      if(reviewMicBtn){
        if(!session.reviewAttempts[session.reviewIndex]) session.reviewAttempts[session.reviewIndex] = { listening:false, best:null, error:null };
        var att = session.reviewAttempts[session.reviewIndex];
        reviewMicBtn.onclick = function(){
          if(att.listening){ stopListening(); return; }
          try{ speechSynthesis.cancel(); }catch(e){}
          att.listening = true; att.error = null; render();
          listenOnce(function(alts){
            var best = null;
            alts.forEach(function(t){ var s = similarity(t, chunk.en); if(!best || s>best.score) best = {transcript:t, score:s}; });
            if(!att.best || best.score>att.best.score) att.best = best;
          }, function(err){ if(!att.best) att.error = err; }, function(){ att.listening=false; render(); });
        };
      }
    }
    /* Os botões Errei/Difícil/Fácil (data-r) não são ligados aqui — veja o
       listener delegado em #view mais abaixo no arquivo. Isso evita que eles
       fiquem "mortos" se algo nesta função lançar um erro entre o innerHTML
       e a ligação. */
    return;
  }

  /* ---- 2. CHUNKS NOVOS (mostrar → produzir) ----
     Antes a checagem era de múltipla escolha, que só testa reconhecimento.
     Agora a pessoa precisa PRODUZIR o chunk (falar ou digitar) a partir do
     português: é o esforço de lembrar que fixa. Dica de iniciais opcional. */
  if(session.step === 'new'){
    var chunk = session.newQueue[session.newIndex];
    var html = stepper + sectionLabel('Chunks novos', (session.newIndex+1)+' de '+session.newQueue.length);
    html += '<div class="flashcard">';
    if(session.newPhase==='show'){
      html += '<div class="kicker">'+esc(chunk.pt)+'</div>';
      html += '<div class="back"><div class="en">'+esc(chunk.en)+'</div><div class="ex">“'+esc(chunk.ex)+'”</div>'+soundRow(chunk)+'</div>';
      html += variantsHtml(chunk);
      html += '<p class="muted" style="margin:0; max-width:46ch;">Ouça, repita em voz alta 2 ou 3 vezes imitando a entonação. Depois você vai ter que dizer sozinho, sem ver.</p>';
      html += '<div class="cta-row" style="justify-content:center; margin-top:6px;">';
      html += '<button class="btn btn-primary" id="learnBtn">Entendi, me testa <span class="kbd">Enter</span></button>';
      html += '</div>';
    } else {
      var chk = session.newCheck;
      html += '<div class="ex-tag">Agora é com você</div>';
      html += '<div class="kicker">Diga ou escreva em inglês, sem olhar</div><div class="front">'+esc(chunk.pt)+'</div>';
      if(chk.hint && !chk.answered) html += '<div class="hint-letters mono">'+esc(initialsHint(chunk.en))+'</div>';
      if(!chk.answered){
        html += '<input class="practice-input" id="newInput" placeholder="escreva em inglês…" autocomplete="off" autocapitalize="off" spellcheck="false" value="'+esc(chk.answer||'')+'" />';
        if(SR){
          html += '<button class="mic-btn'+(chk.listening?' listening':'')+'" id="newMic">'+(chk.listening?'🎙️ Ouvindo… fale agora':'🎤 Falar em vez de digitar')+'</button>';
          if(chk.error) html += '<div class="tip">'+micErrorText(chk.error)+'</div>';
        }
        html += '<div class="cta-row" style="justify-content:center;">';
        html += '<button class="btn btn-primary" id="checkNew">Conferir <span class="kbd">Enter</span></button>';
        if(!chk.hint) html += '<button class="btn btn-ghost" id="newHint">Dica</button>';
        html += '<button class="btn btn-ghost" id="newGiveUp">Não lembro</button>';
        html += '</div>';
      } else {
        html += feedbackHtml(chk.result, chunk, chk.answer);
        html += '<div class="tip">'+(chk.result==='bad' ? 'Sem problema: ele volta amanhã e de novo na prática de hoje.' : (chk.hint ? 'Com dica, mas saiu. Ele volta amanhã para fixar.' : 'Saiu de memória. Já está na sua fila de revisão.'))+'</div>';
        html += soundRow(chunk, {example:false});
        html += '<div class="cta-row" style="justify-content:center;"><button class="btn btn-primary" id="nextNew">Próximo <span class="kbd">Enter</span></button></div>';
      }
    }
    html += '</div>';
    v.innerHTML = html;
    bindSound(v);
    if(session.newPhase==='show'){
      if(!session.newShown || session.newShown!==chunk.id){ session.newShown = chunk.id; autoSpeak(chunk.en); }
      document.getElementById('learnBtn').onclick = function(){
        stopSpeaking();
        session.newPhase='check';
        session.newCheck = { answered:false, result:null, answer:'', hint:false, listening:false, error:null };
        render();
      };
    } else {
      var chk2 = session.newCheck;
      var finishNew = function(answer, result){
        chk2.answer = answer; chk2.result = result; chk2.answered = true;
        session.stats.newTotal++;
        if(result !== 'bad') session.stats.newRight++;
        learnCard(chunk, 0);
        render();
        speak(chunk.en);
      };
      var ni = document.getElementById('newInput');
      if(ni){
        ni.focus();
        ni.oninput = function(){ chk2.answer = ni.value; };
        var doCheckNew = function(){ var val = ni.value.trim(); if(!val) return; finishNew(val, grade(val, chunk.en)); };
        document.getElementById('checkNew').onclick = doCheckNew;
        bindEnter(ni, doCheckNew);
        var nh = document.getElementById('newHint'); if(nh) nh.onclick = function(){ chk2.hint = true; render(); };
        document.getElementById('newGiveUp').onclick = function(){ finishNew(ni.value.trim(), 'bad'); };
        var nm = document.getElementById('newMic');
        if(nm) nm.onclick = function(){
          if(chk2.listening){ stopListening(); return; }
          stopSpeaking();
          chk2.listening = true; chk2.error = null; render();
          var heard = null;
          listenOnce(function(alts){ heard = bestAlternative(alts, chunk.en); },
            function(err){ chk2.error = err; },
            function(){
              chk2.listening = false;
              if(heard){ finishNew(heard.transcript, reviewGrade(heard.transcript, chunk.en)); }
              else render();
            });
        };
      }
      var nn = document.getElementById('nextNew'); if(nn) nn.onclick = advanceNew;
    }
    return;
  }

  /* ---- 3. PRÁTICA ATIVA (exercícios variados com correção) ---- */
  if(session.step === 'practice'){
    if(!session.practiceQueue.length){ session.step='shadow'; render(); return; }
    var chunk = session.practiceQueue[session.practiceIndex];
    if(!session.ex || session.ex.chunkId!==chunk.id){ session.ex = buildExercise(chunk); if(session.ex.type==='dictation') autoSpeak(chunk.en); }
    var ex = session.ex;
    var labels = {type:'Digite de memória', choice:'Múltipla escolha', scramble:'Monte a frase', dictation:'Ditado', cloze:'Complete a lacuna', context:'Chunk na frase', variation:'Outra situação'};
    var html = stepper + sectionLabel('Prática ativa', (session.practiceIndex+1)+' de '+session.practiceQueue.length);
    html += '<div class="flashcard">';
    html += '<div class="ex-tag">'+labels[ex.type]+'</div>';

    if(ex.type==='type'){
      html += '<div class="front">'+esc(chunk.pt)+'</div>';
      html += '<input class="practice-input'+(ex.done?(ex.result==='bad'?' bad':' ok'):'')+'" id="pInput" placeholder="escreva em inglês…" autocomplete="off" autocapitalize="off" spellcheck="false" value="'+esc(ex.answer)+'" '+(ex.done?'disabled':'')+' />';
    }
    if(ex.type==='dictation'){
      html += '<div class="kicker">Ouça e escreva exatamente o que ouviu</div>';
      html += '<div class="sound-row"><button class="sound-btn" data-say="'+esc(chunk.en)+'">🔊 Ouvir</button><button class="sound-btn slow" data-say="'+esc(chunk.en)+'" data-slow="1">🐢 Devagar</button></div>';
      html += '<input class="practice-input'+(ex.done?(ex.result==='bad'?' bad':' ok'):'')+'" id="pInput" placeholder="o que você ouviu…" autocomplete="off" autocapitalize="off" spellcheck="false" value="'+esc(ex.answer)+'" '+(ex.done?'disabled':'')+' />';
      if(ex.done) html += '<div class="muted">'+esc(chunk.pt)+'</div>';
    }
    if(ex.type==='cloze'){
      var toks = chunk.en.split(/\s+/);
      html += '<div class="muted">'+esc(chunk.pt)+'</div>';
      html += '<div class="cloze">'+toks.map(function(t,i){ return i===ex.cloze.i ? '<span class="blank">'+(ex.done?esc(t):'')+'</span>' : esc(t); }).join(' ')+'</div>';
      html += '<input class="practice-input'+(ex.done?(ex.result==='bad'?' bad':' ok'):'')+'" id="pInput" placeholder="a palavra que falta" autocomplete="off" autocapitalize="off" spellcheck="false" value="'+esc(ex.answer)+'" '+(ex.done?'disabled':'')+' style="max-width:240px;" />';
    }
    if(ex.type==='variation'){
      html += '<div class="kicker">Use o chunk <b>'+esc(chunk.en)+'</b> nesta situação:</div>';
      html += '<div class="front">'+esc(ex.variant.pt)+'</div>';
      html += '<input class="practice-input'+(ex.done?(ex.result==='bad'?' bad':' ok'):'')+'" id="pInput" placeholder="a frase inteira em inglês…" autocomplete="off" autocapitalize="off" spellcheck="false" value="'+esc(ex.answer)+'" '+(ex.done?'disabled':'')+' style="max-width:460px;" />';
    }
    if(ex.type==='context'){
      html += '<div class="kicker">Complete a frase com o chunk: <b>'+esc(chunk.pt)+'</b></div>';
      html += '<div class="cloze" style="font-size:1.1rem;">'+esc(ex.ctx.before)+'<span class="blank">'+(ex.done?esc(ex.ctx.answer):'&nbsp;')+'</span>'+esc(ex.ctx.after)+'</div>';
      html += '<input class="practice-input'+(ex.done?(ex.result==='bad'?' bad':' ok'):'')+'" id="pInput" placeholder="o chunk que falta…" autocomplete="off" autocapitalize="off" spellcheck="false" value="'+esc(ex.answer)+'" '+(ex.done?'disabled':'')+' />';
    }
    if(ex.type==='choice'){
      html += '<div class="front">'+esc(chunk.pt)+'</div>';
      html += '<div class="choice-list">'+ex.options.map(function(o,i){
        var cls='';
        if(ex.done){ if(o.id===chunk.id) cls=' right'; else if(o.id===ex.answer) cls=' wrong'; }
        return '<button class="choice-btn'+cls+'" data-id="'+o.id+'" '+(ex.done?'disabled':'')+'><span class="k">'+(i+1)+'</span>'+esc(o.en)+'</button>';
      }).join('')+'</div>';
    }
    if(ex.type==='scramble'){
      html += '<div class="front">'+esc(chunk.pt)+'</div>';
      html += '<div class="answer-box" id="ansBox">'+(ex.picked.length ? ex.picked.map(function(p,i){ return '<button class="tile picked" data-pick="'+i+'">'+esc(ex.tiles[p].w)+'</button>'; }).join('') : '<span class="ph">toque nas palavras na ordem certa</span>')+'</div>';
      html += '<div class="tile-row">'+ex.tiles.map(function(t,i){ return '<button class="tile'+(t.used?' used':'')+'" data-tile="'+i+'">'+esc(t.w)+'</button>'; }).join('')+'</div>';
    }

    if(!ex.done){
      if(ex.type!=='choice'){
        html += '<div class="cta-row" style="justify-content:center;">';
        html += '<button class="btn btn-primary" id="checkBtn">Conferir <span class="kbd">Enter</span></button>';
        html += '<button class="btn btn-ghost" id="giveUp">Não sei</button>';
        html += '</div>';
      }
    } else {
      var shown = ex.type==='cloze' ? ex.answer : ex.answer;
      if(ex.type==='cloze'){
        html += '<div class="feedback '+ex.result+'">'+(ex.result==='ok'?'✅ Certo!':'❌ A palavra era <b>'+esc(ex.cloze.raw)+'</b>.')+'<div class="target">'+esc(chunk.en)+'</div></div>';
      } else if(ex.type==='choice'){
        html += '<div class="feedback '+ex.result+'">'+(ex.result==='ok'?'✅ Certo!':'❌ Era: <b>'+esc(chunk.en)+'</b>')+'</div>';
      } else {
        html += feedbackHtml(ex.result, ex.type==='variation' ? {en:ex.variant.en} : chunk, shown);
      }
      html += soundRow(chunk, {example:false});
      html += '<div class="cta-row" style="justify-content:center;"><button class="btn btn-primary" id="nextPractice">Próximo <span class="kbd">Enter</span></button></div>';
    }
    html += '</div>';
    html += '<p class="kbd-hint" style="text-align:center;">'+session.stats.pRight+' certo(s) de '+session.stats.pTotal+' · errou? o chunk volta no fim do bloco e amanhã</p>';
    v.innerHTML = html;
    bindSound(v);

    function finishEx(answer, result){
      ex.answer = answer; ex.result = result; ex.done = true;
      practiceResult(chunk, result!=='bad');
      render();
      if(result!=='bad') speak(ex.type==='variation' ? ex.variant.en : chunk.en);
    }
    if(!ex.done){
      var inp = document.getElementById('pInput');
      if(inp){ inp.focus(); inp.oninput = function(){ ex.answer = inp.value; }; }
      var checkBtn = document.getElementById('checkBtn');
      var doCheck = function(){
        if(ex.type==='variation'){
          var valv = inp.value.trim(); if(!valv) return;
          finishEx(valv, grade(valv, ex.variant.en));
        } else if(ex.type==='type' || ex.type==='dictation' || ex.type==='context'){
          var val = inp.value.trim(); if(!val) return;
          finishEx(val, grade(val, chunk.en));
        } else if(ex.type==='cloze'){
          var val2 = inp.value.trim(); if(!val2) return;
          finishEx(val2, normalize(val2)===normalize(ex.cloze.raw) ? 'ok' : (similarity(val2, ex.cloze.raw)>=0.75 ? 'almost' : 'bad'));
        } else if(ex.type==='scramble'){
          if(!ex.picked.length) return;
          var built = ex.picked.map(function(p){ return ex.tiles[p].w; }).join(' ');
          finishEx(built, normalize(built)===normalize(chunk.en) ? 'ok' : 'bad');
        }
      };
      if(checkBtn) checkBtn.onclick = doCheck;
      if(inp) bindEnter(inp, doCheck);
      var giveUp = document.getElementById('giveUp');
      if(giveUp) giveUp.onclick = function(){ finishEx(ex.type==='scramble' ? ex.picked.map(function(p){ return ex.tiles[p].w; }).join(' ') : (inp?inp.value.trim():''), 'bad'); };
      v.querySelectorAll('.choice-btn').forEach(function(b){
        b.onclick = function(){ finishEx(b.dataset.id, b.dataset.id===chunk.id ? 'ok' : 'bad'); };
      });
      v.querySelectorAll('[data-tile]').forEach(function(b){
        b.onclick = function(){ var i=parseInt(b.dataset.tile,10); if(ex.tiles[i].used) return; ex.tiles[i].used=true; ex.picked.push(i); render(); };
      });
      v.querySelectorAll('[data-pick]').forEach(function(b){
        b.onclick = function(){ var k=parseInt(b.dataset.pick,10); var ti=ex.picked.splice(k,1)[0]; ex.tiles[ti].used=false; render(); };
      });
    } else {
      document.getElementById('nextPractice').onclick = advancePractice;
    }
    return;
  }

  /* ---- 4. SHADOWING (com microfone) ---- */
  if(session.step === 'shadow'){
    if(!session.shadowQueue.length){ finishSession(); return; }
    var chunk = session.shadowQueue[session.shadowIndex];
    if(!session.shadow){ session.shadow = { chunkId:chunk.id, listening:false, tries:0, best:null, transcript:'', error:null }; autoSpeak(chunk.en); }
    var sh = session.shadow;
    var html = stepper + sectionLabel('Shadowing: fale em voz alta', (session.shadowIndex+1)+' de '+session.shadowQueue.length);
    html += '<div class="flashcard">';
    html += '<div class="en">'+esc(chunk.en)+'</div>';
    html += '<div class="ex">“'+esc(chunk.ex)+'”</div>';
    html += soundRow(chunk);
    html += '<p class="muted" style="margin:0; max-width:46ch;">Ouça, depois fale <b>junto</b> com a voz (sombra), imitando ritmo e entonação. Faça 2–3 vezes; depois grave pra conferir.</p>';
    if(SR){
      html += '<button class="mic-btn'+(sh.listening?' listening':'')+'" id="micBtn">'+(sh.listening?'🎙️ Ouvindo… fale agora':'🎤 Gravar minha pronúncia')+'</button>';
      if(sh.best){
        var pct = Math.round(sh.best.score*100);
        var cls = pct>=85?'ok':(pct>=65?'almost':'bad');
        var head = pct>=85 ? '🎉 Excelente, '+pct+'% de correspondência' : (pct>=65 ? '👍 Bom, '+pct+'%. Repita as palavras marcadas:' : '🔁 '+pct+'%. Ouça de novo, devagar, e tente outra vez:');
        html += '<div class="feedback '+cls+'"><div>'+head+'</div><div class="target">'+diffTarget(chunk.en, sh.best.transcript)+'</div><div class="said">Entendi: “'+esc(sh.best.transcript)+'”</div></div>';
        html += '<p class="kbd-hint" style="max-width:46ch;">A porcentagem mostra o quanto o reconhecedor entendeu da sua fala. É um bom sinal de clareza, mas não é uma nota de sotaque.</p>';
      } else if(sh.error){
        var em = micErrorText(sh.error);
        html += '<div class="feedback almost">'+em+'</div>';
      }
    } else {
      html += '<p class="tip">Reconhecimento de fala não disponível neste navegador. Abra no Chrome, Edge ou Safari pra ter feedback de pronúncia. Enquanto isso, grave-se com o celular e compare com a voz.</p>';
    }
    html += '<div class="cta-row" style="justify-content:center; margin-top:6px;"><button class="btn btn-primary" id="nextShadow">'+(sh.best && sh.best.score>=0.85?'Mandou bem, próximo':'Pratiquei, próximo')+' <span class="kbd">Enter</span></button></div>';
    html += '</div>';
    v.innerHTML = html;
    bindSound(v);
    var mic = document.getElementById('micBtn');
    if(mic) mic.onclick = function(){
      if(sh.listening){ stopListening(); return; }
      try{ speechSynthesis.cancel(); }catch(e){}
      sh.listening = true; sh.error = null; render();
      listenOnce(function(alts){
        var best = null;
        alts.forEach(function(t){ var s = similarity(t, chunk.en); if(!best || s>best.score) best = {transcript:t, score:s}; });
        sh.tries++;
        if(!sh.best || best.score>sh.best.score) sh.best = best;
        sh.last = best;
        session.stats.shadowScores.push(best.score);
      }, function(err){ if(!sh.best) sh.error = err; }, function(){ sh.listening=false; render(); });
    };
    document.getElementById('nextShadow').onclick = advanceShadow;
    return;
  }

  /* ---- 5. CONVERSA (ouvir → fazer o seu papel) ---- */
  if(session.step === 'dialog'){
    var dl = session.dialog, g = window.CS_DIALOGS[dl.key], falas = g.falas;
    var bubble = function(f, showEn, showPt){
      return '<div class="bubble '+f[0]+'"><div class="who">'+(f[0]==='voce'?'Você':'Outra pessoa')+'</div>'+
        (showEn ? '<div>'+esc(f[1])+'</div>' : '<div class="muted">🔊 …</div>')+
        (showPt ? '<div class="pt">'+esc(f[2])+'</div>' : '')+'</div>';
    };
    var html = stepper + sectionLabel('Conversa: '+esc(g.titulo), dl.phase==='listen' ? 'ouvir' : (dl.idx < falas.length ? 'fala '+(dl.idx+1)+' de '+falas.length : 'fim'));
    html += '<div class="flashcard">';
    if(dl.phase==='listen'){
      html += '<div class="ex-tag">1. Ouça</div>';
      html += '<p class="muted" style="margin:0; max-width:48ch;">Ouça a conversa inteira antes de ler. Tente entender pelo contexto: você já conhece os chunks que aparecem nela.</p>';
      html += '<button class="sound-btn" id="dlgPlay">'+(dl.playing ? '⏹ Parar' : '▶️ Ouvir a conversa')+'</button>';
      if(dl.showText){
        html += '<div class="chat">'+falas.map(function(f){ return bubble(f, true, dl.showPt); }).join('')+'</div>';
        html += '<button class="btn btn-ghost" id="dlgPt">'+(dl.showPt ? 'Esconder tradução' : 'Mostrar tradução')+'</button>';
      } else {
        html += '<button class="btn btn-ghost" id="dlgText">Mostrar o texto</button>';
      }
      html += '<div class="cta-row" style="justify-content:center;"><button class="btn btn-primary" id="dlgStart">2. Agora faça o seu papel <span class="kbd">Enter</span></button></div>';
    } else if(dl.idx < falas.length){
      var cur = falas[dl.idx];
      html += '<div class="ex-tag">2. Sua vez de falar</div>';
      html += '<div class="chat">'+falas.slice(0, dl.idx).map(function(f){ return bubble(f, true, false); }).join('');
      if(cur[0]==='outro'){
        html += bubble(cur, true, false)+'</div>';
        html += '<div class="sound-row"><button class="sound-btn" id="dlgRepeat">🔊 Ouvir de novo</button></div>';
        html += '<div class="cta-row" style="justify-content:center;"><button class="btn btn-primary" id="dlgNext">Continuar <span class="kbd">Enter</span></button></div>';
      } else {
        html += '</div>';
        var tn = dl.turns[dl.idx] || (dl.turns[dl.idx] = { answered:false, result:null, answer:'', listening:false, error:null });
        html += '<div class="kicker">Responda em inglês</div><div class="front" style="font-size:1.1rem;">'+esc(cur[2])+'</div>';
        if(!tn.answered){
          if(SR){
            html += '<button class="mic-btn'+(tn.listening?' listening':'')+'" id="dlgMic">'+(tn.listening?'🎙️ Ouvindo… fale agora':'🎤 Falar a minha fala')+'</button>';
            if(tn.error) html += '<div class="tip">'+micErrorText(tn.error)+'</div>';
          }
          html += '<input class="practice-input" id="dlgInput" placeholder="ou escreva aqui…" autocomplete="off" autocapitalize="off" spellcheck="false" value="'+esc(tn.answer)+'" />';
          html += '<div class="cta-row" style="justify-content:center;"><button class="btn btn-primary" id="dlgCheck">Conferir <span class="kbd">Enter</span></button><button class="btn btn-ghost" id="dlgShow">Mostrar a fala</button></div>';
        } else {
          html += feedbackHtml(tn.result, {en:cur[1]}, tn.answer, {hideSaid: !tn.answer});
          html += '<div class="sound-row"><button class="sound-btn" data-say="'+esc(cur[1])+'">🔊 Ouvir a fala</button></div>';
          html += '<div class="cta-row" style="justify-content:center;"><button class="btn btn-primary" id="dlgNext">Continuar <span class="kbd">Enter</span></button></div>';
        }
      }
    } else {
      var mine = falas.map(function(f,i){ return f[0]==='voce' ? dl.turns[i] : null; }).filter(Boolean);
      var okCount = mine.filter(function(t){ return t.result !== 'bad'; }).length;
      html += '<div class="ex-tag">Conversa completa</div>';
      html += '<div class="score-ring">'+okCount+' de '+mine.length+'</div>';
      html += '<p class="muted" style="margin:0; max-width:46ch;">'+(okCount===mine.length ? 'Você deu conta da conversa inteira. É isso que o chunk decorado vira: fala de verdade.' : 'As falas que escaparam mostram quais chunks ainda precisam de revisão. Eles voltam nos próximos dias.')+'</p>';
      html += '<div class="chat">'+falas.map(function(f){ return bubble(f, true, true); }).join('')+'</div>';
      html += '<div class="cta-row" style="justify-content:center;"><button class="btn btn-primary" id="dlgDone">Concluir <span class="kbd">Enter</span></button></div>';
    }
    html += '</div>';
    v.innerHTML = html;
    bindSound(v);

    var byId = function(id){ return document.getElementById(id); };
    if(byId('dlgPlay')) byId('dlgPlay').onclick = function(){
      if(dl.playing){ dl.playing = false; stopSpeaking(); render(); return; }
      dl.playing = true; render();
      playConversation(falas, function(){ if(session && session.dialog===dl){ dl.playing = false; render(); } });
    };
    if(byId('dlgText')) byId('dlgText').onclick = function(){ dl.showText = true; render(); };
    if(byId('dlgPt')) byId('dlgPt').onclick = function(){ dl.showPt = !dl.showPt; render(); };
    if(byId('dlgStart')) byId('dlgStart').onclick = function(){ dl.playing = false; stopSpeaking(); dl.phase = 'roleplay'; dl.idx = 0; dl.spoken = -1; render(); };
    if(dl.phase==='roleplay' && dl.idx < falas.length && falas[dl.idx][0]==='outro' && dl.spoken !== dl.idx){
      dl.spoken = dl.idx; speakLine(falas[dl.idx][1], 'outro');
    }
    if(byId('dlgRepeat')) byId('dlgRepeat').onclick = function(){ stopSpeaking(); speakLine(falas[dl.idx][1], 'outro'); };
    if(byId('dlgNext')) byId('dlgNext').onclick = function(){ stopListening(); stopSpeaking(); dl.idx++; render(); };
    if(byId('dlgDone')) byId('dlgDone').onclick = finishDialog;
    var di = byId('dlgInput');
    if(di){
      var tn2 = dl.turns[dl.idx], target = falas[dl.idx][1];
      var answerTurn = function(ans, res){ tn2.answer = ans; tn2.result = res; tn2.answered = true; render(); if(res!=='bad') speakLine(target, 'voce'); };
      di.oninput = function(){ tn2.answer = di.value; };
      var doDlgCheck = function(){ var val = di.value.trim(); if(!val) return; answerTurn(val, reviewGrade(val, target)); };
      byId('dlgCheck').onclick = doDlgCheck;
      bindEnter(di, doDlgCheck);
      byId('dlgShow').onclick = function(){ answerTurn('', 'bad'); };
      var dm = byId('dlgMic');
      if(dm) dm.onclick = function(){
        if(tn2.listening){ stopListening(); return; }
        stopSpeaking();
        tn2.listening = true; tn2.error = null; render();
        var heard = null;
        listenOnce(function(alts){ heard = bestAlternative(alts, target); }, function(err){ tn2.error = err; },
          function(){ tn2.listening = false; if(heard) answerTurn(heard.transcript, reviewGrade(heard.transcript, target)); else render(); });
      };
    }
    return;
  }

  /* ---- 6. FIM ---- */
  if(session.step === 'done'){
    var s = session.stats;
    var acc = s.pTotal ? Math.round(s.pRight/s.pTotal*100) : null;
    var shAvg = s.shadowScores.length ? Math.round(s.shadowScores.reduce(function(a,b){return a+b;},0)/s.shadowScores.length*100) : null;
    var line;
    if(acc===null) line = 'Sessão registrada. Amanhã tem mais.';
    else if(acc>=90) line = 'Sessão forte, acima de 90% nos exercícios. Esse ritmo fixa rápido.';
    else if(acc>=70) line = 'Boa sessão. Os chunks que escaparam voltam amanhã na revisão. É assim que o método funciona.';
    else line = 'Dia difícil, mas contou. Errar na prática é exatamente o que faz a revisão de amanhã valer a pena.';
    var html = '<div class="card" style="text-align:center;">';
    html += '<h2>Sessão concluída! 🎉</h2>';
    html += '<p class="muted">'+line+'</p>';
    html += '<div class="done-grid">';
    html += statTile(session.ratedIds.length,'Revisados');
    html += statTile(session.learnedIds.length,'Novos');
    if(acc!==null) html += statTile(acc+'%','Acerto na prática');
    if(shAvg!==null) html += statTile(shAvg+'%','Pronúncia');
    html += statTile(currentStreak(activeState()),'Dias seguidos');
    html += '</div>';
    html += '<div class="cta-row" style="justify-content:center; margin-top:16px;">';
    html += '<button class="btn btn-primary" id="backHome">Voltar ao início</button>';
    html += '</div></div>';
    v.innerHTML = html;
    document.getElementById('backHome').onclick = function(){ session = null; render(); };
    return;
  }
}
function sectionLabel(title, sub){
  return '<div style="display:flex; justify-content:space-between; align-items:baseline;"><h2 style="font-size:1rem;">'+title+'</h2><span class="muted mono" style="font-size:.8rem;">'+sub+'</span></div>';
}

/* atalhos de teclado durante a sessão */
document.addEventListener('keydown', function(e){
  if(!session || route!=='hoje') return;
  var tag = (e.target && e.target.tagName) || '';
  var typing = tag==='INPUT' || tag==='TEXTAREA' || tag==='SELECT';
  if(document.querySelector('.modal-backdrop')) return;
  if(e.key==='Enter' && !typing){
    var ids = ['revealBtn','learnBtn','nextNew','checkNew','checkBtn','nextPractice','nextShadow','dlgStart','dlgNext','dlgCheck','dlgDone','backHome'];
    for(var i=0;i<ids.length;i++){ var b=document.getElementById(ids[i]); if(b){ e.preventDefault(); b.click(); return; } }
  }
  if(!typing && (e.key===' ')){ var s=document.querySelector('[data-say]:not([data-slow])'); if(s){ e.preventDefault(); s.click(); } }
  if(!typing && /^[1-4]$/.test(e.key)){
    var n = parseInt(e.key,10);
    var rate = document.querySelectorAll('.rate-btn'); if(rate.length && n<=3){ rate[n-1].click(); return; }
    var ch = document.querySelectorAll('.choice-btn:not([disabled])'); if(ch.length>=n){ ch[n-1].click(); }
  }
});

function viewDeck(){
  var st = activeState(), deck = activeDeck();
  var html = '<div class="card"><h2>Baralho de '+esc(deck.name)+'</h2><p class="muted">Toque em um chunk pra ver a tradução e ouvir a pronúncia. Quanto mais forte a cor da bolinha, mais perto de dominado; verde é dominado.</p></div>';
  var dlgs = {}; dialogsFor(STATE.activeProfile).forEach(function(x){ dlgs[x.key] = x; });
  deck.cats.forEach(function(cat){
    var items = deck.chunks.filter(function(c){ return c.cat === cat.key; });
    html += '<div class="card cat-block"><div class="cat-title"><span>'+esc(cat.label)+(cat.level ? ' <span class="level-tag">'+cat.level+'</span>' : '')+'</span><span class="muted mono" style="font-weight:500; font-size:.76rem;">'+items.filter(function(c){return st.cards[c.id];}).length+'/'+items.length+'</span></div>';
    html += '<div class="chip-row">';
    items.forEach(function(c){
      var card = st.cards[c.id];
      var color = card ? boxColor(card.box) : 'var(--surface-2)';
      html += '<button class="chip" data-id="'+c.id+'"><span class="dot" style="background:'+color+'"></span>'+esc(c.pt)+'</button>';
    });
    html += '</div>';
    var dx = dlgs[cat.key];
    if(dx){
      html += dx.unlocked
        ? '<button class="btn btn-secondary dlg-open" data-dlg="'+cat.key+'" style="align-self:flex-start;">💬 Conversa: '+esc(dx.d.titulo)+(dx.last ? ' <span class="muted" style="font-weight:500;">· feita</span>' : '')+'</button>'
        : '<div class="tip">🔒 Conversa “'+esc(dx.d.titulo)+'”: libera quando você aprender os chunks dela ('+dx.learned+' de '+dx.total+').</div>';
    }
    html += '</div>';
  });
  document.getElementById('view').innerHTML = html;
  document.querySelectorAll('.chip').forEach(function(chip){
    chip.onclick = function(){ openChunkModal(chip.dataset.id); };
  });
  document.querySelectorAll('.dlg-open').forEach(function(b){
    b.onclick = function(){ startStandaloneDialog(b.dataset.dlg); };
  });
}
function openChunkModal(id){
  var deck = activeDeck(), st = activeState();
  var chunk = deck.chunks.find(function(c){ return c.id === id; });
  var card = st.cards[id];
  var backdrop = el('<div class="modal-backdrop"></div>');
  var statusTxt = card ? (card.box>=5?'Dominado':'Caixa '+card.box+' de 5 · próxima revisão '+card.due) : 'Ainda não iniciado';
  backdrop.innerHTML = '<div class="modal">'+
    '<div class="kicker muted" style="font-size:.75rem; text-transform:uppercase; letter-spacing:.06em;">'+esc(statusTxt)+'</div>'+
    '<h3 style="margin-top:6px;">'+esc(chunk.pt)+'</h3>'+
    '<div class="en" style="color:var(--blue); font-family:Fraunces,serif; font-size:1.3rem; font-weight:700; margin-top:8px;">'+esc(chunk.en)+'</div>'+
    '<div class="ex muted" style="font-style:italic; margin-top:6px;">“'+esc(chunk.ex)+'”</div>'+
    '<div style="margin-top:14px;">'+soundRow(chunk)+'</div>'+
    '<div style="margin-top:12px;">'+variantsHtml(chunk)+'</div>'+
    '<div class="cta-row" style="margin-top:14px;">'+
      (!card ? '<button class="btn btn-secondary" id="modalKnow">Já sei isso</button>' : '')+
      '<button class="btn btn-ghost" id="modalClose">Fechar</button>'+
    '</div></div>';
  document.body.appendChild(backdrop);
  backdrop.onclick = function(e){ if(e.target === backdrop) backdrop.remove(); };
  bindSound(backdrop);
  backdrop.querySelector('#modalClose').onclick = function(){ backdrop.remove(); };
  var knowBtn = backdrop.querySelector('#modalKnow');
  if(knowBtn) knowBtn.onclick = function(){ learnCard(chunk, 2); backdrop.remove(); render(); };
  autoSpeak(chunk.en);
}

/* Metas por nível (A1, A2, B1). Uma categoria conta como "consigo" quando
   80% dos chunks dela estão firmes (caixa 2 ou acima, ou seja, lembrados em
   pelo menos duas revisões espaçadas). */
var LEVELS = ['A1','A2','B1'];
var LEVEL_NAMES = {A1:'A1 · Básico', A2:'A2 · Básico avançado', B1:'B1 · Intermediário'};
function goalsCard(st, deck){
  var byLevel = {};
  deck.cats.forEach(function(cat){
    var items = deck.chunks.filter(function(c){ return c.cat === cat.key; });
    var firm = items.filter(function(c){ var k = st.cards[c.id]; return k && k.box >= 2; }).length;
    var pct = items.length ? firm/items.length : 0;
    (byLevel[cat.level||'A1'] = byLevel[cat.level||'A1'] || []).push({cat:cat, firm:firm, total:items.length, pct:pct, done:pct>=0.8});
  });
  var reached = null;
  for(var i=0;i<LEVELS.length;i++){
    var lv = byLevel[LEVELS[i]];
    if(!lv) continue;
    if(lv.every(function(x){ return x.done; })) reached = LEVELS[i]; else break;
  }
  var h = '<div class="card"><h2>O que você já consegue fazer</h2>';
  h += '<p class="muted">'+(reached ? 'Você completou as metas do nível <b>'+reached+'</b> neste baralho.' : 'Cada meta se cumpre quando 80% dos chunks da categoria estão firmes, lembrados em pelo menos duas revisões espaçadas.')+'</p>';
  LEVELS.forEach(function(L){
    var lv = byLevel[L]; if(!lv) return;
    var n = lv.filter(function(x){ return x.done; }).length;
    h += '<h3 style="font-size:.95rem; margin:16px 0 4px;">'+LEVEL_NAMES[L]+' <span class="muted mono" style="font-size:.78rem; font-weight:500;">'+n+'/'+lv.length+'</span></h3>';
    lv.forEach(function(x){
      h += '<div class="goal'+(x.done?' done':'')+'"><div class="goal-head"><b>'+(x.done?'✓ ':'')+esc(x.cat.cando)+'</b><span class="muted mono" style="font-size:.78rem; white-space:nowrap;">'+x.firm+'/'+x.total+'</span></div>'+
        '<div class="progress-bar-outer"><div class="progress-bar-inner" style="width:'+Math.round(x.pct*100)+'%;'+(x.done?' background:var(--good);':'')+'"></div></div></div>';
    });
  });
  return h + '</div>';
}
function viewProgress(){
  var st = activeState(), deck = activeDeck();
  var counts = [0,0,0,0,0,0];
  var ids = {}; deck.chunks.forEach(function(c){ ids[c.id] = true; });
  Object.keys(st.cards).forEach(function(id){ if(ids[id]) counts[st.cards[id].box]++; });
  var total = deck.chunks.length;
  var unseenCount = total - counts.reduce(function(a,b){ return a+b; }, 0);
  /* segmentos e legenda saem da MESMA lista; antes a legenda mostrava a
     contagem da caixa vizinha e os dominados sumiam da barra */
  var segs = [{label:'Não iniciado', color:'var(--surface-2)', n:unseenCount}].concat(counts.map(function(n,i){
    return {label:BOX_LABELS[i], color:BOX_COLORS[i], n:n};
  }));
  var barSegs = segs.map(function(sg){
    if(sg.n<=0) return '';
    return '<span title="'+sg.label+': '+sg.n+'" style="width:'+(sg.n/total*100).toFixed(2)+'%; background:'+sg.color+'"></span>';
  }).join('');
  var legend = segs.map(function(sg){ return '<span><span class="sw" style="background:'+sg.color+'"></span>'+sg.label+' ('+sg.n+')</span>'; });

  var today = todayStr();
  var cells = '';
  for(var i=27;i>=0;i--){
    var d = addDays(today,-i);
    var entry = st.log[d];
    var reviews = entry ? (entry.reviewCount+entry.newCount) : 0;
    var color = 'var(--surface-2)';
    if(reviews>0){
      if(reviews>=15) color='var(--ramp5)';
      else if(reviews>=10) color='var(--ramp4)';
      else if(reviews>=5) color='var(--ramp3)';
      else color='var(--ramp2)';
    }
    cells += '<div class="cell" title="'+d+': '+reviews+' chunk(s)" style="background:'+color+'"></div>';
  }

  var html = '<div class="stat-grid">';
  html += statTile(currentStreak(st),'Sequência atual');
  html += statTile(st.longestStreak||0,'Maior sequência');
  html += statTile(counts[5],'Dominados');
  html += statTile((total-unseenCount)+'/'+total,'No baralho');
  html += '</div>';
  html += '<div class="card"><h2>Distribuição por caixa (Leitner)</h2>';
  html += '<div class="box-bar" style="margin-top:10px;">'+barSegs+'</div>';
  html += '<div class="box-legend">'+legend.join('')+'</div></div>';
  html += goalsCard(st, deck);
  html += '<div class="card"><h2>Últimos 28 dias</h2><p class="muted" style="margin-bottom:10px;">Cor mais forte, mais chunks praticados naquele dia.</p><div class="heatmap">'+cells+'</div></div>';
  html += '<div class="card"><h2>Levar o progresso para outro aparelho</h2>'+
    '<p class="muted">O progresso fica salvo neste navegador. Para continuar no celular ou no computador, exporte aqui e importe lá. Vale também como cópia de segurança.</p>'+
    '<div class="cta-row" style="margin-top:12px;"><button class="btn btn-secondary" id="exportBtn">⬇️ Exportar progresso</button>'+
    '<label class="btn btn-secondary" style="cursor:pointer;">⬆️ Importar arquivo<input type="file" id="importInput" accept=".json,application/json" hidden></label></div></div>';
  document.getElementById('view').innerHTML = html;
  document.getElementById('exportBtn').onclick = exportProgress;
  document.getElementById('importInput').onchange = function(e){ var f = e.target.files[0]; if(f) importProgress(f); e.target.value = ''; };
}

function viewGuide(){
  var html = '<div class="card guide">';
  html += '<h2>O método Chunk Sprint</h2>';
  html += '<p>A ideia central: em vez de decorar palavras soltas, você aprende <b>chunks</b>, blocos de frase prontos que um falante nativo usa do jeito que estão. É assim que o cérebro guarda língua de verdade: você não monta “I / would / like / to / introduce / myself” peça por peça; você já solta “I’d like to introduce myself” inteiro.</p>';
  html += '<h3>Repetição espaçada (sistema Leitner)</h3>';
  html += '<p>Cada chunk vive numa “caixa” de 0 a 5. Quando você acerta, ele sobe de caixa e volta para a revisão mais tarde. Quando erra, ele <b>desce duas caixas</b> (não volta para o zero) e reaparece amanhã: um tropeço num chunk quase dominado não apaga o que você já construiu. <b>Difícil</b> mantém a caixa, mas traz o chunk de volta na metade do tempo.</p>';
  html += '<ul><li>Caixa 0–1: revisa em 1–2 dias</li><li>Caixa 2–3: revisa em 4–7 dias</li><li>Caixa 4–5: revisa em 14–30 dias, praticamente dominado</li></ul>';
  html += '<h3>A sessão do dia (30 a 60 min, em 5 blocos)</h3>';
  html += '<ul>';
  html += '<li><b>Aquecimento</b>: revisão dos chunks que venceram hoje. Fale a resposta em voz alta <i>antes</i> de virar a carta. Chunks mais avançados aparecem às vezes <b>só de ouvido</b>: você escuta o áudio sem ver o texto e precisa reconhecer.</li>';
  html += '<li><b>Chunks novos</b>: cada chunk novo é apresentado com áudio e frase de exemplo. Logo depois, você tem que <b>produzir</b> o chunk sozinho, falando ou digitando a partir do português (com dica de iniciais, se precisar). Reconhecer numa lista é fácil; é o esforço de lembrar que fixa.</li>';
  html += '<li><b>Prática ativa</b>: exercícios variados <b>com correção automática</b>: digitar de memória, montar a frase, completar a lacuna, múltipla escolha, ditado e <b>chunk na frase</b> (encaixar o chunk dentro de uma frase maior). O tipo muda conforme a caixa do chunk: quanto mais avançado, mais difícil o exercício. Quem erra volta no fim do bloco e cai na revisão de amanhã.</li>';
  html += '<li><b>Shadowing</b>: ouve e repete em voz alta, imitando ritmo e entonação. Depois grava com o <b>microfone</b> e o app mostra o que entendeu, marcando as palavras que não saíram claras. A porcentagem mede clareza, não sotaque.</li>';
  html += '<li><b>Conversa</b>: quando você aprende os chunks de uma categoria, libera um diálogo curto com eles. Primeiro você <b>ouve</b> a conversa inteira sem ler, tentando entender pelo contexto. Depois faz <b>o seu papel</b>: a outra pessoa fala, e você responde em voz alta. É onde o chunk decorado vira fala de verdade. As conversas liberadas também ficam na aba Baralho.</li>';
  html += '</ul>';
  html += '<h3>Metas por nível</h3>';
  html += '<p>Cada categoria tem um nível de referência (<b>A1</b> básico, <b>A2</b> básico avançado, <b>B1</b> intermediário, na escala europeia usada no mundo todo) e uma meta concreta, do tipo “pedir direção na rua” ou “negociar preço”. A meta se cumpre quando 80% dos chunks da categoria estão firmes. O painel fica na aba Progresso.</p>';
  html += '<h3>Áudio: como deixar a voz natural</h3>';
  html += '<p>O áudio usa as vozes instaladas no seu aparelho, e a diferença entre uma voz robótica e uma quase humana está em <b>qual</b> voz está selecionada. Toque na engrenagem ⚙️ no topo pra escolher a voz, ajustar a velocidade e testar. No iPhone e no Mac, as vozes <b>Siri</b> e as <b>Premium/Enhanced</b> (Ava, Zoe, Evan, Nathan) são as melhores; se não aparecerem, baixe em Ajustes → Acessibilidade → Conteúdo Falado. No Windows, o Edge traz vozes “Online (Natural)”. O botão 🐢 toca devagar pra você pegar cada som; o 💬 toca a frase de exemplo inteira.</p>';
  html += '<h3>Atalhos</h3>';
  html += '<p><span class="kbd">Enter</span> avança / confere · <span class="kbd">Espaço</span> toca o áudio · <span class="kbd">1</span> <span class="kbd">2</span> <span class="kbd">3</span> avaliam a revisão ou escolhem a alternativa.</p>';
  html += '<h3>Ritmo da semana</h3>';
  html += '<div class="rhythm">';
  html += '<div class="rhythm-day"><b>Seg–Sex</b>Sessão completa: novos + revisão</div>';
  html += '<div class="rhythm-day"><b>Sábado</b>Só revisão, para zerar o que ficou pendente</div>';
  html += '<div class="rhythm-day"><b>Domingo</b>Dia livre: um filme, um jogo ou uma conversa em inglês, sem cobrança. Não quebra a sequência</div>';
  html += '</div>';
  html += '<h3>Pra ir mais rápido</h3>';
  html += '<ul><li>Consistência bate intensidade: 30 min todo dia rende mais que 3h uma vez por semana.</li><li>Fale em voz alta sempre que puder: a boca aprende junto com a cabeça.</li><li>Use os chunks de verdade: solte um chunk de negócio numa resposta pro Steven, ou um chunk de game numa call com os amigos.</li><li>Ensinar fixa o conteúdo: de vez em quando, explique um chunk que você aprendeu pro outro perfil (Felipe explica pro Arthur, e vice-versa).</li></ul>';
  html += '<h3>Imersão fora do app</h3>';
  html += '<p>Os chunks constroem a base, mas dá pra acelerar bastante com imersão passiva no dia a dia. Só vale ir por etapas pra não virar fricção logo no começo.</p>';
  html += '<ul>';
  html += '<li><b>Celular primeiro</b>: troque o idioma do sistema do celular pra inglês. A maioria das telas é reconhecível por ícone e posição, então o risco de se perder é baixo. Deixe softwares de trabalho mais críticos (Workspace, painéis administrativos) pra depois, quando o vocabulário já estiver mais solto. Ali, um erro de configuração no meio de uma tarefa importante custa mais tempo do que vale a pena nessa fase.</li>';
  html += '<li><b>Filmes e séries com legenda em progressão</b>: áudio em inglês com legenda em português primeiro; depois de um tempo, legenda em inglês; só bem mais pra frente, sem legenda nenhuma. Pular etapa costuma frustrar mais do que ensinar.</li>';
  html += '<li><b>Jogos e Discord do Arthur em inglês</b>: trocar a interface dos jogos (e do Discord) pra inglês é quase sem atrito, porque a maior parte dos termos já é reconhecida pelo contexto. É um ótimo primeiro passo de imersão real.</li>';
  html += '<li><b>Narrar o dia</b>: descrever em voz alta (ou mentalmente) tarefas simples usando os chunks já aprendidos, tipo enquanto dirige ou prepara um café. Transforma vocabulário passivo em ativo, que é o gargalo de quem está começando.</li>';
  html += '</ul>';
  html += '<h3>Três baralhos, um método</h3>';
  html += '<p>Você, o Arthur e a Dayane usam exatamente a mesma mecânica, só trocando de perfil no topo da tela. O baralho do Felipe foca em vendas, cotações e logística internacional; o do Arthur combina games e montagem de PC com temas mais amplos, como história mundial; o da Dayane segue do módulo de viagem para filmes, séries e cultura. Cada um aprendendo o inglês que vai realmente usar.</p>';
  html += '<h3>Módulo de viagem, nos três baralhos</h3>';
  html += '<p>Como vocês pretendem fazer viagens internacionais, toda pessoa do Chunk Sprint começa pelo mesmo módulo comum de inglês de viagem e do dia a dia: conversas simples, compras e serviços, pedir informação na rua e passar pela imigração no aeroporto. É a base que qualquer um precisa antes de entrar em temas mais específicos. Só depois de firmar esse básico é que o baralho passa pro tema principal de cada um (vendas pro Felipe, games e história pro Arthur, filmes e séries pra Dayane).</p>';
  html += '<h3>Feito pra durar</h3>';
  html += '<p>A ideia é o Chunk Sprint virar hábito de longo prazo, não um curso com data para acabar. Quando um baralho estiver quase todo dominado, o painel do dia avisa, e um pacote novo de chunks entra numa atualização do app. Seu histórico e sua sequência continuam exatamente de onde pararam, porque o progresso fica separado do conteúdo. Enquanto isso, os chunks já dominados voltam a cada 30 dias só para não enferrujar.</p>';
  html += '</div>';
  document.getElementById('view').innerHTML = html;
}

/* ---------- ROUTER ---------- */
function render(){
  try{
    renderProfileSwitch();
    renderTabs();
    if(route === 'hoje'){ session ? viewSession() : viewDashboard(); }
    else if(route === 'baralho'){ viewDeck(); }
    else if(route === 'progresso'){ viewProgress(); }
    else if(route === 'metodo'){ viewGuide(); }
  }catch(err){
    try{ console.error('Chunk Sprint: erro ao renderizar', err); }catch(e){}
    var v = document.getElementById('view');
    if(v){
      v.innerHTML = '<div class="card"><p class="muted">Ops, essa tela travou num probleminha técnico.</p>'+
        '<button class="btn btn-primary" id="csRetryBtn">Tentar de novo</button></div>';
      var rb = document.getElementById('csRetryBtn');
      if(rb) rb.onclick = function(){ session = null; render(); };
    }
  }
}

/* ---------- SAFETY NET: clique nos botões de avaliação (Errei/Difícil/Fácil) ----------
   Em vez de religar onclick em cada botão a cada render — o que os deixaria
   mortos se qualquer coisa entre o innerHTML e essa ligação lançasse um erro —
   ouvimos o clique uma única vez, aqui, no contêiner que nunca é substituído,
   e despachamos pro chunk certo com base no estado atual da sessão. */
document.getElementById('view').addEventListener('click', function(e){
  var r = e.target.closest('[data-r]');
  if(!r || !session || session.step !== 'review' || !session.revealed) return;
  var chunk = session.reviewQueue[session.reviewIndex];
  if(chunk) rateCard(chunk, r.dataset.r);
});

loadAudioPrefs();
initPersistence();
})();
