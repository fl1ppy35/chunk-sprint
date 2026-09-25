/* Baralho "Viagem e dia a dia". Módulo comum a todos os perfis: sobrevivência em viagem internacional.
   Cada chunk: [id, categoria, português, inglês, frase de exemplo].
   O id NUNCA deve mudar nem ser reaproveitado: é nele que o progresso de cada pessoa fica gravado.
   Pode acrescentar, reordenar ou corrigir texto à vontade sem perder histórico. */
window.CS_DECKS = window.CS_DECKS || {};
CS_DECKS.viagem = {
  name: 'Viagem e dia a dia',
  cats: [
  {key:'diaadia', label:'Conversas do Dia a Dia'},
  {key:'compras2', label:'Compras e Serviços'},
  {key:'informacoes', label:'Pedindo Informações'},
  {key:'imigracao', label:'Aeroporto e Imigração'}
  ],
  chunks: [
  ['t1','diaadia','Como você está?','How are you doing?','Hi, how are you doing today?'],
  ['t2','diaadia','Prazer em conhecê-lo(a)','Nice to meet you','Nice to meet you, I’m Felipe.'],
  ['t3','diaadia','Desculpa, não entendi','Sorry, I didn’t catch that','Sorry, I didn’t catch that, could you say it again?'],
  ['t4','diaadia','Você fala português?','Do you speak Portuguese?','Excuse me, do you speak Portuguese?'],
  ['t5','diaadia','Pode falar mais devagar, por favor?','Could you speak more slowly, please?','Could you speak more slowly, please? I’m still learning.'],
  ['t6','diaadia','Tenha um bom dia!','Have a great day!','Thanks, you too. Have a great day!'],
  ['t7','compras2','Quanto custa isso?','How much does this cost?','Excuse me, how much does this cost?'],
  ['t8','compras2','Vocês aceitam cartão?','Do you accept card?','Do you accept card, or only cash?'],
  ['t9','compras2','Onde fica o caixa?','Where’s the checkout?','Where’s the checkout, please?'],
  ['t10','compras2','Eu queria trocar isso','I’d like to exchange this','I’d like to exchange this for a different size.'],
  ['t11','compras2','Tem outra cor ou tamanho?','Do you have another color or size?','Do you have this in another size?'],
  ['t12','compras2','Pode me dar o recibo?','Can I get a receipt?','Can I get a receipt, please?'],
  ['t13','informacoes','Onde fica o banheiro?','Where’s the restroom?','Excuse me, where’s the restroom?'],
  ['t14','informacoes','Como chego até ali?','How do I get there?','How do I get to the train station from here?'],
  ['t15','informacoes','É longe daqui?','Is it far from here?','Is it far from here, or can I walk?'],
  ['t16','informacoes','Você pode me indicar um bom restaurante?','Can you recommend a good restaurant?','Can you recommend a good restaurant nearby?'],
  ['t17','informacoes','Que horas isso abre ou fecha?','What time does it open or close?','What time does the museum close?'],
  ['t18','informacoes','Estou perdido(a)','I’m lost','Sorry to bother you, I think I’m lost.'],
  ['t19','imigracao','Qual é o motivo da sua viagem?','What’s the purpose of your trip?','The purpose of my trip is tourism.'],
  ['t20','imigracao','Quanto tempo vai ficar?','How long are you staying?','I’m staying for two weeks.'],
  ['t21','imigracao','Onde você vai ficar hospedado?','Where are you staying?','I’m staying at a hotel downtown.'],
  ['t22','imigracao','Tem algo a declarar?','Do you have anything to declare?','No, I don’t have anything to declare.'],
  ['t23','imigracao','Minha mala não chegou','My luggage didn’t arrive','Excuse me, my luggage didn’t arrive.'],
  ['t24','imigracao','Onde fica a esteira de bagagem?','Where’s the baggage claim?','Where’s the baggage claim for this flight?']
  ]
};
