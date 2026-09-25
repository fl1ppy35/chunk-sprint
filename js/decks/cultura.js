/* Baralho "Filmes, séries e cultura". Cinema, séries, música, livros, museus, teatro e opinião.
   Cada chunk: [id, categoria, português, inglês, frase de exemplo, variações].
   O id NUNCA deve mudar nem ser reaproveitado: é nele que o progresso de cada pessoa fica gravado.
   Pode acrescentar, reordenar ou corrigir texto à vontade sem perder histórico. */
window.CS_DECKS = window.CS_DECKS || {};
CS_DECKS.cultura = {
  name: 'Filmes, séries e cultura',
  cats: [
  {key:'c_filmes', label:'Falando de Filmes', level:'A1', cando:'Dizer que filmes você gosta e perguntar o que a pessoa já viu'},
  {key:'c_series', label:'Séries e Streaming', level:'A1', cando:'Contar que série está vendo e combinar de assistir junto'},
  {key:'c_cinema', label:'No Cinema', level:'A1', cando:'Comprar ingresso, escolher o lugar e pedir pipoca no cinema'},
  {key:'c_gostos', label:'Gostos e Preferências', level:'A2', cando:'Falar do que você curte e do que não curte'},
  {key:'c_musica', label:'Música e Shows', level:'A2', cando:'Conversar sobre música e combinar de ir a um show'},
  {key:'c_livros', label:'Livros e Leitura', level:'A2', cando:'Falar do livro que está lendo e trocar indicações'},
  {key:'c_museus', label:'Museus e Exposições', level:'A2', cando:'Comprar entrada, pedir informação e comentar uma obra num museu'},
  {key:'c_teatro', label:'Teatro e Espetáculos', level:'A2', cando:'Ir a uma peça ou musical: pegar ingresso, achar o lugar e comentar depois'},
  {key:'c_enredo', label:'Personagens e Enredo (sem spoiler!)', level:'B1', cando:'Comentar personagens e história sem entregar o final'},
  {key:'c_opiniao', label:'Dando Opinião e Recomendando', level:'B1', cando:'Dar sua opinião sobre um filme ou série e recomendar com argumentos'}
  ],
  chunks: [
  ['d1','c_filmes','Você gosta de filmes?','Do you like movies?','Do you like movies, or are you more into series?', [
    ['Do you like horror movies?','Você gosta de filme de terror?'],
    ['Does your sister like movies?','Sua irmã gosta de filmes?']
  ]],
  ['d2','c_filmes','Qual é o seu filme favorito?','What’s your favorite movie?','So, what’s your favorite movie of all time?', [
    ['What’s your favorite movie this year?','Qual é o seu filme favorito deste ano?'],
    ['What’s your favorite Disney movie?','Qual é o seu filme favorito da Disney?']
  ]],
  ['d3','c_filmes','Eu adoro comédias','I love comedies','I love comedies, they always make me laugh.', [
    ['I love old comedies.','Eu adoro comédias antigas.'],
    ['My kids love comedies.','Meus filhos adoram comédias.']
  ]],
  ['d4','c_filmes','Você já viu esse filme?','Have you seen this movie?','Have you seen this movie? Everybody’s talking about it.', [
    ['Have you seen this movie before?','Você já tinha visto esse filme?'],
    ['Have you seen the new Pixar movie?','Você já viu o filme novo da Pixar?']
  ]],
  ['d5','c_filmes','Eu vi ontem à noite','I watched it last night','I watched it last night with my family.', [
    ['I watched it last weekend.','Eu vi no fim de semana passado.'],
    ['We watched it last night at home.','A gente viu ontem à noite em casa.']
  ]],
  ['d6','c_filmes','É muito bom','It’s really good','You should see it, it’s really good.', [
    ['The ending is really good.','O final é muito bom.'],
    ['The music is really good.','A música é muito boa.']
  ]],

  ['d7','c_series','Estou vendo uma série nova','I’m watching a new series','I’m watching a new series on Netflix.', [
    ['I’m watching a new series about chefs.','Estou vendo uma série nova sobre chefs.'],
    ['My mom is watching a new series.','Minha mãe está vendo uma série nova.']
  ]],
  ['d8','c_series','Em qual temporada você está?','What season are you on?','What season are you on right now?', [
    ['What episode are you on?','Em qual episódio você está?'],
    ['What season is she on?','Em qual temporada ela está?']
  ]],
  ['d9','c_series','Só mais um episódio','Just one more episode','Just one more episode, and then I’ll go to bed.', [
    ['Just one more episode tonight.','Só mais um episódio hoje.'],
    ['Okay, just one more episode, then dinner.','Tá, só mais um episódio e depois a gente janta.']
  ]],
  ['d10','c_series','Onde dá pra assistir?','Where can I watch it?','Where can I watch it? Is it on Netflix?', [
    ['Where can I watch it in Brazil?','Onde dá pra assistir no Brasil?'],
    ['Where can we watch the finale?','Onde a gente pode ver o último episódio?']
  ]],
  ['d11','c_series','Eu maratonei tudo','I binge-watched the whole thing','I binge-watched the whole thing in one weekend.', [
    ['I binge-watched the whole season.','Eu maratonei a temporada inteira.'],
    ['We binge-watched the whole thing on vacation.','A gente maratonou tudo nas férias.']
  ]],
  ['d12','c_series','Quer assistir junto?','Want to watch it together?','Want to watch it together this weekend?', [
    ['Want to watch the new episode together?','Quer ver o episódio novo junto?'],
    ['Want to watch it together tonight?','Quer assistir junto hoje à noite?']
  ]],

  ['d13','c_cinema','Dois ingressos para a sessão das sete','Two tickets for the seven o’clock show','Hi, two tickets for the seven o’clock show, please.', [
    ['Three tickets for the nine o’clock show.','Três ingressos para a sessão das nove.'],
    ['One ticket for the four o’clock show, please.','Um ingresso para a sessão das quatro, por favor.']
  ]],
  ['d14','c_cinema','A que horas começa o filme?','What time does the movie start?','Excuse me, what time does the movie start?', [
    ['What time does the next show start?','A que horas começa a próxima sessão?'],
    ['What time does the movie end?','A que horas o filme termina?']
  ]],
  ['d15','c_cinema','Esses lugares estão ocupados?','Are these seats taken?','Excuse me, are these seats taken?', [
    ['Is this seat taken?','Esse lugar está ocupado?'],
    ['Are the seats in the back taken?','Os lugares do fundo estão ocupados?']
  ]],
  ['d16','c_cinema','Uma pipoca grande, por favor','A large popcorn, please','Can I get a large popcorn, please?', [
    ['A small popcorn and a soda, please.','Uma pipoca pequena e um refrigerante, por favor.'],
    ['Two large popcorns, please.','Duas pipocas grandes, por favor.']
  ]],
  ['d17','c_cinema','Tem legenda?','Does it have subtitles?','Does it have subtitles, or is it dubbed?', [
    ['Does it have subtitles in Spanish?','Tem legenda em espanhol?'],
    ['Does the show have subtitles?','A série tem legenda?']
  ]],
  ['d18','c_cinema','Dá pra gente sentar mais pra trás?','Can we sit farther back?','Can we sit farther back? The screen is too close.', [
    ['Can we sit closer to the screen?','Dá pra gente sentar mais perto da tela?'],
    ['Can we sit in the middle?','Dá pra gente sentar no meio?']
  ]],

  ['d19','c_gostos','Ando curtindo muito documentário','I’m really into documentaries','Lately I’m really into documentaries about nature.', [
    ['I’m really into true crime podcasts.','Ando curtindo muito podcast de crime real.'],
    ['My daughter is really into anime.','Minha filha curte muito anime.']
  ]],
  ['d20','c_gostos','Não é muito a minha praia','It’s not really my thing','Horror movies? It’s not really my thing.', [
    ['Opera is not really my thing.','Ópera não é muito a minha praia.'],
    ['Reality shows aren’t really my thing.','Reality show não é muito a minha praia.']
  ]],
  ['d21','c_gostos','Prefiro assistir em casa','I’d rather watch it at home','I’d rather watch it at home than go to the movies.', [
    ['I’d rather watch it in English.','Prefiro assistir em inglês.'],
    ['I’d rather watch it tomorrow.','Prefiro ver amanhã.']
  ]],
  ['d22','c_gostos','Que tipo de filme você curte?','What kind of movies are you into?','So what kind of movies are you into?', [
    ['What kind of books are you into?','Que tipo de livro você curte?'],
    ['What kind of shows is he into?','Que tipo de série ele curte?']
  ]],
  ['d23','c_gostos','Não sou muito fã de continuação','I’m not a big fan of sequels','Honestly, I’m not a big fan of sequels.', [
    ['I’m not a big fan of scary movies.','Não sou muito fã de filme de terror.'],
    ['My brother isn’t a big fan of musicals.','Meu irmão não é muito fã de musical.']
  ]],
  ['d24','c_gostos','Eu choro em todo filme','I cry at every movie','I’m so emotional, I cry at every movie.', [
    ['I cry at every Disney movie.','Eu choro em todo filme da Disney.'],
    ['My mom cries at every wedding.','Minha mãe chora em todo casamento.']
  ]],

  ['d25','c_musica','O que você anda ouvindo?','What are you listening to these days?','So, what are you listening to these days?', [
    ['What are your kids listening to these days?','O que seus filhos andam ouvindo?'],
    ['What podcasts are you listening to these days?','Que podcast você anda ouvindo?']
  ]],
  ['d26','c_musica','Essa música não sai da minha cabeça','This song is stuck in my head','I can’t stop humming, this song is stuck in my head.', [
    ['That song from the movie is stuck in my head.','Aquela música do filme não sai da minha cabeça.'],
    ['The theme song is stuck in my head.','A música de abertura não sai da minha cabeça.']
  ]],
  ['d27','c_musica','Você vai no show?','Are you going to the concert?','Are you going to the concert on Saturday?', [
    ['Are you going to the festival?','Você vai no festival?'],
    ['Is your sister going to the concert?','Sua irmã vai no show?']
  ]],
  ['d28','c_musica','Os ingressos esgotaram','The tickets sold out','The tickets sold out in ten minutes!', [
    ['The tickets sold out in one hour.','Os ingressos esgotaram em uma hora.'],
    ['The tickets for Friday sold out.','Os ingressos de sexta esgotaram.']
  ]],
  ['d29','c_musica','Ao vivo eles são incríveis','They sound amazing live','You have to see them, they sound amazing live.', [
    ['She sounds amazing live.','Ao vivo ela canta demais.'],
    ['The band sounded amazing live.','A banda estava incrível ao vivo.']
  ]],
  ['d30','c_musica','Eu conheço essa música!','I know this song!','Wait, turn it up, I know this song!', [
    ['I know this song from a movie!','Eu conheço essa música de um filme!'],
    ['My mom knows this song!','Minha mãe conhece essa música!']
  ]],

  ['d31','c_livros','Estou lendo um livro ótimo','I’m reading a great book','I’m reading a great book about a family in Italy.', [
    ['I’m reading a great book for my book club.','Estou lendo um livro ótimo para o meu clube do livro.'],
    ['My son is reading a great book.','Meu filho está lendo um livro ótimo.']
  ]],
  ['d32','c_livros','É sobre o quê?','What’s it about?','Sounds interesting. What’s it about?', [
    ['What’s the new movie about?','O filme novo é sobre o quê?'],
    ['What’s the second book about?','O segundo livro é sobre o quê?']
  ]],
  ['d33','c_livros','Não consegui largar','I couldn’t put it down','The story was so good, I couldn’t put it down.', [
    ['I couldn’t put it down last night.','Não consegui largar ontem à noite.'],
    ['She couldn’t put the book down.','Ela não conseguiu largar o livro.']
  ]],
  ['d34','c_livros','O livro é melhor que o filme','The book is better than the movie','Honestly, the book is better than the movie.', [
    ['The book is better than the series.','O livro é melhor que a série.'],
    ['The movie is better than the book.','O filme é melhor que o livro.']
  ]],
  ['d35','c_livros','Estou na metade','I’m halfway through','I’m halfway through the second book.', [
    ['I’m halfway through the season.','Estou na metade da temporada.'],
    ['I’m halfway through it, no spoilers!','Estou na metade, sem spoiler!']
  ]],
  ['d36','c_livros','Me empresta quando terminar?','Can I borrow it when you’re done?','Can I borrow it when you’re done reading?', [
    ['Can I borrow your book when you’re done?','Me empresta seu livro quando terminar?'],
    ['Can my sister borrow it when you’re done?','Minha irmã pode pegar emprestado quando você terminar?']
  ]],

  ['d37','c_museus','Quanto é a entrada?','How much is admission?','Hi, how much is admission for adults?', [
    ['How much is admission for kids?','Quanto é a entrada para criança?'],
    ['How much is admission on Sundays?','Quanto é a entrada no domingo?']
  ]],
  ['d38','c_museus','Vocês têm audioguia em português?','Do you have an audio guide in Portuguese?','Do you have an audio guide in Portuguese, by any chance?', [
    ['Do you have a map in Portuguese?','Vocês têm mapa em português?'],
    ['Do you have an audio guide for kids?','Vocês têm audioguia para criança?']
  ]],
  ['d39','c_museus','Pode tirar foto?','Are we allowed to take pictures?','Excuse me, are we allowed to take pictures in here?', [
    ['Are we allowed to use flash?','Pode usar flash?'],
    ['Are we allowed to eat in here?','Pode comer aqui dentro?']
  ]],
  ['d40','c_museus','Onde fica a exposição nova?','Where’s the new exhibit?','Excuse me, where’s the new exhibit? The one about photography.', [
    ['Where’s the dinosaur exhibit?','Onde fica a exposição dos dinossauros?'],
    ['Where’s the Van Gogh exhibit?','Onde fica a exposição do Van Gogh?']
  ]],
  ['d41','c_museus','Quem pintou isso?','Who painted this?','This is beautiful. Who painted this?', [
    ['Who painted this one?','Quem pintou esse aqui?'],
    ['Do you know who painted the ceiling?','Você sabe quem pintou o teto?']
  ]],
  ['d42','c_museus','Vale muito a pena','It’s totally worth it','The line is long, but it’s totally worth it.', [
    ['The museum is totally worth it.','O museu vale muito a pena.'],
    ['The audio guide is totally worth it.','O audioguia vale muito a pena.']
  ]],

  ['d43','c_teatro','Ainda tem lugar para hoje à noite?','Do you have any seats left for tonight?','Do you have any seats left for tonight’s show?', [
    ['Do you have any seats left for Saturday?','Ainda tem lugar para sábado?'],
    ['Do you have any seats left for the matinee?','Ainda tem lugar para a matinê?']
  ]],
  ['d44','c_teatro','Pode me ajudar a achar meu lugar?','Could you help me find my seat?','Excuse me, could you help me find my seat? It’s row F.', [
    ['Could you help us find our seats?','Pode ajudar a gente a achar nossos lugares?'],
    ['Could you help my mom find her seat?','Pode ajudar minha mãe a achar o lugar dela?']
  ]],
  ['d45','c_teatro','Quanto tempo dura o espetáculo?','How long is the show?','How long is the show, with the intermission?', [
    ['How long is the movie?','Quanto tempo dura o filme?'],
    ['How long is the first act?','Quanto tempo dura o primeiro ato?']
  ]],
  ['d46','c_teatro','Tem intervalo?','Is there an intermission?','Is there an intermission, or does it go straight through?', [
    ['Is there an intermission in the opera?','Tem intervalo na ópera?'],
    ['Is there an intermission in the ballet?','Tem intervalo no balé?']
  ]],
  ['d47','c_teatro','O elenco estava incrível','The cast was amazing','The cast was amazing, especially the lead actress.', [
    ['The cast of the series is amazing.','O elenco da série é incrível.'],
    ['The dancers were amazing.','Os bailarinos estavam incríveis.']
  ]],
  ['d48','c_teatro','Eles foram aplaudidos de pé','They got a standing ovation','At the end, they got a standing ovation.', [
    ['The lead actress got a standing ovation.','A atriz principal foi aplaudida de pé.'],
    ['The orchestra got a standing ovation.','A orquestra foi aplaudida de pé.']
  ]],

  ['d49','c_enredo','Sem spoiler, por favor!','No spoilers, please!','No spoilers, please! I haven’t seen the finale yet.', [
    ['No spoilers, I’m only on episode two!','Sem spoiler, estou só no episódio dois!'],
    ['No spoilers in the group chat, please!','Sem spoiler no grupo, por favor!']
  ]],
  ['d50','c_enredo','Quem é seu personagem favorito?','Who’s your favorite character?','Who’s your favorite character in the show?', [
    ['Who’s your favorite character in the book?','Quem é seu personagem favorito do livro?'],
    ['Who’s your favorite villain?','Quem é seu vilão favorito?']
  ]],
  ['d51','c_enredo','Eu não esperava por essa','I didn’t see that coming','Wow, I didn’t see that coming at all.', [
    ['I didn’t see that twist coming.','Eu não esperava aquela reviravolta.'],
    ['Nobody saw that ending coming.','Ninguém esperava aquele final.']
  ]],
  ['d52','c_enredo','Se passa em Londres','It takes place in London','It takes place in London, back in the 1800s.', [
    ['It takes place in a small town in Texas.','Se passa numa cidade pequena do Texas.'],
    ['The series takes place in the future.','A série se passa no futuro.']
  ]],
  ['d53','c_enredo','O final foi muito triste','The ending was so sad','I loved it, but the ending was so sad.', [
    ['The ending was so confusing.','O final foi muito confuso.'],
    ['The ending of the book was so sad.','O final do livro foi muito triste.']
  ]],
  ['d54','c_enredo','Não suporto aquele personagem','I can’t stand that character','I can’t stand that character, she’s so annoying.', [
    ['I can’t stand the main character.','Não suporto a personagem principal.'],
    ['My dad can’t stand that character.','Meu pai não suporta aquele personagem.']
  ]],

  ['d55','c_opiniao','Você tem que assistir','You have to watch it','You have to watch it, you’re going to love it.', [
    ['You have to watch the first season.','Você tem que ver a primeira temporada.'],
    ['You have to watch it with your kids.','Você tem que assistir com seus filhos.']
  ]],
  ['d56','c_opiniao','Se quer saber, é superestimado','If you ask me, it’s overrated','Everyone loves it, but if you ask me, it’s overrated.', [
    ['If you ask me, the book is overrated.','Se quer saber, o livro é superestimado.'],
    ['If you ask me, the sequel was overrated.','Se quer saber, a continuação foi superestimada.']
  ]],
  ['d57','c_opiniao','Começa devagar, mas melhora','It’s slow at first, but it gets better','Give it a chance. It’s slow at first, but it gets better.', [
    ['The book is slow at first, but it gets better.','O livro começa devagar, mas melhora.'],
    ['Season one is slow at first, but it gets better.','A primeira temporada começa devagar, mas melhora.']
  ]],
  ['d58','c_opiniao','Não foi tudo isso que falaram','It didn’t live up to the hype','I was excited, but it didn’t live up to the hype.', [
    ['The finale didn’t live up to the hype.','O último episódio não foi tudo isso que falaram.'],
    ['The sequel didn’t live up to the hype.','A continuação não foi tudo isso que falaram.']
  ]],
  ['d59','c_opiniao','Se você gostou daquele, vai adorar este','If you liked that, you’ll love this','If you liked that, you’ll love this new series.', [
    ['If you liked the book, you’ll love the movie.','Se você gostou do livro, vai adorar o filme.'],
    ['If you liked Friends, you’ll love this one.','Se você gostou de Friends, vai adorar essa.']
  ]],
  ['d60','c_opiniao','Eu daria nota oito de dez','I’d give it an eight out of ten','Overall, I’d give it an eight out of ten.', [
    ['I’d give the book a five out of ten.','Eu daria nota cinco para o livro.'],
    ['I’d give the ending a ten out of ten.','Eu daria nota dez para o final.']
  ]]
  ]
};

window.CS_DIALOGS = Object.assign(window.CS_DIALOGS || {}, {
  /* ---- filmes, séries e cultura ---- */
  c_filmes: { titulo:'Papo sobre filmes', usa:['d1','d2','d3','d4','d6'], falas:[
    ['outro','Do you like movies?','Você gosta de filmes?'],
    ['voce','Yes! I love comedies.','Sim! Eu adoro comédias.'],
    ['outro','Me too. What’s your favorite movie?','Eu também. Qual é o seu filme favorito?'],
    ['voce','Home Alone. Look, it’s on TV now! Have you seen this movie?','Esqueceram de Mim. Olha, está passando na TV! Você já viu esse filme?'],
    ['outro','Of course! It’s a classic.','Claro! É um clássico.'],
    ['voce','Yes, it’s really good.','É, é muito bom.']
  ]},
  c_series: { titulo:'A série do momento', usa:['d7','d8','d9','d10','d12'], falas:[
    ['voce','I’m watching a new series. It’s about a hotel.','Estou vendo uma série nova. É sobre um hotel.'],
    ['outro','Oh, I love that one! What season are you on?','Ah, eu adoro essa! Em qual temporada você está?'],
    ['voce','Season one. Last night I said just one more episode, and I watched four!','Na primeira. Ontem eu falei só mais um episódio e vi quatro!'],
    ['outro','Ha! I’m on season two.','Rá! Eu estou na segunda.'],
    ['voce','Where can I watch it on TV?','Onde dá pra assistir na TV?'],
    ['outro','It’s on Netflix. Want to watch it together?','Está na Netflix. Quer assistir junto?'],
    ['voce','Sure, on Friday!','Claro, na sexta!']
  ]},
  c_cinema: { titulo:'Na bilheteria do cinema', usa:['d13','d14','d16','d17','d15'], falas:[
    ['voce','Hi, two tickets for the seven o’clock show, please.','Oi, dois ingressos para a sessão das sete, por favor.'],
    ['outro','Sure. That’s twenty-four dollars.','Claro. São vinte e quatro dólares.'],
    ['voce','Does it have subtitles?','Tem legenda?'],
    ['outro','Yes, in English.','Tem, em inglês.'],
    ['voce','Great. And a large popcorn, please. What time does the movie start?','Ótimo. E uma pipoca grande, por favor. A que horas começa o filme?'],
    ['outro','At seven ten, after the trailers.','Às sete e dez, depois dos trailers.'],
    ['voce','Excuse me, are these seats taken?','Com licença, esses lugares estão ocupados?'],
    ['outro','No, go ahead.','Não, pode sentar.']
  ]},
  c_gostos: { titulo:'O que você curte?', usa:['d22','d19','d20','d21','d24'], falas:[
    ['outro','So what kind of movies are you into?','E aí, que tipo de filme você curte?'],
    ['voce','Lately I’m really into documentaries.','Ultimamente ando curtindo muito documentário.'],
    ['outro','Cool. What about horror? There’s a new one out.','Legal. E terror? Saiu um novo.'],
    ['voce','Horror? It’s not really my thing.','Terror? Não é muito a minha praia.'],
    ['outro','Fair enough. Want to go to the movies on Sunday?','Justo. Quer ir ao cinema no domingo?'],
    ['voce','Honestly, I’d rather watch it at home. I cry at every movie!','Sinceramente, prefiro assistir em casa. Eu choro em todo filme!']
  ]},
  c_musica: { titulo:'Combinando um show', usa:['d25','d26','d27','d28','d29'], falas:[
    ['outro','Hey, what are you listening to these days?','Oi, o que você anda ouvindo?'],
    ['voce','A lot of old rock. This song is stuck in my head.','Muito rock antigo. Essa música não sai da minha cabeça.'],
    ['outro','Oh, they’re playing here next month! Are you going to the concert?','Ah, eles vão tocar aqui mês que vem! Você vai no show?'],
    ['voce','I wanted to, but the tickets sold out.','Eu queria, mas os ingressos esgotaram.'],
    ['outro','My cousin has an extra ticket. Want it?','Meu primo tem um ingresso sobrando. Quer?'],
    ['voce','Yes, please! They sound amazing live.','Quero, por favor! Ao vivo eles são incríveis.']
  ]},
  c_livros: { titulo:'Clube do livro', usa:['d31','d32','d33','d35','d36'], falas:[
    ['voce','I’m reading a great book.','Estou lendo um livro ótimo.'],
    ['outro','Oh, nice. What’s it about?','Ah, legal. É sobre o quê?'],
    ['voce','A family that opens a small bakery in Italy.','Uma família que abre uma padaria pequena na Itália.'],
    ['outro','Sounds sweet. Are you almost done?','Parece fofo. Já está quase terminando?'],
    ['voce','I’m halfway through. I couldn’t put it down last night.','Estou na metade. Não consegui largar ontem à noite.'],
    ['outro','Can I borrow it when you’re done?','Me empresta quando terminar?'],
    ['voce','Of course!','Claro!']
  ]},
  c_museus: { titulo:'Visita ao museu', usa:['d37','d38','d39','d41','d42'], falas:[
    ['voce','Hi, how much is admission?','Oi, quanto é a entrada?'],
    ['outro','It’s twenty dollars for adults.','São vinte dólares para adultos.'],
    ['voce','Do you have an audio guide in Portuguese?','Vocês têm audioguia em português?'],
    ['outro','We do. It’s five dollars more, and it’s totally worth it.','Temos. São mais cinco dólares, e vale muito a pena.'],
    ['voce','Great. Are we allowed to take pictures?','Ótimo. Pode tirar foto?'],
    ['outro','Yes, just no flash, please.','Pode, só sem flash, por favor.'],
    ['voce','Thanks. Oh, this one is beautiful. Who painted this?','Obrigada. Nossa, esse é lindo. Quem pintou isso?'],
    ['outro','That’s a Monet. It’s one of our favorites.','É um Monet. É um dos nossos favoritos.']
  ]},
  c_teatro: { titulo:'Noite de musical', usa:['d43','d44','d45','d46','d47','d48'], falas:[
    ['voce','Hi, do you have any seats left for tonight?','Oi, ainda tem lugar para hoje à noite?'],
    ['outro','Just a few in the balcony. The show starts at eight.','Só alguns no balcão. O espetáculo começa às oito.'],
    ['voce','Perfect. How long is the show? Is there an intermission?','Perfeito. Quanto tempo dura o espetáculo? Tem intervalo?'],
    ['outro','About two and a half hours, with a fifteen-minute intermission.','Umas duas horas e meia, com um intervalo de quinze minutos.'],
    ['voce','Excuse me, could you help me find my seat?','Com licença, pode me ajudar a achar meu lugar?'],
    ['outro','Sure, row C is right up here. Enjoy the show!','Claro, a fileira C é logo aqui em cima. Bom espetáculo!'],
    ['voce','Wow, the cast was amazing!','Nossa, o elenco estava incrível!'],
    ['outro','I know! They got a standing ovation last night too.','Pois é! Ontem também foram aplaudidos de pé.']
  ]},
  c_enredo: { titulo:'Sem spoiler!', usa:['d49','d50','d51','d52','d54'], falas:[
    ['outro','Did you finish the new mystery series? That last episode!','Você terminou a série nova de mistério? Aquele último episódio!'],
    ['voce','No spoilers, please! I’m on episode six.','Sem spoiler, por favor! Estou no episódio seis.'],
    ['outro','Okay, okay. Who’s your favorite character so far?','Tá bom, tá bom. Quem é seu personagem favorito até agora?'],
    ['voce','The old detective. And the brother? I can’t stand that character. He’s so rude.','O detetive velho. E o irmão? Não suporto aquele personagem. Ele é muito grosso.'],
    ['outro','Ha, just wait. I love that it takes place in London.','Rá, espera só. Adoro que se passa em Londres.'],
    ['voce','Me too! And the twist in episode three? I didn’t see that coming.','Eu também! E a reviravolta do episódio três? Eu não esperava por essa.'],
    ['outro','Then you’re going to love the ending. That’s all I’m saying!','Então você vai amar o final. Não falo mais nada!']
  ]},
  c_opiniao: { titulo:'Indicando uma série', usa:['d55','d56','d57','d58','d59'], falas:[
    ['outro','I need something new to watch. Any ideas?','Preciso de algo novo pra ver. Alguma ideia?'],
    ['voce','Did you watch that series about the chef? You have to watch it.','Você viu aquela série do chef? Você tem que assistir.'],
    ['outro','I tried the first episode, but I got bored.','Tentei o primeiro episódio, mas achei chato.'],
    ['voce','It’s slow at first, but it gets better. Trust me.','Começa devagar, mas melhora. Confia em mim.'],
    ['outro','Okay. What about the big space movie everyone’s talking about?','Tá. E aquele filme grande de espaço que todo mundo está comentando?'],
    ['voce','If you ask me, it’s overrated. It didn’t live up to the hype.','Se quer saber, é superestimado. Não foi tudo isso que falaram.'],
    ['outro','Good to know. You liked the one about the bakery, right?','Bom saber. Você gostou daquela da padaria, né?'],
    ['voce','Yes! And if you liked that, you’ll love this one. It’s called The Garden.','Sim! E se você gostou daquela, vai adorar esta. Chama The Garden.']
  ]}
});
