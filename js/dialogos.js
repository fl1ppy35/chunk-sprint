/* Conversas curtas, uma por categoria. Servem para duas coisas:
   1. OUVIR: o chunk aparece dentro de uma conversa de verdade, na voz de outra pessoa;
   2. FALAR (role-play): a pessoa faz o papel "voce" e responde em voz alta ou digitando.
   Cada conversa só é liberada quando todos os chunks de "usa" já foram aprendidos.
   Falas: ['outro' | 'voce', 'inglês', 'português']. */
window.CS_DIALOGS = {
  /* ---- viagem e dia a dia ---- */
  diaadia: { titulo:'Conhecendo alguém no hotel', usa:['t1','t2','t3','t5','t6'], falas:[
    ['outro','Hi there! How are you doing?','Oi! Tudo bem?'],
    ['voce','I’m good, thanks. Nice to meet you!','Tudo ótimo, obrigado. Prazer em te conhecer!'],
    ['outro','Nice to meet you too. So what brings you to town, and how long are you in for?','Prazer também. E o que te traz à cidade, e por quanto tempo você fica?'],
    ['voce','Sorry, I didn’t catch that. Could you speak more slowly, please?','Desculpa, não entendi. Pode falar mais devagar, por favor?'],
    ['outro','Sure! What brings you here?','Claro! O que te traz aqui?'],
    ['voce','Just a vacation. Well, have a great day!','Só férias. Bom, tenha um ótimo dia!']
  ]},
  compras2: { titulo:'Numa loja de roupas', usa:['t7','t8','t11','t12'], falas:[
    ['outro','Hi! Can I help you find anything?','Oi! Posso te ajudar a encontrar algo?'],
    ['voce','Yes. How much does this cost?','Sim. Quanto custa isso?'],
    ['outro','That jacket is forty-five dollars.','Essa jaqueta custa quarenta e cinco dólares.'],
    ['voce','Do you have another color or size?','Tem outra cor ou tamanho?'],
    ['outro','We have it in black, in a medium.','Temos em preto, no tamanho M.'],
    ['voce','Great, I’ll take it. Do you accept card?','Ótimo, vou levar. Vocês aceitam cartão?'],
    ['outro','Sure, just tap it right here.','Claro, é só aproximar aqui.'],
    ['voce','Can I get a receipt, please?','Pode me dar o recibo, por favor?']
  ]},
  informacoes: { titulo:'Perdido na cidade', usa:['t14','t15','t16','t18'], falas:[
    ['voce','Excuse me, sorry to bother you. I’m lost.','Com licença, desculpa incomodar. Estou perdido.'],
    ['outro','No problem. Where are you trying to go?','Sem problema. Para onde você está tentando ir?'],
    ['voce','The train station. How do I get there?','A estação de trem. Como chego até lá?'],
    ['outro','Go straight for two blocks and turn left.','Siga reto por duas quadras e vire à esquerda.'],
    ['voce','Is it far from here?','É longe daqui?'],
    ['outro','Not really, about ten minutes on foot.','Nem tanto, uns dez minutos a pé.'],
    ['voce','Thanks! Can you recommend a good restaurant nearby?','Obrigado! Você pode me indicar um bom restaurante aqui perto?'],
    ['outro','There’s a great pizza place right next to the station.','Tem uma pizzaria ótima bem do lado da estação.']
  ]},
  imigracao: { titulo:'Na imigração do aeroporto', usa:['t19','t20','t21','t22'], falas:[
    ['outro','Good morning. Passport, please. What’s the purpose of your trip?','Bom dia. Passaporte, por favor. Qual é o motivo da sua viagem?'],
    ['voce','Tourism. I’m here on vacation.','Turismo. Estou de férias.'],
    ['outro','How long are you staying?','Quanto tempo vai ficar?'],
    ['voce','I’m staying for two weeks.','Vou ficar duas semanas.'],
    ['outro','And where are you staying?','E onde você vai ficar hospedado?'],
    ['voce','I’m staying at a hotel downtown.','Vou ficar num hotel no centro.'],
    ['outro','Do you have anything to declare?','Tem algo a declarar?'],
    ['voce','No, I don’t have anything to declare.','Não, não tenho nada a declarar.']
  ]},

  /* ---- negócios ---- */
  contato: { titulo:'Primeiro contato com um fornecedor', usa:['f1','f2','f3','f4','f5','f6'], falas:[
    ['outro','Hello, this is Mark from MedSupply. I got your message about the infusion pumps.','Olá, aqui é o Mark, da MedSupply. Recebi sua mensagem sobre as bombas de infusão.'],
    ['voce','Thank you for reaching out, Mark. I’d like to introduce myself. I’m Felipe, from Astton Medical.','Obrigado por entrar em contato, Mark. Eu gostaria de me apresentar. Sou o Felipe, da Astton Medical.'],
    ['outro','Nice to meet you, Felipe. We work with distributors all over Latin America.','Prazer, Felipe. Trabalhamos com distribuidores em toda a América Latina.'],
    ['voce','It’s a pleasure to meet you. How can I help you?','Muito prazer. Como posso ajudar?'],
    ['outro','We’d love to send you our catalog and price list.','Gostaríamos de te mandar nosso catálogo e a tabela de preços.'],
    ['voce','Great. Here’s my contact information. Let’s stay in touch.','Ótimo. Aqui está meu contato. Vamos manter contato.']
  ]},
  precos: { titulo:'Pedindo uma cotação', usa:['f7','f8','f10','f11'], falas:[
    ['outro','Thanks for your interest. Please find our best quote attached.','Obrigado pelo interesse. Segue nossa melhor cotação.'],
    ['voce','Thank you. Does the price include shipping?','Obrigado. O preço inclui frete?'],
    ['outro','Yes, it includes shipping to the port of Santos.','Sim, inclui o frete até o porto de Santos.'],
    ['voce','How long is this quote valid?','Qual é a validade dessa cotação?'],
    ['outro','Thirty days. After that, the price is subject to change.','Trinta dias. Depois disso, o preço está sujeito a alteração.'],
    ['voce','Understood. I’ll review it with my team and get back to you.','Entendido. Vou analisar com meu time e te retorno.']
  ]},
  negociacao: { titulo:'Negociando o preço', usa:['f13','f14','f15','f16','f18'], falas:[
    ['outro','Our price for the ten monitors is twelve thousand dollars.','Nosso preço pelos dez monitores é doze mil dólares.'],
    ['voce','That’s outside our budget. What can you offer?','Isso está fora do nosso orçamento. O que você pode oferecer?'],
    ['outro','We could do eleven thousand if you order before Friday.','Conseguimos fazer onze mil se o pedido sair até sexta.'],
    ['voce','Let’s meet in the middle: ten and a half.','Vamos encontrar um meio-termo: dez e meio.'],
    ['outro','Hmm, that’s tight. I need to check with my manager.','Hmm, está apertado. Preciso ver com meu gerente.'],
    ['voce','Of course. Can we reach an agreement by tomorrow?','Claro. Podemos chegar a um acordo até amanhã?'],
    ['outro','I just talked to him. Ten and a half works for us.','Acabei de falar com ele. Dez e meio funciona para nós.'],
    ['voce','Great, we have a deal!','Ótimo, fechado!']
  ]},
  logistica: { titulo:'Acompanhando um pedido', usa:['f19','f20','f23','f24'], falas:[
    ['voce','Hi, I’m writing about order 2231. When can we expect the shipment?','Oi, estou escrevendo sobre o pedido 2231. Quando podemos esperar o envio?'],
    ['outro','Good news: the order has been shipped from Germany.','Boa notícia: o pedido já foi enviado da Alemanha.'],
    ['voce','Great. And how long will it take?','Ótimo. E quanto tempo vai levar?'],
    ['outro','The delivery time is about two weeks.','O prazo de entrega é de umas duas semanas.'],
    ['voce','Perfect. I’ll check the status of the order next week.','Perfeito. Vou verificar o status do pedido semana que vem.']
  ]},
  email: { titulo:'Cobrando uma resposta', usa:['f25','f26','f27','f28','f29','f30'], falas:[
    ['voce','Hi Anna, I just wanted to follow up on our last email.','Oi Anna, só para dar um retorno sobre nosso último e-mail.'],
    ['outro','Hi Felipe, I apologize for the delay. We were at a conference all week.','Oi Felipe, peço desculpas pela demora. Estivemos numa conferência a semana toda.'],
    ['voce','No problem. Please find attached the updated invoice.','Sem problema. Segue em anexo a fatura atualizada.'],
    ['outro','Got it, thanks. I’ll get back to you by Friday.','Recebi, obrigada. Vou retornar até sexta.'],
    ['voce','Perfect. Please let me know if you have any questions. I look forward to hearing from you.','Perfeito. Qualquer dúvida, estou à disposição. Aguardo seu retorno.']
  ]},
  reunioes: { titulo:'Uma call com problema de conexão', usa:['f31','f32','f33','f34','f35','f36'], falas:[
    ['outro','Hi Felipe, can you hear me?','Oi Felipe, você está me ouvindo?'],
    ['voce','Yes, but the call is breaking up a little.','Sim, mas a ligação está cortando um pouco.'],
    ['outro','How about now? Is it better?','E agora? Melhorou?'],
    ['voce','Much better. Thanks for joining the meeting. Let’s get straight to the point.','Bem melhor. Obrigado por participar da reunião. Vamos direto ao ponto.'],
    ['outro','Sure. We can deliver the beds in April, maybe early May.','Claro. Conseguimos entregar as camas em abril, talvez no começo de maio.'],
    ['voce','Sorry, could you repeat that, please?','Desculpa, você pode repetir, por favor?'],
    ['outro','April. But I have another call now. Can we reschedule the rest?','Abril. Mas tenho outra call agora. Podemos remarcar o resto?'],
    ['voce','Of course. Shall we schedule a call for Monday?','Claro. Vamos marcar uma call para segunda?']
  ]},
  problemas: { titulo:'Peça que chegou com defeito', usa:['f37','f38','f39','f40','f41','f42'], falas:[
    ['outro','Felipe, the part arrived damaged. The screen is cracked.','Felipe, a peça chegou com defeito. A tela está trincada.'],
    ['voce','We’re sorry for the inconvenience. We’ll fix this as soon as possible.','Sentimos muito pelo inconveniente. Vamos resolver isso o quanto antes.'],
    ['outro','We really need it working this week.','A gente precisa dela funcionando esta semana.'],
    ['voce','We can send a replacement free of charge. It ships today.','Podemos enviar um substituto sem custo. Sai hoje.'],
    ['outro','OK, that helps. Thanks.','Certo, isso ajuda. Obrigado.'],
    ['voce','Thank you for your patience. We’ll make sure this doesn’t happen again.','Obrigado pela paciência. Vamos evitar que isso aconteça de novo.']
  ]},
  suporte: { titulo:'Chamado técnico', usa:['f44','f45','f46','f47'], falas:[
    ['outro','Hi, our ultrasound machine won’t turn on.','Oi, nosso aparelho de ultrassom não liga.'],
    ['voce','I’m sorry to hear that. We need more details about the issue. When did it start?','Sinto muito. Precisamos de mais informações sobre o problema. Quando começou?'],
    ['outro','This morning. Is it still covered?','Hoje de manhã. Ainda está coberto?'],
    ['voce','Yes, the equipment is under warranty. I’ll forward this to our technical team.','Sim, o equipamento está na garantia. Vou encaminhar para o time técnico.'],
    ['outro','Can someone come here in person?','Alguém pode vir aqui pessoalmente?'],
    ['voce','Sure. Let’s schedule a technical visit for tomorrow.','Claro. Vamos agendar uma visita técnica para amanhã.']
  ]},
  feiras: { titulo:'Combinando encontro na feira', usa:['f49','f50','f51','f52'], falas:[
    ['outro','Felipe! Are you coming to Medica in Düsseldorf this year?','Felipe! Você vem para a Medica em Düsseldorf este ano?'],
    ['voce','Yes, my flight is already confirmed. Shall we meet at the trade show?','Sim, minha passagem já está confirmada. Vamos nos encontrar na feira?'],
    ['outro','Definitely. We’re going to showcase our new products there.','Com certeza. Vamos apresentar nossos novos produtos lá.'],
    ['voce','Great. Which booth is yours?','Ótimo. Qual estande é o seu?'],
    ['outro','Hall 10, booth B22.','Pavilhão 10, estande B22.'],
    ['voce','Perfect. We can set up an in-person meeting on Tuesday.','Perfeito. Podemos marcar uma reunião presencial na terça.']
  ]},

  /* ---- games e tecnologia ---- */
  queue: { titulo:'Chamando alguém para jogar', usa:['s1','s2','s3','s4','s5','s6'], falas:[
    ['voce','Hey, wanna queue up?','E aí, bora jogar uma partida?'],
    ['outro','Sure! What’s your rank?','Bora! Qual sua patente?'],
    ['voce','Gold. I’m adding you as a friend.','Ouro. To adicionando você.'],
    ['outro','Got it. Wanna run it as a duo?','Recebi. Vamos de duo?'],
    ['voce','Yeah. Give me a sec, I’m joining the call.','Vamos. Pera aí, to entrando na call.'],
    ['outro','Cool, I’m in the lobby.','Beleza, to no lobby.'],
    ['voce','I’m ready, go ahead and start.','To pronto, pode começar.']
  ]},
  partida: { titulo:'No meio da partida', usa:['s7','s8','s9','s10','s11','s12'], falas:[
    ['outro','Watch out, behind you!','Cuidado, atrás de você!'],
    ['voce','Thanks! Cover me, I’m out of ammo.','Valeu! Me dá cobertura, to sem munição.'],
    ['outro','Covering you! Go reload.','To te cobrindo! Vai recarregar.'],
    ['voce','Nice shot!','Bom tiro!'],
    ['outro','Thanks. Let’s rotate to the other side.','Valeu. Vamos para o outro lado do mapa.'],
    ['voce','Sorry, my ping is really high right now.','Foi mal, meu ping tá alto agora.']
  ]},
  pc: { titulo:'Montando o PC novo', usa:['s19','s20','s21','s22','s23'], falas:[
    ['outro','Hey, how’s the new setup going?','E aí, como tá o setup novo?'],
    ['voce','I’m building a new PC this month.','To montando um PC novo este mês.'],
    ['outro','Nice! What GPU are you running?','Massa! Qual placa de vídeo você tá usando?'],
    ['voce','An RTX 4070. Is the power supply compatible with this GPU?','Uma RTX 4070. A fonte é compatível com essa placa?'],
    ['outro','Depends. How many watts is it?','Depende. Quantos watts ela tem?'],
    ['voce','Six hundred and fifty. And I think I need more RAM.','Seiscentos e cinquenta. E acho que preciso de mais memória RAM.'],
    ['outro','Sounds good. What about the processor?','Faz sentido. E o processador?'],
    ['voce','I’m going to upgrade the CPU next.','Vou fazer o upgrade do processador depois.']
  ]},
  streams: { titulo:'Assistindo uma live', usa:['s31','s32','s33','s34','s35','s36'], falas:[
    ['outro','Who’s live right now?','Quem tá na live agora?'],
    ['voce','I’m watching the match right now, on Twitch.','To assistindo a partida agora, na Twitch.'],
    ['outro','Oh, I saw that last play!','Ah, eu vi aquela última jogada!'],
    ['voce','That was insane! What game do you recommend I try next?','Aquilo foi incrível! Qual jogo você recomenda eu testar agora?'],
    ['outro','Try Valorant. And leave a like on the stream!','Testa o Valorant. E deixa o like na live!'],
    ['voce','Sure. I’ll subscribe to the channel too.','Pode deixar. Vou me inscrever no canal também.']
  ]},
  despedida: { titulo:'Fim de jogo', usa:['s37','s38','s39','s40','s41','s42'], falas:[
    ['outro','Good game, well played!','Boa partida, jogou bem!'],
    ['voce','Good game! Thanks for the help back there.','Boa partida! Valeu pela ajuda lá atrás.'],
    ['outro','No worries. Sorry I missed that last shot.','Tranquilo. Foi mal ter errado aquele último tiro.'],
    ['voce','My bad too. One more round?','Foi mal eu também. Vamos de novo?'],
    ['outro','Can’t, I have to go now.','Não dá, tenho que sair agora.'],
    ['voce','Alright, see you later. Catch you next time!','Beleza, a gente se vê depois. Até a próxima!']
  ]},
  times: { titulo:'Montando um time para o campeonato', usa:['s43','s44','s45','s46','s47','s48'], falas:[
    ['voce','Wanna form a team for the tournament?','Vamos formar um time para o campeonato?'],
    ['outro','Sure! I usually play support.','Bora! Eu costumo jogar de suporte.'],
    ['voce','Nice. Who’s going to be the captain?','Boa. Quem vai ser o capitão?'],
    ['outro','You can be the captain. What’s your role on the team?','Pode ser você. Qual sua função no time?'],
    ['voce','Carry. Let’s practice before the tournament.','Carry. Vamos treinar antes do campeonato.'],
    ['outro','Two weeks later… We qualified!','Duas semanas depois… A gente se classificou!'],
    ['voce','Awesome! Last year we lost by a close margin.','Demais! Ano passado a gente perdeu por pouco.']
  ]},
  software: { titulo:'O jogo travando', usa:['s49','s50','s51','s52','s53','s54'], falas:[
    ['voce','The game keeps freezing on this level.','O jogo tá travando nessa fase.'],
    ['outro','Did you update your graphics drivers?','Você atualizou os drivers de vídeo?'],
    ['voce','Not yet. I need to update the drivers.','Ainda não. Preciso atualizar os drivers.'],
    ['outro','Also, what settings are you on?','E em qual configuração você tá?'],
    ['voce','Let me check my settings real quick. Ultra, everything maxed out.','Deixa eu verificar minhas configurações. Ultra, tudo no máximo.'],
    ['outro','Try medium. If it still freezes, reinstall it.','Testa no médio. Se continuar travando, reinstala.'],
    ['voce','OK, if not, I’m going to reinstall the game.','Beleza, se não der, vou reinstalar o jogo.'],
    ['outro','Did medium work?','O médio funcionou?'],
    ['voce','Yes! That fixed the issue, thanks!','Sim! Isso resolveu o problema, valeu!']
  ]},
  historia: { titulo:'Um documentário sobre o Egito', usa:['s56','s57','s58','s60'], falas:[
    ['outro','What are you watching?','O que você tá assistindo?'],
    ['voce','A documentary about ancient Egypt. This civilization existed thousands of years ago.','Um documentário sobre o Egito antigo. Essa civilização existiu há milhares de anos.'],
    ['outro','Cool. And the pharaoh’s tomb, who discovered this first?','Legal. E a tumba do faraó, quem descobriu isso primeiro?'],
    ['voce','Howard Carter, in 1922. It was a turning point in history for archaeology.','Howard Carter, em 1922. Foi um marco na história da arqueologia.'],
    ['outro','Next, let’s watch one about the Roman Empire.','Depois, bora ver um sobre o Império Romano.'],
    ['voce','Good idea. Let’s go back in time again!','Boa ideia. Vamos voltar no tempo de novo!']
  ]}
};
