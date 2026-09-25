/* Baralho "Games e tecnologia, pacote 2". Estratégia, loja do jogo, criação de conteúdo, programação,
   escola, redes sociais, ciência, filmes e animes, combinar com os amigos e grandes impérios.
   Cada chunk: [id, categoria, português, inglês, frase de exemplo, variações].
   O id NUNCA deve mudar nem ser reaproveitado: é nele que o progresso de cada pessoa fica gravado.
   Pode acrescentar, reordenar ou corrigir texto à vontade sem perder histórico. */
window.CS_DECKS = window.CS_DECKS || {};
CS_DECKS.games2 = {
  name: 'Games e tecnologia, pacote 2',
  cats: [
  {key:'g2_combinar', label:'Combinando com os Amigos', level:'A1', cando:'Marcar um horário para jogar ou sair com os amigos'},
  {key:'g2_estrategia', label:'Estratégia e Call-outs', level:'A2', cando:'Passar informação rápida e combinar a estratégia com o time'},
  {key:'g2_loja', label:'Loja do Jogo e Skins', level:'A2', cando:'Comentar skins, promoções e compras dentro do jogo'},
  {key:'g2_criador', label:'Criando Conteúdo e Streamando', level:'A2', cando:'Fazer uma live, falar com o chat e contar dos seus vídeos'},
  {key:'g2_escola', label:'Escola e Estudos', level:'A2', cando:'Falar de provas, trabalhos e pedir ajuda com a matéria'},
  {key:'g2_redes', label:'Redes Sociais e Internet', level:'A2', cando:'Comentar posts, vídeos e memes com os amigos'},
  {key:'g2_filmes', label:'Filmes, Animes e Séries', level:'A2', cando:'Recomendar e comentar filmes, animes e séries sem dar spoiler'},
  {key:'g2_programacao', label:'Programação e Apps', level:'B1', cando:'Explicar um projeto de código e pedir ajuda com um bug'},
  {key:'g2_ciencia', label:'Ciência e Espaço', level:'B1', cando:'Conversar sobre planetas, foguetes e descobertas científicas'},
  {key:'g2_imperios', label:'Grandes Impérios e Descobertas', level:'B1', cando:'Contar e comentar fatos sobre impérios, navegações e invenções'}
  ],
  chunks: [
  ['s109','g2_combinar','Tá livre hoje à noite?','Are you free tonight?','Are you free tonight? Let’s play.', [
    ['Are you free on Saturday?','Tá livre no sábado?'],
    ['Are you free after school?','Tá livre depois da aula?']
  ]],
  ['s110','g2_combinar','Que horas fica bom pra você?','What time works for you?','What time works for you, seven or eight?', [
    ['What day works for you?','Que dia fica bom pra você?'],
    ['What time works for everyone?','Que horas fica bom pra todo mundo?']
  ]],
  ['s111','g2_combinar','Tenho que perguntar pra minha mãe','I have to ask my mom','Maybe, I have to ask my mom first.', [
    ['I have to ask my dad first.','Tenho que perguntar pro meu pai antes.'],
    ['I have to ask my parents about Saturday.','Tenho que perguntar pros meus pais sobre sábado.']
  ]],
  ['s112','g2_combinar','Entro em dez minutos','I’ll be on in ten minutes','Almost done eating, I’ll be on in ten minutes.', [
    ['I’ll be on in five minutes.','Entro em cinco minutos.'],
    ['I’ll be on after dinner.','Entro depois do jantar.']
  ]],
  ['s113','g2_combinar','Hoje não vou conseguir','I can’t make it today','Sorry, I can’t make it today, family stuff.', [
    ['I can’t make it tonight.','Hoje à noite não vou conseguir.'],
    ['I can’t make it to the tournament.','Não vou conseguir ir no campeonato.']
  ]],
  ['s114','g2_combinar','Fechado, combinado','Sounds like a plan','Eight o’clock on Discord? Sounds like a plan.', [
    ['Pizza and games on Friday? Sounds like a plan.','Pizza e games na sexta? Fechado.'],
    ['Movies on Sunday? Sounds like a plan.','Cinema no domingo? Combinado.']
  ]],

  ['s61','g2_estrategia','Ele tá a um tiro','He’s one shot','He’s one shot, just push him!', [
    ['She’s one shot, don’t let her heal.','Ela tá a um tiro, não deixa ela curar.'],
    ['The last guy’s one shot, go!','O último tá a um tiro, vai!']
  ]],
  ['s62','g2_estrategia','Vamos esperar eles virem','Let’s wait for them to push','Let’s wait for them to push, then we trade.', [
    ['Let’s wait for them to push B.','Vamos esperar eles virem no B.'],
    ['Let’s wait for them to push first this round.','Vamos esperar eles virem primeiro nessa rodada.']
  ]],
  ['s63','g2_estrategia','Eu seguro esse ângulo','I’ll hold this angle','I’ll hold this angle, you watch mid.', [
    ['I’ll hold this angle until you get here.','Eu seguro esse ângulo até você chegar.'],
    ['You go flank, I’ll hold this angle.','Vai pelo flanco, eu seguro esse ângulo.']
  ]],
  ['s64','g2_estrategia','Eles tão vindo pelo meio','They’re coming through mid','Heads up, they’re coming through mid!', [
    ['They’re coming through the back door!','Eles tão vindo pela porta dos fundos!'],
    ['I think they’re coming through B this time.','Acho que eles tão vindo pelo B dessa vez.']
  ]],
  ['s65','g2_estrategia','Vamos nos juntar','Let’s group up','Let’s group up and push together.', [
    ['Let’s group up before the next fight.','Vamos nos juntar antes da próxima luta.'],
    ['Let’s group up at the tower.','Vamos nos juntar na torre.']
  ]],
  ['s66','g2_estrategia','Não entra sozinho','Don’t go in alone','Wait for us, don’t go in alone!', [
    ['Don’t go in alone, there are five of them.','Não entra sozinho, eles tão em cinco.'],
    ['Don’t go in alone next round.','Não entra sozinho na próxima rodada.']
  ]],

  ['s67','g2_loja','Essa skin tá muito bonita','This skin is so clean','Dude, this skin is so clean!', [
    ['This emote is so clean.','Esse emote tá muito bonito.'],
    ['Your new skin is so clean.','Sua skin nova tá muito bonita.']
  ]],
  ['s68','g2_loja','Tá em promoção','It’s on sale','Grab it now, it’s on sale this weekend.', [
    ['The battle pass is on sale.','O passe de batalha tá em promoção.'],
    ['That game is on sale until Friday.','Esse jogo tá em promoção até sexta.']
  ]],
  ['s69','g2_loja','Vale o que custa?','Is it worth the money?','I like the bundle, but is it worth the money?', [
    ['Is the battle pass worth the money?','O passe de batalha vale o que custa?'],
    ['Is that headset worth the money?','Esse headset vale o que custa?']
  ]],
  ['s70','g2_loja','To juntando para comprar','I’m saving up for','I’m saving up for the new bundle.', [
    ['I’m saving up for a new headset.','To juntando pra comprar um headset novo.'],
    ['I’m saving up for the next battle pass.','To juntando pro próximo passe de batalha.']
  ]],
  ['s71','g2_loja','Acabou de sair na loja','It just dropped in the shop','The new skin? It just dropped in the shop today.', [
    ['The anime collab just dropped in the shop.','A collab de anime acabou de sair na loja.'],
    ['The new emote just dropped in the shop.','O emote novo acabou de sair na loja.']
  ]],
  ['s72','g2_loja','É só cosmético','It’s just cosmetic','Don’t worry, it’s just cosmetic, it doesn’t change your stats.', [
    ['That skin is just cosmetic.','Essa skin é só cosmética.'],
    ['The wings are just cosmetic, they don’t give you a buff.','As asas são só cosméticas, não dão buff.']
  ]],

  ['s73','g2_criador','Vou entrar ao vivo','I’m going live','I’m going live in ten minutes, come hang out.', [
    ['I’m going live tonight at eight.','Vou entrar ao vivo hoje às oito.'],
    ['I’m going live with Minecraft tomorrow.','Amanhã vou entrar ao vivo com Minecraft.']
  ]],
  ['s74','g2_criador','Valeu pelo follow!','Thanks for the follow!','Hey, thanks for the follow! Welcome to the stream.', [
    ['Thanks for the sub, Leo!','Valeu pelo sub, Leo!'],
    ['Thanks for the raid, guys!','Valeu pela raid, galera!']
  ]],
  ['s75','g2_criador','Vou editar o vídeo','I’ll edit the video','I already recorded it, I’ll edit the video tonight.', [
    ['I’ll edit the clip tomorrow.','Amanhã eu edito o clipe.'],
    ['I’ll edit the video after school.','Vou editar o vídeo depois da aula.']
  ]],
  ['s76','g2_criador','O chat tá pirando','Chat is going crazy','Look at this, chat is going crazy right now!', [
    ['Chat went crazy after that play.','O chat pirou depois daquela jogada.'],
    ['Chat is going crazy over the new map.','O chat tá pirando com o mapa novo.']
  ]],
  ['s77','g2_criador','Alguém clipa isso!','Somebody clip that!','No way, somebody clip that!', [
    ['Somebody clip that goal!','Alguém clipa esse gol!'],
    ['Somebody clip that before I forget!','Alguém clipa isso antes que eu esqueça!']
  ]],
  ['s78','g2_criador','Vocês tão me ouvindo?','Can you guys hear me?','Can you guys hear me, or is my mic muted?', [
    ['Can you guys see my screen?','Vocês tão vendo minha tela?'],
    ['Can you guys hear the game audio?','Vocês tão ouvindo o som do jogo?']
  ]],

  ['s85','g2_escola','Tenho prova amanhã','I have a test tomorrow','I can’t play tonight, I have a test tomorrow.', [
    ['I have a math test on Friday.','Tenho prova de matemática na sexta.'],
    ['I have a history test next week.','Tenho prova de história semana que vem.']
  ]],
  ['s86','g2_escola','Você fez a lição de casa?','Did you do the homework?','Did you do the homework for English class?', [
    ['Did you do the science project yet?','Você já fez o trabalho de ciências?'],
    ['Did you do the reading for today?','Você fez a leitura pra hoje?']
  ]],
  ['s87','g2_escola','Pode me explicar passo a passo?','Can you walk me through this?','I’m lost. Can you walk me through this?', [
    ['Can you walk me through this equation?','Pode me explicar essa equação passo a passo?'],
    ['Can you walk me through the first part?','Pode me explicar a primeira parte?']
  ]],
  ['s88','g2_escola','Gabaritei a prova','I aced the test','Guess what, I aced the test!', [
    ['I aced the history quiz.','Gabaritei a prova de história.'],
    ['She aced the final exam.','Ela gabaritou a prova final.']
  ]],
  ['s89','g2_escola','Bora fazer o trabalho juntos?','Wanna work on the project together?','Wanna work on the project together after school?', [
    ['Wanna work on the slides together?','Bora fazer os slides juntos?'],
    ['Wanna work on the essay together tonight?','Bora fazer a redação juntos hoje à noite?']
  ]],
  ['s90','g2_escola','É pra sexta','It’s due on Friday','The science project? It’s due on Friday.', [
    ['The essay is due tomorrow.','A redação é pra amanhã.'],
    ['The homework is due on Monday.','A lição é pra segunda.']
  ]],

  ['s91','g2_redes','Isso viralizou','It went viral','Did you see that video? It went viral overnight.', [
    ['His clip went viral on TikTok.','O clipe dele viralizou no TikTok.'],
    ['That meme went viral last week.','Esse meme viralizou semana passada.']
  ]],
  ['s92','g2_redes','Me manda o link','Send me the link','That sounds funny, send me the link.', [
    ['Send me the link to the server.','Me manda o link do servidor.'],
    ['Send me the link on Discord.','Me manda o link no Discord.']
  ]],
  ['s93','g2_redes','To morrendo de rir','I’m dying','Stop, I’m dying, that’s so funny!', [
    ['I’m dying, look at his face!','To morrendo de rir, olha a cara dele!'],
    ['I was dying the whole video.','Eu morri de rir o vídeo inteiro.']
  ]],
  ['s94','g2_redes','Não acredita em tudo que vê na internet','Don’t believe everything you see online','That’s fake. Don’t believe everything you see online.', [
    ['Don’t believe everything you read online.','Não acredita em tudo que você lê na internet.'],
    ['Don’t believe everything you see on TikTok.','Não acredita em tudo que você vê no TikTok.']
  ]],
  ['s95','g2_redes','Você viu o que ele postou?','Did you see what he posted?','Did you see what he posted this morning?', [
    ['Did you see what she posted on Insta?','Você viu o que ela postou no Insta?'],
    ['Did you see what the devs posted?','Você viu o que os devs postaram?']
  ]],
  ['s96','g2_redes','Me marca no post','Tag me in the post','Tag me in the post so I can share it.', [
    ['Tag me in the photo.','Me marca na foto.'],
    ['Tag me in the video when you upload it.','Me marca no vídeo quando você postar.']
  ]],

  ['s103','g2_filmes','Sem spoiler!','No spoilers!','I’m only on episode five, no spoilers!', [
    ['No spoilers, I haven’t seen the ending.','Sem spoiler, eu não vi o final.'],
    ['No spoilers for the new season, please.','Sem spoiler da temporada nova, por favor.']
  ]],
  ['s104','g2_filmes','Em que episódio você tá?','What episode are you on?','What episode are you on right now?', [
    ['What season are you on?','Em que temporada você tá?'],
    ['What chapter are you on in the manga?','Em que capítulo do mangá você tá?']
  ]],
  ['s105','g2_filmes','Vale a pena assistir','It’s worth watching','The first season is slow, but it’s worth watching.', [
    ['The movie is worth watching in theaters.','O filme vale a pena ver no cinema.'],
    ['That anime is worth watching with subtitles.','Esse anime vale a pena ver legendado.']
  ]],
  ['s106','g2_filmes','Maratonei a série inteira','I binged the whole series','I binged the whole series this weekend.', [
    ['I binged the whole season in two days.','Maratonei a temporada inteira em dois dias.'],
    ['She binged the whole anime last week.','Ela maratonou o anime inteiro semana passada.']
  ]],
  ['s107','g2_filmes','O final me pegou','The ending got me','I didn’t see that coming, the ending got me.', [
    ['That episode really got me.','Esse episódio me pegou de jeito.'],
    ['The last scene got me.','A última cena me pegou.']
  ]],
  ['s108','g2_filmes','Quando sai a próxima temporada?','When does the next season come out?','When does the next season come out on Netflix?', [
    ['When does the movie come out?','Quando sai o filme?'],
    ['When does the next episode come out?','Quando sai o próximo episódio?']
  ]],

  ['s79','g2_programacao','Tem um bug no meu código','There’s a bug in my code','There’s a bug in my code and I can’t find it.', [
    ['There’s a bug in the login screen.','Tem um bug na tela de login.'],
    ['There’s a bug in my game, the player falls through the floor.','Tem um bug no meu jogo, o personagem atravessa o chão.']
  ]],
  ['s80','g2_programacao','Na minha máquina funciona','It works on my machine','I don’t get it, it works on my machine.', [
    ['It works on my phone, but not on yours.','No meu celular funciona, mas no seu não.'],
    ['It worked on my laptop yesterday.','Ontem funcionou no meu notebook.']
  ]],
  ['s81','g2_programacao','To aprendendo a programar','I’m learning to code','I’m learning to code in Python this year.', [
    ['I’m learning to code in JavaScript.','To aprendendo a programar em JavaScript.'],
    ['My sister is learning to code too.','Minha irmã também tá aprendendo a programar.']
  ]],
  ['s82','g2_programacao','Subi pro GitHub','I pushed it to GitHub','Done, I pushed it to GitHub last night.', [
    ['I pushed the fix to GitHub.','Subi a correção pro GitHub.'],
    ['Did you push it to GitHub yet?','Você já subiu pro GitHub?']
  ]],
  ['s83','g2_programacao','Fica dando erro','It keeps throwing an error','When I click run, it keeps throwing an error.', [
    ['The app keeps throwing an error when it starts.','O app fica dando erro quando abre.'],
    ['This line keeps throwing an error.','Essa linha fica dando erro.']
  ]],
  ['s84','g2_programacao','To fazendo um app','I’m working on an app','I’m working on an app for my school.', [
    ['I’m working on a mod for Minecraft.','To fazendo um mod pro Minecraft.'],
    ['I’m working on a website for my dad’s company.','To fazendo um site pra empresa do meu pai.']
  ]],

  ['s97','g2_ciencia','Qual a distância até Marte?','How far away is Mars?','How far away is Mars from Earth?', [
    ['How far away is the Moon?','Qual a distância até a Lua?'],
    ['How far away is the nearest star?','Qual a distância até a estrela mais próxima?']
  ]],
  ['s98','g2_ciencia','Lançaram um foguete','They launched a rocket','Did you see? They launched a rocket this morning.', [
    ['They launched a new space telescope.','Lançaram um telescópio espacial novo.'],
    ['They launched a probe to Jupiter.','Lançaram uma sonda pra Júpiter.']
  ]],
  ['s99','g2_ciencia','Isso é teoria ou fato?','Is that a theory or a fact?','Wait, is that a theory or a fact?', [
    ['Is life on Mars a theory or a fact?','Vida em Marte é teoria ou fato?'],
    ['Is the multiverse a theory or a fact?','O multiverso é teoria ou fato?']
  ]],
  ['s100','g2_ciencia','É mais ou menos do tamanho de','It’s about the size of','That asteroid? It’s about the size of a stadium.', [
    ['It’s about the size of Texas.','É mais ou menos do tamanho do Texas.'],
    ['The crater is about the size of a city.','A cratera é mais ou menos do tamanho de uma cidade.']
  ]],
  ['s101','g2_ciencia','Como isso funciona, afinal?','How does that even work?','A black hole bends light? How does that even work?', [
    ['How does gravity even work in space?','Como a gravidade funciona no espaço, afinal?'],
    ['How does a rocket even land by itself?','Como um foguete consegue pousar sozinho?']
  ]],
  ['s102','g2_ciencia','Os cientistas acabaram de descobrir','Scientists just discovered','Look, scientists just discovered a new planet!', [
    ['Scientists just discovered water on a moon.','Os cientistas acabaram de descobrir água numa lua.'],
    ['Scientists just discovered a new dinosaur.','Os cientistas acabaram de descobrir um dinossauro novo.']
  ]],

  ['s115','g2_imperios','No auge','At its peak','At its peak, the Mongol Empire was the biggest land empire ever.', [
    ['At its peak, Rome ruled most of Europe.','No auge, Roma dominava quase toda a Europa.'],
    ['At its peak, the Inca Empire had roads everywhere.','No auge, o Império Inca tinha estrada pra todo lado.']
  ]],
  ['s116','g2_imperios','Eles partiram rumo a','They set sail for','In 1492, they set sail for Asia and ended up in America.', [
    ['Cabral set sail for India in 1500.','Cabral partiu rumo à Índia em 1500.'],
    ['The Vikings set sail for Greenland.','Os vikings partiram rumo à Groenlândia.']
  ]],
  ['s117','g2_imperios','Foi conquistado por','It was conquered by','Constantinople? It was conquered by the Ottomans in 1453.', [
    ['Tenochtitlan was conquered by the Spanish.','Tenochtitlán foi conquistada pelos espanhóis.'],
    ['Gaul was conquered by Julius Caesar.','A Gália foi conquistada por Júlio César.']
  ]],
  ['s118','g2_imperios','Por que o império caiu?','Why did the empire fall?','Why did the empire fall if it was so strong?', [
    ['Why did the Roman Empire fall?','Por que o Império Romano caiu?'],
    ['Why did the Aztec Empire fall so fast?','Por que o Império Asteca caiu tão rápido?']
  ]],
  ['s119','g2_imperios','Foi inventado por','It was invented by','The World Wide Web? It was invented by Tim Berners-Lee.', [
    ['The printing press was invented by Gutenberg.','A prensa foi inventada por Gutenberg.'],
    ['In Brazil, we say the airplane was invented by Santos Dumont.','No Brasil, a gente diz que o avião foi inventado pelo Santos Dumont.']
  ]],
  ['s120','g2_imperios','Na época, isso era normal','Back then, that was normal','Sailors spent months at sea. Back then, that was normal.', [
    ['Back then, that was a lot of money.','Na época, isso era muito dinheiro.'],
    ['Back then, that was the fastest ship in the world.','Na época, esse era o navio mais rápido do mundo.']
  ]]
  ]
};

window.CS_DIALOGS = Object.assign(window.CS_DIALOGS || {}, {
  g2_estrategia: { titulo:'Segurando o bomb', usa:['s61','s62','s63','s64','s65','s66'], falas:[
    ['outro','Heads up, they’re coming through mid!','Atenção, eles tão vindo pelo meio!'],
    ['voce','Let’s group up on B.','Vamos nos juntar no B.'],
    ['outro','Should we push them now?','A gente vai pra cima agora?'],
    ['voce','No, let’s wait for them to push. I’ll hold this angle.','Não, vamos esperar eles virem. Eu seguro esse ângulo.'],
    ['outro','I’m going to peek the window.','Vou dar uma olhada pela janela.'],
    ['voce','Don’t go in alone!','Não entra sozinho!'],
    ['outro','Too late. I hit one, he’s one shot!','Tarde demais. Acertei um, ele tá a um tiro!'],
    ['voce','Got him! Nice.','Peguei ele! Boa.']
  ]},
  g2_loja: { titulo:'Olhando a loja do jogo', usa:['s67','s68','s69','s70','s71','s72'], falas:[
    ['outro','Have you seen the new skin? It just dropped in the shop today.','Você viu a skin nova? Acabou de sair na loja hoje.'],
    ['voce','Yeah, this skin is so clean! Is it worth the money, though?','Vi, essa skin tá muito bonita! Mas será que vale o que custa?'],
    ['outro','It’s on sale this weekend. And it makes you faster, right?','Tá em promoção esse fim de semana. E ela te deixa mais rápido, né?'],
    ['voce','No, it’s just cosmetic. And I’m saving up for the battle pass.','Não, é só cosmética. E eu to juntando pro passe de batalha.'],
    ['outro','Fair enough. Get the pass, then.','Justo. Então compra o passe.']
  ]},
  g2_criador: { titulo:'Começando a live', usa:['s73','s74','s76','s77','s78'], falas:[
    ['voce','Hey everyone, I’m going live! Can you guys hear me?','Oi, galera, to entrando ao vivo! Vocês tão me ouvindo?'],
    ['outro','Yes, loud and clear! First time here.','Sim, bem alto e claro! Primeira vez aqui.'],
    ['voce','Welcome! Thanks for the follow!','Bem-vindo! Valeu pelo follow!'],
    ['outro','Whoa, that was a crazy play!','Nossa, que jogada absurda!'],
    ['voce','No way, somebody clip that! Chat is going crazy right now.','Não acredito, alguém clipa isso! O chat tá pirando agora.'],
    ['outro','Clipped it! Post it on your channel.','Clipei! Posta no seu canal.']
  ]},
  g2_programacao: { titulo:'Pedindo ajuda com o código', usa:['s79','s80','s81','s83','s84'], falas:[
    ['outro','Hey, what are you up to?','E aí, o que você tá fazendo?'],
    ['voce','I’m working on an app for my school. I’m learning to code in Python.','To fazendo um app pra minha escola. To aprendendo a programar em Python.'],
    ['outro','Cool! I tried it on the school computer, but it crashed.','Legal! Eu testei no computador da escola, mas ele travou.'],
    ['voce','Really? It works on my machine.','Sério? Na minha máquina funciona.'],
    ['outro','It shows a red message when I click start.','Aparece uma mensagem vermelha quando eu clico em começar.'],
    ['voce','So it keeps throwing an error. There’s a bug in my code somewhere.','Então fica dando erro. Tem um bug no meu código em algum lugar.'],
    ['outro','Check the Python version first. That’s usually it.','Confere a versão do Python primeiro. Geralmente é isso.']
  ]},
  g2_escola: { titulo:'Semana de provas', usa:['s85','s86','s87','s89','s90'], falas:[
    ['outro','Wanna play tonight?','Bora jogar hoje à noite?'],
    ['voce','Can’t, I have a test tomorrow. Did you do the homework?','Não dá, tenho prova amanhã. Você fez a lição de casa?'],
    ['outro','Yeah, but I still don’t get question three.','Fiz, mas ainda não entendi a questão três.'],
    ['voce','Me neither. Can you walk me through this one?','Nem eu. Pode me explicar essa passo a passo?'],
    ['outro','Sure. And what about the science project?','Claro. E o trabalho de ciências?'],
    ['voce','It’s due on Friday. Wanna work on the project together after school?','É pra sexta. Bora fazer o trabalho juntos depois da aula?'],
    ['outro','Deal. My place?','Fechado. Lá em casa?']
  ]},
  g2_redes: { titulo:'O vídeo que viralizou', usa:['s91','s92','s93','s95','s96'], falas:[
    ['outro','Did you see what he posted? It went viral overnight.','Você viu o que ele postou? Viralizou do dia pra noite.'],
    ['voce','No, send me the link!','Não, me manda o link!'],
    ['outro','Sent. Watch the end.','Mandei. Vê o final.'],
    ['voce','Stop, I’m dying! His face!','Para, to morrendo de rir! A cara dele!'],
    ['outro','Right? I’m going to post it too.','Né? Vou postar também.'],
    ['voce','Tag me in the post!','Me marca no post!']
  ]},
  g2_ciencia: { titulo:'Notícia do espaço', usa:['s97','s98','s100','s101','s102'], falas:[
    ['outro','Did you see the news? They launched a rocket to Mars this morning.','Viu a notícia? Lançaram um foguete pra Marte hoje de manhã.'],
    ['voce','Cool! How far away is Mars, anyway?','Que legal! Qual a distância até Marte, afinal?'],
    ['outro','Around two hundred million kilometers, depending on the orbit.','Uns duzentos milhões de quilômetros, depende da órbita.'],
    ['voce','Wow. And scientists just discovered a huge asteroid, right?','Nossa. E os cientistas acabaram de descobrir um asteroide enorme, né?'],
    ['outro','Yeah, it’s about the size of a stadium. They’re watching it with a telescope.','É, é mais ou menos do tamanho de um estádio. Eles tão acompanhando com um telescópio.'],
    ['voce','They can see a rock that small from Earth? How does that even work?','Dá pra ver uma pedra tão pequena daqui da Terra? Como isso funciona, afinal?']
  ]},
  g2_filmes: { titulo:'Falando do anime novo', usa:['s103','s104','s105','s106','s108'], falas:[
    ['outro','Are you watching the new season?','Você tá vendo a temporada nova?'],
    ['voce','Yeah, but no spoilers! I’m only on episode five.','To, mas sem spoiler! To só no episódio cinco.'],
    ['outro','Okay, okay. I binged the whole series last weekend.','Tá bom, tá bom. Eu maratonei a série inteira no fim de semana passado.'],
    ['voce','Already? What episode are you on now?','Já? Em que episódio você tá agora?'],
    ['outro','The last one. It’s worth watching till the end, trust me.','No último. Vale a pena assistir até o fim, confia.'],
    ['voce','When does the next season come out?','Quando sai a próxima temporada?'],
    ['outro','Next year, I think.','Ano que vem, eu acho.']
  ]},
  g2_combinar: { titulo:'Marcando a jogatina', usa:['s109','s110','s111','s112','s114'], falas:[
    ['outro','Are you free tonight?','Tá livre hoje à noite?'],
    ['voce','I think so, but I have to ask my mom.','Acho que sim, mas tenho que perguntar pra minha mãe.'],
    ['outro','Okay. What time works for you?','Beleza. Que horas fica bom pra você?'],
    ['voce','She said yes! I’ll be on in ten minutes.','Ela deixou! Entro em dez minutos.'],
    ['outro','Perfect, I’ll start the Discord call.','Perfeito, vou abrir a call no Discord.'],
    ['voce','Sounds like a plan!','Fechado, combinado!']
  ]},
  g2_imperios: { titulo:'Vídeo sobre os mongóis', usa:['s115','s116','s117','s118','s120'], falas:[
    ['outro','This video says the Mongol Empire was huge.','Esse vídeo diz que o Império Mongol era enorme.'],
    ['voce','Yeah. At its peak, it went from Korea all the way to Europe.','É. No auge, ele ia da Coreia até a Europa.'],
    ['outro','What happened to Baghdad?','E o que aconteceu com Bagdá?'],
    ['voce','It was conquered by the Mongols in 1258.','Foi conquistada pelos mongóis em 1258.'],
    ['outro','Crazy. Why did the empire fall, then?','Doideira. E por que o império caiu, então?'],
    ['voce','It split into smaller parts after a while.','Ele se dividiu em partes menores depois de um tempo.'],
    ['outro','And the Europeans? When did they set sail for Asia?','E os europeus? Quando eles partiram rumo à Ásia?'],
    ['voce','Around 1500. They set sail for India and spent months at sea. Back then, that was normal.','Por volta de 1500. Eles partiram rumo à Índia e passaram meses no mar. Na época, isso era normal.']
  ]}
});
