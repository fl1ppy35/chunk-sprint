/* Baralho "Viagem e dia a dia". Módulo comum a todos os perfis: sobrevivência em viagem internacional.
   Cada chunk: [id, categoria, português, inglês, frase de exemplo].
   O id NUNCA deve mudar nem ser reaproveitado: é nele que o progresso de cada pessoa fica gravado.
   Pode acrescentar, reordenar ou corrigir texto à vontade sem perder histórico. */
window.CS_DECKS = window.CS_DECKS || {};
CS_DECKS.viagem = {
  name: 'Viagem e dia a dia',
  cats: [
  {key:'diaadia', label:'Conversas do Dia a Dia', level:'A1', cando:'Cumprimentar, se apresentar e pedir para falarem mais devagar'},
  {key:'compras2', label:'Compras e Serviços', level:'A1', cando:'Perguntar preço e tamanho, pagar e pedir o recibo numa loja'},
  {key:'informacoes', label:'Pedindo Informações', level:'A1', cando:'Pedir direção e indicação de lugar na rua'},
  {key:'imigracao', label:'Aeroporto e Imigração', level:'A2', cando:'Passar pela imigração e resolver problema de bagagem'}
  ],
  chunks: [
  ['t1','diaadia','Como você está?','How are you doing?','Hi, how are you doing today?', [
      ["Hey Mark, how are you doing?", "Oi Mark, como você está?"],
      ["How are you doing after the long flight?", "Como você está depois do voo longo?"]
  ]],
  ['t2','diaadia','Prazer em conhecê-lo(a)','Nice to meet you','Nice to meet you, I’m Felipe.', [
      ["Nice to meet you, this is my son Arthur.", "Prazer em te conhecer, esse é meu filho Arthur."],
      ["Nice to meet you too, Sarah.", "Prazer em te conhecer também, Sarah."]
  ]],
  ['t3','diaadia','Desculpa, não entendi','Sorry, I didn’t catch that','Sorry, I didn’t catch that, could you say it again?', [
      ["Sorry, I didn’t catch that. What’s your name?", "Desculpa, não entendi. Qual é o seu nome?"],
      ["Sorry, I didn’t catch that last part.", "Desculpa, não entendi essa última parte."]
  ]],
  ['t4','diaadia','Você fala português?','Do you speak Portuguese?','Excuse me, do you speak Portuguese?', [
      ["Does anyone here speak Portuguese?", "Alguém aqui fala português?"],
      ["Hi, do you speak Portuguese or Spanish?", "Oi, você fala português ou espanhol?"]
  ]],
  ['t5','diaadia','Pode falar mais devagar, por favor?','Could you speak more slowly, please?','Could you speak more slowly, please? I’m still learning.', [
      ["Could you speak more slowly, please? My English isn’t great.", "Pode falar mais devagar, por favor? Meu inglês não é muito bom."],
      ["Sorry, could you speak more slowly, please?", "Desculpa, pode falar mais devagar, por favor?"]
  ]],
  ['t6','diaadia','Tenha um bom dia!','Have a great day!','Thanks, you too. Have a great day!', [
      ["Thanks for your help. Have a great day!", "Obrigado pela ajuda. Tenha um bom dia!"],
      ["See you tomorrow, and have a great day!", "Até amanhã, e tenha um bom dia!"]
  ]],
  ['t7','compras2','Quanto custa isso?','How much does this cost?','Excuse me, how much does this cost?', [
      ["How much does this cost in dollars?", "Quanto custa isso em dólar?"],
      ["I love this jacket. How much does this cost?", "Adorei essa jaqueta. Quanto custa?"]
  ]],
  ['t8','compras2','Vocês aceitam cartão?','Do you take cards?','Do you take cards, or is it cash only?', [
      ["Hi, do you take cards here?", "Oi, vocês aceitam cartão aqui?"],
      ["Do you take cards for the taxi ride?", "Vocês aceitam cartão na corrida de táxi?"]
  ]],
  ['t9','compras2','Onde fica o caixa?','Where’s the checkout?','Where’s the checkout, please?', [
      ["Sorry, where’s the checkout on this floor?", "Desculpa, onde fica o caixa neste andar?"],
      ["I’m ready to pay. Where’s the checkout?", "Já vou pagar. Onde fica o caixa?"]
  ]],
  ['t10','compras2','Eu queria trocar isso','I’d like to exchange this','I’d like to exchange this for a different size.', [
      ["I’d like to exchange this for a smaller one.", "Eu queria trocar isso por um menor."],
      ["Hi, I’d like to exchange this, it doesn’t work.", "Oi, eu queria trocar isso, não está funcionando."]
  ]],
  ['t11','compras2','Tem outra cor ou tamanho?','Do you have another color or size?','Excuse me, do you have another color or size?', [
      ["I like these shoes. Do you have another color or size?", "Gostei desse tênis. Tem outra cor ou tamanho?"],
      ["This shirt is too big. Do you have another color or size?", "Essa camisa ficou grande. Tem outra cor ou tamanho?"]
  ]],
  ['t12','compras2','Pode me dar o recibo?','Can I get a receipt?','Can I get a receipt, please?', [
      ["Can I get a receipt for the hotel?", "Pode me dar o recibo do hotel?"],
      ["Thanks. Can I get a receipt by email?", "Obrigado. Pode me mandar o recibo por e-mail?"]
  ]],
  ['t13','informacoes','Onde fica o banheiro?','Where’s the restroom?','Excuse me, where’s the restroom?', [
      ["Sorry, where’s the restroom on this floor?", "Desculpa, onde fica o banheiro neste andar?"],
      ["Where’s the restroom in this restaurant?", "Onde fica o banheiro deste restaurante?"]
  ]],
  ['t14','informacoes','Como chego até ali?','How do I get there?','I need the train station. How do I get there?', [
      ["I want to see the museum. How do I get there?", "Quero ver o museu. Como chego lá?"],
      ["How do I get there by subway?", "Como chego lá de metrô?"]
  ]],
  ['t15','informacoes','É longe daqui?','Is it far from here?','Is it far from here, or can I walk?', [
      ["Is it far from here to the beach?", "É longe daqui até a praia?"],
      ["The airport? Is it far from here?", "O aeroporto? É longe daqui?"]
  ]],
  ['t16','informacoes','Você pode me indicar um bom restaurante?','Can you recommend a good restaurant?','Can you recommend a good restaurant nearby?', [
      ["Can you recommend a good restaurant for dinner?", "Você pode me indicar um bom restaurante para jantar?"],
      ["Can you recommend a good restaurant near the hotel?", "Você pode me indicar um bom restaurante perto do hotel?"]
  ]],
  ['t17','informacoes','Que horas isso abre ou fecha?','What time does it open or close?','What time does it open or close on Sundays?', [
      ["What time does it open or close on Saturdays?", "Que horas abre ou fecha no sábado?"],
      ["The pharmacy? What time does it open or close?", "A farmácia? Que horas abre ou fecha?"]
  ]],
  ['t18','informacoes','Estou perdido(a)','I’m lost','Sorry to bother you, I think I’m lost.', [
      ["Excuse me, I’m lost. Where’s Main Street?", "Com licença, estou perdido. Onde fica a Main Street?"],
      ["I’m lost, can you show me on the map?", "Estou perdido, pode me mostrar no mapa?"]
  ]],
  ['t19','imigracao','Qual é o motivo da sua viagem?','What’s the purpose of your trip?','The purpose of my trip is tourism.', [
      ["The purpose of my trip is business.", "O motivo da minha viagem é negócios."],
      ["The purpose of my trip is to visit my family.", "O motivo da minha viagem é visitar minha família."]
  ]],
  ['t20','imigracao','Quanto tempo vai ficar?','How long are you staying?','I’m staying for two weeks.', [
      ["I’m staying for ten days.", "Vou ficar dez dias."],
      ["I’m staying for one month, until July.", "Vou ficar um mês, até julho."]
  ]],
  ['t21','imigracao','Onde você vai ficar hospedado?','Where are you staying?','I’m staying at a hotel downtown.', [
      ["I’m staying at my friend’s house in Miami.", "Vou ficar na casa de um amigo em Miami."],
      ["I’m staying at an Airbnb near the beach.", "Vou ficar num Airbnb perto da praia."]
  ]],
  ['t22','imigracao','Tem algo a declarar?','Do you have anything to declare?','No, I don’t have anything to declare.', [
      ["Yes, I have some food to declare.", "Sim, tenho um pouco de comida para declarar."],
      ["No, I don’t have anything to declare, just clothes.", "Não, não tenho nada a declarar, só roupa."]
  ]],
  ['t23','imigracao','Minha mala não chegou','My luggage didn’t arrive','Excuse me, my luggage didn’t arrive.', [
      ["My luggage didn’t arrive on the flight from Miami.", "Minha mala não chegou no voo de Miami."],
      ["Hi, my luggage didn’t arrive. Who can help me?", "Oi, minha mala não chegou. Quem pode me ajudar?"]
  ]],
  ['t24','imigracao','Onde fica a esteira de bagagem?','Where’s the baggage claim?','Where’s the baggage claim for this flight?', [
      ["Excuse me, where’s the baggage claim for international flights?", "Com licença, onde fica a esteira dos voos internacionais?"],
      ["Where’s the baggage claim for the flight from São Paulo?", "Onde fica a esteira do voo de São Paulo?"]
  ]]
  ]
};
