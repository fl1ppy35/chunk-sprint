/* Baralho "Games e tecnologia". Jogos online, montagem de PC, streams, torneios e história mundial.
   Cada chunk: [id, categoria, português, inglês, frase de exemplo].
   O id NUNCA deve mudar nem ser reaproveitado: é nele que o progresso de cada pessoa fica gravado.
   Pode acrescentar, reordenar ou corrigir texto à vontade sem perder histórico. */
window.CS_DECKS = window.CS_DECKS || {};
CS_DECKS.games = {
  name: 'Games e tecnologia',
  cats: [
  {key:'queue', label:'Entrando no Jogo', level:'A1', cando:'Chamar alguém para jogar e entrar na call'},
  {key:'partida', label:'Durante a Partida', level:'A2', cando:'Se comunicar com o time durante a partida'},
  {key:'pc', label:'Montando o PC', level:'A2', cando:'Conversar sobre peças e montagem de PC'},
  {key:'streams', label:'Assistindo Streams', level:'A2', cando:'Comentar uma live e pedir recomendação de jogo'},
  {key:'despedida', label:'Encontro e Despedida', level:'A1', cando:'Encerrar a partida com educação'},
  {key:'times', label:'Torneios e Times', level:'B1', cando:'Organizar um time para um campeonato'},
  {key:'software', label:'Configurações e Software', level:'A2', cando:'Resolver um jogo travando'},
  {key:'historia', label:'História Mundial', level:'B1', cando:'Conversar sobre fatos históricos'}
  ],
  chunks: [
  ['s1','queue','Bora jogar uma partida?','Wanna queue up?','Hey, wanna queue up for a match?', [
      ["Wanna queue up after dinner?", "Bora jogar uma partida depois da janta?"],
      ["I just got online. Wanna queue up?", "Acabei de entrar. Bora jogar uma partida?"]
  ]],
  ['s2','queue','To adicionando você','I’m adding you as a friend','I’m adding you as a friend on Steam.', [
      ["I’m adding you as a friend on Discord.", "To te adicionando no Discord."],
      ["What’s your username? I’m adding you as a friend.", "Qual seu nick? To te adicionando."]
  ]],
  ['s3','queue','Qual sua patente?','What’s your rank?','What’s your rank this season?', [
      ["What’s your rank in Valorant?", "Qual sua patente no Valorant?"],
      ["You’re really good. What’s your rank?", "Você é muito bom. Qual sua patente?"]
  ]],
  ['s4','queue','To entrando na call','I’m joining the call','Give me a sec, I’m joining the call.', [
      ["I’m joining the call now, can you hear me?", "To entrando na call agora, tá me ouvindo?"],
      ["Wait for me, I’m joining the call in a minute.", "Me espera, to entrando na call em um minuto."]
  ]],
  ['s5','queue','Vamos de duo?','Wanna duo?','Wanna duo tonight?', [
      ["Wanna duo this weekend?", "Vamos de duo no fim de semana?"],
      ["My friends are offline. Wanna duo?", "Meus amigos tão offline. Vamos de duo?"]
  ]],
  ['s6','queue','To pronto, pode começar','I’m ready, go ahead and start','I’m ready, go ahead and start the match.', [
      ["Okay, I’m ready, go ahead and start the game.", "Beleza, to pronto, pode começar o jogo."],
      ["I’m ready, go ahead and start the stream.", "To pronto, pode começar a live."]
  ]],
  ['s7','partida','Cuidado, atrás de você!','Watch out, behind you!','Watch out, behind you! There’s one more.', [
      ["Watch out, behind you! He’s on the stairs.", "Cuidado, atrás de você! Ele tá na escada."],
      ["Watch out, behind you! Two enemies coming.", "Cuidado, atrás de você! Dois inimigos vindo."]
  ]],
  ['s8','partida','Me dá cobertura','Cover me','Cover me while I reload.', [
      ["Cover me, I’m going for the flag.", "Me dá cobertura, vou pegar a bandeira."],
      ["Cover me while I revive him.", "Me dá cobertura enquanto eu revivo ele."]
  ]],
  ['s9','partida','To sem munição','I’m out of ammo','I’m out of ammo, need a refill.', [
      ["I’m out of ammo, can you drop me some?", "To sem munição, pode dropar um pouco pra mim?"],
      ["Don’t push yet, I’m out of ammo.", "Não avança ainda, to sem munição."]
  ]],
  ['s10','partida','Vamos trocar de lado do mapa','Let’s rotate','Let’s rotate to the other side of the map.', [
      ["They’re all at B. Let’s rotate.", "Tá todo mundo no B. Vamos trocar de lado."],
      ["Let’s rotate before the zone closes.", "Vamos trocar de lado antes da zona fechar."]
  ]],
  ['s11','partida','Bom tiro!','Nice shot!','Nice shot, that was clean!', [
      ["Nice shot! Right in the head.", "Bom tiro! Bem na cabeça."],
      ["Nice shot from across the map!", "Bom tiro do outro lado do mapa!"]
  ]],
  ['s12','partida','Meu ping tá alto','My ping is really high','My ping is really high right now, sorry.', [
      ["My ping is really high tonight, I keep lagging.", "Meu ping tá muito alto hoje, fico travando."],
      ["Sorry, my ping is really high on this server.", "Foi mal, meu ping tá muito alto nesse servidor."]
  ]],
  ['s19','pc','To montando um PC novo','I’m building a new PC','I’m building a new PC for gaming this month.', [
      ["I’m building a new PC with my dad.", "To montando um PC novo com meu pai."],
      ["I’m building a new PC for streaming.", "To montando um PC novo pra fazer live."]
  ]],
  ['s20','pc','Qual placa de vídeo você usa?','What GPU are you running?','What GPU are you running these days?', [
      ["Your game looks amazing. What GPU are you running?", "Seu jogo tá lindo. Qual placa de vídeo você usa?"],
      ["What GPU are you running for 4K?", "Qual placa de vídeo você usa pra 4K?"]
  ]],
  ['s21','pc','Preciso de mais memória RAM','I need more RAM','I need more RAM to run this smoothly.', [
      ["I need more RAM for streaming and gaming at the same time.", "Preciso de mais RAM pra fazer live e jogar ao mesmo tempo."],
      ["My PC is slow. I need more RAM.", "Meu PC tá lento. Preciso de mais RAM."]
  ]],
  ['s22','pc','A fonte é compatível?','Is the power supply compatible?','Is the power supply compatible with this GPU?', [
      ["Is the power supply compatible with my motherboard?", "A fonte é compatível com minha placa-mãe?"],
      ["Before I buy it, is the power supply compatible?", "Antes de comprar, a fonte é compatível?"]
  ]],
  ['s23','pc','Vou fazer o upgrade do processador','I’m going to upgrade the CPU','I’m going to upgrade the CPU next.', [
      ["I’m going to upgrade the CPU this summer.", "Vou fazer o upgrade do processador nas férias."],
      ["The GPU is fine, but I’m going to upgrade the CPU.", "A placa de vídeo tá boa, mas vou fazer o upgrade do processador."]
  ]],
  ['s24','pc','O PC tá superaquecendo','The PC is overheating','The PC is overheating under load.', [
      ["The PC is overheating, I need a better cooler.", "O PC tá superaquecendo, preciso de um cooler melhor."],
      ["The PC is overheating again, the fans are so loud.", "O PC tá superaquecendo de novo, as ventoinhas tão muito barulhentas."]
  ]],
  ['s31','streams','Quem tá na live?','Who’s live right now?','Who’s live right now on Twitch?', [
      ["Who’s live right now on YouTube?", "Quem tá na live agora no YouTube?"],
      ["I’m bored. Who’s live right now?", "To entediado. Quem tá na live agora?"]
  ]],
  ['s32','streams','Isso foi incrível!','That was insane!','Did you see that play? That was insane!', [
      ["He won with one HP left. That was insane!", "Ele ganhou com um de vida. Isso foi incrível!"],
      ["That was insane! Watch the replay.", "Isso foi incrível! Vê o replay."]
  ]],
  ['s33','streams','Se inscreve no canal','Subscribe to the channel','Don’t forget to subscribe to the channel.', [
      ["If you like history videos, subscribe to the channel.", "Se você curte vídeo de história, se inscreve no canal."],
      ["Subscribe to the channel for more builds.", "Se inscreve no canal pra ver mais builds."]
  ]],
  ['s34','streams','Deixa o like','Leave a like','Leave a like if you enjoyed it.', [
      ["Leave a like and turn on notifications.", "Deixa o like e ativa as notificações."],
      ["If this helped you, leave a like.", "Se isso te ajudou, deixa o like."]
  ]],
  ['s35','streams','To assistindo a partida','I’m watching the match','I’m watching the match right now.', [
      ["I’m watching the match on Twitch with my friends.", "To assistindo a partida na Twitch com meus amigos."],
      ["Don’t tell me the score, I’m watching the match later.", "Não me conta o placar, vou assistir a partida depois."]
  ]],
  ['s36','streams','Qual jogo você recomenda?','What game do you recommend?','What game do you recommend I try?', [
      ["What game do you recommend for playing with friends?", "Qual jogo você recomenda pra jogar com os amigos?"],
      ["I finished Elden Ring. What game do you recommend?", "Terminei o Elden Ring. Qual jogo você recomenda?"]
  ]],
  ['s37','despedida','Boa partida!','Good game!','Good game, well played!', [
      ["Good game, guys! That was fun.", "Boa partida, galera! Foi divertido."],
      ["We lost, but good game!", "A gente perdeu, mas boa partida!"]
  ]],
  ['s38','despedida','Valeu pela ajuda','Thanks for the help','Thanks for the help back there.', [
      ["Thanks for the help with the boss fight.", "Valeu pela ajuda na luta contra o chefão."],
      ["Thanks for the help with my PC build.", "Valeu pela ajuda na montagem do meu PC."]
  ]],
  ['s39','despedida','A gente se vê depois','See you later','Alright, see you later.', [
      ["I have to study now. See you later!", "Tenho que estudar agora. A gente se vê depois!"],
      ["See you later in the tournament.", "A gente se vê depois no torneio."]
  ]],
  ['s40','despedida','Foi mal por isso','My bad','My bad, that was my fault.', [
      ["My bad, I didn’t see him.", "Foi mal, não vi ele."],
      ["My bad, I pressed the wrong key.", "Foi mal, apertei a tecla errada."]
  ]],
  ['s41','despedida','Vamos de novo?','One more round?','One more round before we log off?', [
      ["That was close. One more round?", "Foi por pouco. Vamos de novo?"],
      ["It’s still early. One more round?", "Ainda tá cedo. Vamos de novo?"]
  ]],
  ['s42','despedida','Até a próxima!','Catch you next time!','Catch you next time, gg!', [
      ["I have to go. Catch you next time!", "Tenho que ir. Até a próxima!"],
      ["Catch you next time on the server!", "Até a próxima no servidor!"]
  ]],
  ['s43','times','Vamos formar um time?','Wanna form a team?','Wanna form a team for the tournament?', [
      ["Wanna form a team for the school championship?", "Vamos formar um time pro campeonato da escola?"],
      ["We need five players. Wanna form a team?", "A gente precisa de cinco jogadores. Vamos formar um time?"]
  ]],
  ['s44','times','Qual sua função no time?','What’s your role on the team?','What’s your role on the team, support or carry?', [
      ["What’s your role on the team, tank or healer?", "Qual sua função no time, tank ou healer?"],
      ["Before the match, what’s your role on the team?", "Antes da partida, qual sua função no time?"]
  ]],
  ['s45','times','A gente se classificou!','We qualified!','We qualified for the next round!', [
      ["We qualified for the finals!", "A gente se classificou pra final!"],
      ["We qualified! We play again on Saturday.", "A gente se classificou! Jogamos de novo no sábado."]
  ]],
  ['s46','times','Vamos treinar antes do campeonato','Let’s practice before the tournament','Let’s practice before the tournament starts.', [
      ["Let’s practice before the tournament every night this week.", "Vamos treinar antes do campeonato toda noite essa semana."],
      ["We need new strategies. Let’s practice before the tournament.", "A gente precisa de estratégias novas. Vamos treinar antes do campeonato."]
  ]],
  ['s47','times','Quem vai ser o capitão?','Who’s going to be the captain?','Who’s going to be the captain of the team?', [
      ["Who’s going to be the captain this season?", "Quem vai ser o capitão nessa temporada?"],
      ["We have a new team. Who’s going to be the captain?", "A gente tem um time novo. Quem vai ser o capitão?"]
  ]],
  ['s48','times','A gente perdeu por pouco','We barely lost','We barely lost, it was so close!', [
      ["We barely lost in the semifinal.", "A gente perdeu por pouco na semifinal."],
      ["We barely lost, just one round.", "A gente perdeu por pouco, só um round."]
  ]],
  ['s49','software','Preciso atualizar os drivers','I need to update the drivers','My game keeps crashing, I need to update the drivers.', [
      ["Before the new game comes out, I need to update the drivers.", "Antes do jogo novo sair, preciso atualizar os drivers."],
      ["I need to update the drivers for my new GPU.", "Preciso atualizar os drivers da minha placa de vídeo nova."]
  ]],
  ['s50','software','O jogo tá travando','The game keeps freezing','The game keeps freezing on this level.', [
      ["The game keeps freezing after the update.", "O jogo tá travando depois da atualização."],
      ["The game keeps freezing when I open the map.", "O jogo trava toda vez que eu abro o mapa."]
  ]],
  ['s51','software','Qual configuração você usa?','What settings do you use?','What settings do you use for sensitivity?', [
      ["What settings do you use for graphics?", "Qual configuração você usa pro gráfico?"],
      ["Your aim is great. What settings do you use?", "Sua mira é muito boa. Qual configuração você usa?"]
  ]],
  ['s52','software','Vou reinstalar o jogo','I’m going to reinstall the game','I’m going to reinstall the game to fix it.', [
      ["Nothing works. I’m going to reinstall the game.", "Nada funciona. Vou reinstalar o jogo."],
      ["I’m going to reinstall the game on my new SSD.", "Vou reinstalar o jogo no meu SSD novo."]
  ]],
  ['s53','software','Isso resolveu o problema','That fixed the issue','That fixed the issue, thanks!', [
      ["Updating the drivers? That fixed the issue.", "Atualizar os drivers? Isso resolveu o problema."],
      ["I restarted the router, and that fixed the issue.", "Reiniciei o roteador, e isso resolveu o problema."]
  ]],
  ['s54','software','Deixa eu verificar minhas configurações','Let me check my settings','Let me check my settings real quick.', [
      ["My mic isn’t working. Let me check my settings.", "Meu microfone não tá funcionando. Deixa eu verificar minhas configurações."],
      ["The game looks weird. Let me check my settings.", "O jogo tá estranho. Deixa eu verificar minhas configurações."]
  ]],
  ['s55','historia','Isso aconteceu durante a Segunda Guerra Mundial','This happened during World War II','This happened during World War II, back in the 1940s.', [
      ["This happened during World War II, in France.", "Isso aconteceu durante a Segunda Guerra Mundial, na França."],
      ["This game is set in a battle. This happened during World War II.", "Esse jogo se passa numa batalha. Isso aconteceu durante a Segunda Guerra Mundial."]
  ]],
  ['s56','historia','Foi um marco na história','It was a turning point in history','The fall of the Berlin Wall? It was a turning point in history.', [
      ["The moon landing was a turning point in history.", "A chegada à Lua foi um marco na história."],
      ["For Brazil, independence in 1822 was a turning point in history.", "Para o Brasil, a independência em 1822 foi um marco na história."]
  ]],
  ['s57','historia','Essa civilização existiu há milhares de anos','This civilization existed thousands of years ago','This civilization existed thousands of years ago, in ancient Egypt.', [
      ["The Maya? This civilization existed thousands of years ago.", "Os maias? Essa civilização existiu há milhares de anos."],
      ["This civilization existed thousands of years ago, in Mesopotamia.", "Essa civilização existiu há milhares de anos, na Mesopotâmia."]
  ]],
  ['s58','historia','Quem descobriu isso primeiro?','Who discovered this first?','Who discovered this first, historically speaking?', [
      ["Who discovered this first, the Greeks or the Egyptians?", "Quem descobriu isso primeiro, os gregos ou os egípcios?"],
      ["Penicillin is amazing. Who discovered this first?", "A penicilina é incrível. Quem descobriu isso primeiro?"]
  ]],
  ['s59','historia','Isso mudou o curso da história','It changed the course of history','The printing press? It changed the course of history.', [
      ["The internet? It changed the course of history.", "A internet? Isso mudou o curso da história."],
      ["That battle changed the course of history.", "Aquela batalha mudou o curso da história."]
  ]],
  ['s60','historia','Vamos voltar no tempo','Let’s go back in time','Let’s go back in time and look at how it all started.', [
      ["Let’s go back in time to ancient Rome.", "Vamos voltar no tempo até a Roma antiga."],
      ["In this game, let’s go back in time to the Middle Ages.", "Nesse jogo, vamos voltar no tempo até a Idade Média."]
  ]]
  ]
};
