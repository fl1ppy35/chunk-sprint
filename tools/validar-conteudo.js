/* Confere o conteúdo dos baralhos e das conversas antes de publicar.
   Uso: node tools/validar-conteudo.js            (tudo)
        node tools/validar-conteudo.js negocios2  (só um baralho)
   Sai com código 1 se houver erro. */
const fs = require('fs'), path = require('path');
global.window = global;
const raiz = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(raiz, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="([^"]+)"/g)].map(m => m[1]).filter(s => !s.endsWith('app.js'));
// também carrega arquivos de baralho ainda não ligados no index.html
for (const f of fs.readdirSync(path.join(raiz, 'js/decks'))) { const p = 'js/decks/' + f; if (!scripts.includes(p)) scripts.push(p); }
const so = process.argv[2];
const erros = [], avisos = [];
for (const s of scripts) {
  const p = path.join(raiz, s);
  if (!fs.existsSync(p)) { (so ? avisos : erros).push(`arquivo ${s} ligado no index.html não existe`); continue; }
  try { require(p); } catch (e) { erros.push(`${s} não carrega: ${e.message.split('\n')[0]}`); }
}
const norm = s => s.replace(/[’‘]/g, "'").toLowerCase();
const alvo = en => norm(en).replace(/\.\.\.$/, '').replace(/[.?!…]+$/, '').trim();
const ids = {}, catDe = {}, catKeys = {};
for (const [dk, deck] of Object.entries(CS_DECKS)) {
  for (const c of deck.cats) {
    if (catKeys[c.key]) erros.push(`categoria repetida: ${c.key} (${dk} e ${catKeys[c.key]})`);
    catKeys[c.key] = dk;
    if (!/^(A1|A2|B1|B2)$/.test(c.level || '')) erros.push(`${dk}/${c.key}: nível ausente ou inválido`);
    if (!c.cando) erros.push(`${dk}/${c.key}: meta (cando) ausente`);
  }
  for (const ch of deck.chunks) {
    const [id, cat, pt, en, ex, vars] = ch;
    if (ids[id]) erros.push(`id repetido: ${id} (${dk} e ${ids[id]})`);
    ids[id] = dk; catDe[id] = cat;
    if (so && so !== dk) continue;
    if (!deck.cats.find(c => c.key === cat)) erros.push(`${id}: categoria ${cat} não existe em ${dk}`);
    if (![pt, en, ex].every(x => typeof x === 'string' && x.trim())) erros.push(`${id}: pt/en/ex vazio`);
    for (const [campo, t] of [['pt', pt], ['en', en], ['ex', ex]]) if (/—/.test(t)) erros.push(`${id}: travessão em ${campo}`);
    if (!norm(ex).includes(alvo(en))) avisos.push(`${id}: o chunk não aparece dentro do exemplo ("${en}" / "${ex}")`);
    if (vars !== undefined) {
      if (!Array.isArray(vars) || vars.length < 2) erros.push(`${id}: variações devem ser uma lista com 2 ou mais [en, pt]`);
      else vars.forEach((v, i) => {
        if (!Array.isArray(v) || v.length !== 2 || !v[0] || !v[1]) erros.push(`${id}: variação ${i + 1} mal formada`);
        else if (/—/.test(v[0] + v[1])) erros.push(`${id}: travessão na variação ${i + 1}`);
      });
    }
  }
  if (!so || so === dk) {
    const porCat = {}; deck.chunks.forEach(c => porCat[c[1]] = (porCat[c[1]] || 0) + 1);
    for (const c of deck.cats) if (!porCat[c.key]) erros.push(`${dk}/${c.key}: categoria sem chunks`);
  }
}
for (const [k, d] of Object.entries(window.CS_DIALOGS || {})) {
  if (so && catKeys[k] !== so) continue;
  if (!catKeys[k]) erros.push(`conversa ${k}: não existe categoria com essa chave`);
  if (!d.titulo || !Array.isArray(d.usa) || !d.usa.length || !Array.isArray(d.falas) || d.falas.length < 4) { erros.push(`conversa ${k}: faltam titulo/usa/falas (mínimo 4 falas)`); continue; }
  for (const u of d.usa) if (catDe[u] !== k) erros.push(`conversa ${k}: ${u} não é da categoria ${k}`);
  d.falas.forEach((f, i) => {
    if (!Array.isArray(f) || f.length !== 3 || !['outro', 'voce'].includes(f[0])) erros.push(`conversa ${k}: fala ${i + 1} mal formada`);
    else if (/—/.test(f[1] + f[2])) erros.push(`conversa ${k}: travessão na fala ${i + 1}`);
  });
  if (!d.falas.some(f => f[0] === 'voce')) erros.push(`conversa ${k}: nenhuma fala de "voce"`);
  const falasTxt = norm(d.falas.map(f => f[1]).join(' '));
  for (const u of d.usa) { const ch = Object.values(CS_DECKS).flatMap(x => x.chunks).find(c => c[0] === u); if (ch && !falasTxt.includes(alvo(ch[3]))) avisos.push(`conversa ${k}: o chunk ${u} ("${ch[3]}") não aparece literalmente nas falas`); }
}
for (const k of Object.keys(catKeys)) if (!(window.CS_DIALOGS || {})[k] && (!so || catKeys[k] === so)) avisos.push(`categoria ${k} sem conversa`);
for (const p of window.CS_PROFILES || []) for (const d of p.decks) if (!CS_DECKS[d]) erros.push(`perfil ${p.key}: baralho ${d} não carregado`);
const total = Object.values(CS_DECKS).reduce((n, d) => n + d.chunks.length, 0);
avisos.forEach(a => console.log('AVISO ' + a));
erros.forEach(e => console.log('ERRO  ' + e));
console.log(`${erros.length ? 'FALHOU' : 'OK'}: ${Object.keys(CS_DECKS).length} baralhos, ${total} chunks, ${Object.keys(window.CS_DIALOGS || {}).length} conversas, ${erros.length} erro(s), ${avisos.length} aviso(s)`);
process.exit(erros.length ? 1 : 0);
