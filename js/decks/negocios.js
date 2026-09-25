/* Baralho "Negócios". Vendas, cotação, importação e suporte de equipamento médico (Astton Medical).
   Cada chunk: [id, categoria, português, inglês, frase de exemplo].
   O id NUNCA deve mudar nem ser reaproveitado: é nele que o progresso de cada pessoa fica gravado.
   Pode acrescentar, reordenar ou corrigir texto à vontade sem perder histórico. */
window.CS_DECKS = window.CS_DECKS || {};
CS_DECKS.negocios = {
  name: 'Negócios',
  cats: [
  {key:'contato', label:'Primeiro Contato', level:'A2', cando:'Se apresentar a um cliente ou fornecedor estrangeiro'},
  {key:'precos', label:'Cotações e Preços', level:'B1', cando:'Pedir e discutir uma cotação'},
  {key:'negociacao', label:'Negociação', level:'B1', cando:'Negociar preço e fechar um acordo'},
  {key:'logistica', label:'Pedidos e Logística', level:'B1', cando:'Acompanhar pedido, prazo e entrega'},
  {key:'email', label:'E-mails e Follow-up', level:'A2', cando:'Escrever e cobrar retorno por e-mail'},
  {key:'reunioes', label:'Telefonemas e Reuniões', level:'A2', cando:'Conduzir uma call e lidar com falha de conexão'},
  {key:'problemas', label:'Problemas e Soluções', level:'B1', cando:'Contornar reclamação de peça com defeito'},
  {key:'suporte', label:'Atendimento e Suporte', level:'B1', cando:'Atender um chamado técnico e agendar visita'},
  {key:'feiras', label:'Viagens e Feiras', level:'A2', cando:'Combinar um encontro numa feira internacional'}
  ],
  chunks: [
  ['f1','contato','Eu gostaria de me apresentar','I’d like to introduce myself','Hi, I’d like to introduce myself. I’m Felipe, from Astton Medical.', [
      ["Good morning, everyone. I’d like to introduce myself.", "Bom dia a todos. Eu gostaria de me apresentar."],
      ["Before we start, I’d like to introduce myself.", "Antes de começar, eu gostaria de me apresentar."]
  ]],
  ['f2','contato','Muito prazer em conhecê-lo','It’s a pleasure to meet you','It’s a pleasure to meet you, thanks for reaching out.', [
      ["It’s a pleasure to meet you, Mr. Weber.", "Muito prazer em conhecê-lo, Sr. Weber."],
      ["It’s a pleasure to meet you after all these emails.", "Muito prazer em te conhecer depois de tantos e-mails."]
  ]],
  ['f3','contato','Como posso ajudar?','How can I help you?','How can I help you today?', [
      ["Good afternoon, Astton Medical. How can I help you?", "Boa tarde, Astton Medical. Como posso ajudar?"],
      ["Hi Anna, how can I help you with the order?", "Oi Anna, como posso ajudar com o pedido?"]
  ]],
  ['f4','contato','Obrigado por entrar em contato','Thank you for reaching out','Thank you for reaching out about our ventilators.', [
      ["Thank you for reaching out about the infusion pumps.", "Obrigado por entrar em contato sobre as bombas de infusão."],
      ["Thank you for reaching out, I’ll send you our catalog.", "Obrigado por entrar em contato, vou te mandar nosso catálogo."]
  ]],
  ['f5','contato','Vamos manter contato','Let’s stay in touch','Let’s stay in touch for future orders.', [
      ["Great talking to you. Let’s stay in touch.", "Foi ótimo falar com você. Vamos manter contato."],
      ["Let’s stay in touch after the trade show.", "Vamos manter contato depois da feira."]
  ]],
  ['f6','contato','Aqui está meu contato','Here’s my contact information','Here’s my contact information in case you need anything.', [
      ["Here’s my contact information for the service team.", "Aqui está meu contato para o time de serviço."],
      ["Here’s my contact information, my WhatsApp is on the card.", "Aqui está meu contato, meu WhatsApp está no cartão."]
  ]],
  ['f7','precos','Segue nossa melhor cotação','Please find our best quote attached','Please find our best quote attached for the 10 units.', [
      ["Please find our best quote attached for the ECG machines.", "Segue em anexo nossa melhor cotação para os eletrocardiógrafos."],
      ["As requested, please find our best quote attached.", "Conforme pedido, segue em anexo nossa melhor cotação."]
  ]],
  ['f8','precos','O preço inclui frete?','Does the price include shipping?','Does the price include shipping to Asunción?', [
      ["Does the price include shipping to Brazil?", "O preço inclui frete para o Brasil?"],
      ["Does the price include shipping and insurance?", "O preço inclui frete e seguro?"]
  ]],
  ['f9','precos','Podemos oferecer um desconto','We can offer a discount','We can offer a discount of 5% for bulk orders.', [
      ["We can offer a discount if you pay upfront.", "Podemos oferecer um desconto se o pagamento for à vista."],
      ["We can offer a discount on the calibration service.", "Podemos oferecer um desconto no serviço de calibração."]
  ]],
  ['f10','precos','Qual é a validade dessa cotação?','How long is this quote valid?','How long is this quote valid for?', [
      ["How long is this quote valid for the monitors?", "Qual é a validade dessa cotação dos monitores?"],
      ["Thanks for the numbers. How long is this quote valid?", "Obrigado pelos valores. Qual é a validade dessa cotação?"]
  ]],
  ['f11','precos','O preço está sujeito a alteração','The price is subject to change','The price is subject to change without notice.', [
      ["The price is subject to change after this month.", "O preço está sujeito a alteração depois deste mês."],
      ["Because of the exchange rate, the price is subject to change.", "Por causa do câmbio, o preço está sujeito a alteração."]
  ]],
  ['f12','precos','Esse é o nosso melhor preço','This is our best price','This is our best price for this quantity.', [
      ["This is our best price for the Holter monitors.", "Esse é o nosso melhor preço para os Holters."],
      ["I’m sorry, but this is our best price.", "Sinto muito, mas esse é o nosso melhor preço."]
  ]],
  ['f13','negociacao','Podemos chegar a um acordo?','Can we reach an agreement?','Can we reach an agreement on the price?', [
      ["Can we reach an agreement on the delivery date?", "Podemos chegar a um acordo sobre a data de entrega?"],
      ["Can we reach an agreement before the end of the month?", "Podemos chegar a um acordo antes do fim do mês?"]
  ]],
  ['f14','negociacao','Isso está fora do nosso orçamento','That’s outside our budget','I’m sorry, but that’s outside our budget right now.', [
      ["Twenty thousand dollars? That’s outside our budget.", "Vinte mil dólares? Isso está fora do nosso orçamento."],
      ["The new ultrasound is great, but that’s outside our budget.", "O ultrassom novo é ótimo, mas está fora do nosso orçamento."]
  ]],
  ['f15','negociacao','O que você pode oferecer?','What can you offer?','What can you offer in terms of payment terms?', [
      ["What can you offer for an order of 50 units?", "O que você pode oferecer num pedido de 50 unidades?"],
      ["What can you offer in terms of warranty?", "O que você pode oferecer em termos de garantia?"]
  ]],
  ['f16','negociacao','Vamos encontrar um meio-termo','Let’s meet in the middle','Let’s meet in the middle on the price.', [
      ["Let’s meet in the middle on the shipping cost.", "Vamos encontrar um meio-termo no custo do frete."],
      ["You want 10%, we offer 4%. Let’s meet in the middle.", "Você quer 10%, a gente oferece 4%. Vamos encontrar um meio-termo."]
  ]],
  ['f17','negociacao','Preciso pensar sobre isso','I need to think it over','I need to think it over and get back to you.', [
      ["Thanks for the offer. I need to think it over.", "Obrigado pela proposta. Preciso pensar sobre isso."],
      ["I need to think it over with my partner first.", "Preciso pensar sobre isso com meu sócio primeiro."]
  ]],
  ['f18','negociacao','Fechado!','We have a deal','Great, we have a deal then.', [
      ["Seven percent off and free shipping? We have a deal.", "Sete por cento de desconto e frete grátis? Fechado."],
      ["Perfect, we have a deal. I’ll send the purchase order today.", "Perfeito, fechado. Vou mandar o pedido de compra hoje."]
  ]],
  ['f19','logistica','Quando podemos esperar o envio?','When can we expect the shipment?','When can we expect the shipment to arrive?', [
      ["When can we expect the shipment of spare parts?", "Quando podemos esperar o envio das peças de reposição?"],
      ["When can we expect the shipment to leave the factory?", "Quando podemos esperar que o envio saia da fábrica?"]
  ]],
  ['f20','logistica','O pedido já foi enviado','The order has been shipped','The order has been shipped from Germany.', [
      ["Good news: the order has been shipped by air.", "Boa notícia: o pedido já foi enviado por avião."],
      ["The order has been shipped, here’s the tracking number.", "O pedido já foi enviado, aqui está o número de rastreio."]
  ]],
  ['f21','logistica','Precisamos confirmar o endereço de entrega','We need to confirm the delivery address','We need to confirm the delivery address before shipping.', [
      ["We need to confirm the delivery address for the hospital.", "Precisamos confirmar o endereço de entrega do hospital."],
      ["Before we ship, we need to confirm the delivery address.", "Antes de enviar, precisamos confirmar o endereço de entrega."]
  ]],
  ['f22','logistica','Está fora de estoque no momento','It’s currently out of stock','It’s currently out of stock, but we expect more next week.', [
      ["That sensor? It’s currently out of stock.", "Esse sensor? Está fora de estoque no momento."],
      ["I’m sorry, it’s currently out of stock in Brazil.", "Sinto muito, está fora de estoque no Brasil no momento."]
  ]],
  ['f23','logistica','O prazo de entrega é de duas semanas','The delivery time is two weeks','The delivery time is two weeks after payment.', [
      ["The delivery time is two weeks from the order date.", "O prazo de entrega é de duas semanas a partir do pedido."],
      ["For São Paulo, the delivery time is two weeks.", "Para São Paulo, o prazo de entrega é de duas semanas."]
  ]],
  ['f24','logistica','Vou verificar o status do pedido','I’ll check the status of the order','I’ll check the status of the order and let you know.', [
      ["I’ll check the status of the order with our supplier.", "Vou verificar o status do pedido com nosso fornecedor."],
      ["Give me a minute, I’ll check the status of the order.", "Me dá um minuto, vou verificar o status do pedido."]
  ]],
  ['f25','email','Só para dar um retorno sobre...','I just wanted to follow up on...','I just wanted to follow up on our last email.', [
      ["I just wanted to follow up on the quote I sent Monday.", "Só queria dar um retorno sobre a cotação que mandei segunda."],
      ["I just wanted to follow up on our call yesterday.", "Só queria dar um retorno sobre a nossa call de ontem."]
  ]],
  ['f26','email','Aguardo seu retorno','I look forward to hearing from you','I look forward to hearing from you soon.', [
      ["Thanks again for your time. I look forward to hearing from you.", "Obrigado mais uma vez pelo seu tempo. Aguardo seu retorno."],
      ["I look forward to hearing from you about the new prices.", "Aguardo seu retorno sobre os novos preços."]
  ]],
  ['f27','email','Peço desculpas pela demora','I apologize for the delay','I apologize for the delay in my response.', [
      ["I apologize for the delay in sending the invoice.", "Peço desculpas pela demora no envio da fatura."],
      ["I apologize for the delay, we had a holiday here.", "Peço desculpas pela demora, tivemos um feriado aqui."]
  ]],
  ['f28','email','Qualquer dúvida, estou à disposição','Please let me know if you have any questions','Please let me know if you have any questions.', [
      ["Here’s the manual. Please let me know if you have any questions.", "Aqui está o manual. Qualquer dúvida, estou à disposição."],
      ["Please let me know if you have any questions about the contract.", "Qualquer dúvida sobre o contrato, estou à disposição."]
  ]],
  ['f29','email','Vou retornar até sexta','I’ll get back to you by Friday','I’ll get back to you by Friday.', [
      ["Let me talk to my team. I’ll get back to you by Friday.", "Vou falar com meu time. Retorno até sexta."],
      ["I’ll get back to you by Friday with the final price.", "Vou retornar até sexta com o preço final."]
  ]],
  ['f30','email','Segue em anexo','Please find attached','Please find attached the updated invoice.', [
      ["Please find attached the calibration certificate.", "Segue em anexo o certificado de calibração."],
      ["Please find attached our product catalog.", "Segue em anexo nosso catálogo de produtos."]
  ]],
  ['f31','reunioes','Vamos marcar uma call?','Shall we schedule a call?','Shall we schedule a call to go over the details?', [
      ["Shall we schedule a call for Tuesday morning?", "Vamos marcar uma call para terça de manhã?"],
      ["Shall we schedule a call with your engineer?", "Vamos marcar uma call com o seu engenheiro?"]
  ]],
  ['f32','reunioes','Você pode repetir, por favor?','Could you repeat that, please?','Sorry, could you repeat that, please?', [
      ["Could you repeat that, please? The last number, I mean.", "Você pode repetir, por favor? O último número, no caso."],
      ["I missed the price. Could you repeat that, please?", "Perdi o preço. Você pode repetir, por favor?"]
  ]],
  ['f33','reunioes','A ligação está cortando','The call is breaking up','Sorry, the call is breaking up a little.', [
      ["I can’t hear you well, the call is breaking up.", "Não estou te ouvindo bem, a ligação está cortando."],
      ["The call is breaking up. Can I call you back?", "A ligação está cortando. Posso te ligar de volta?"]
  ]],
  ['f34','reunioes','Vamos direto ao ponto','Let’s get straight to the point','Let’s get straight to the point: pricing.', [
      ["We don’t have much time, so let’s get straight to the point.", "Não temos muito tempo, então vamos direto ao ponto."],
      ["Let’s get straight to the point: the delivery date.", "Vamos direto ao ponto: a data de entrega."]
  ]],
  ['f35','reunioes','Obrigado por participar da reunião','Thanks for joining the meeting','Thanks for joining the meeting today.', [
      ["Thanks for joining the meeting so early.", "Obrigado por participar da reunião tão cedo."],
      ["Hi everyone, thanks for joining the meeting.", "Oi a todos, obrigado por participar da reunião."]
  ]],
  ['f36','reunioes','Podemos remarcar?','Can we reschedule?','Can we reschedule for next week?', [
      ["Something came up. Can we reschedule?", "Surgiu um imprevisto. Podemos remarcar?"],
      ["Can we reschedule for Thursday afternoon?", "Podemos remarcar para quinta à tarde?"]
  ]],
  ['f37','problemas','Sentimos muito pelo inconveniente','We’re sorry for the inconvenience','We’re sorry for the inconvenience this caused.', [
      ["We’re sorry for the inconvenience with the delivery.", "Sentimos muito pelo inconveniente com a entrega."],
      ["We’re sorry for the inconvenience. A new unit is on the way.", "Sentimos muito pelo inconveniente. Uma unidade nova está a caminho."]
  ]],
  ['f38','problemas','Vamos resolver isso o quanto antes','We’ll fix this as soon as possible','We’ll fix this as soon as possible.', [
      ["Don’t worry, we’ll fix this as soon as possible.", "Não se preocupe, vamos resolver isso o quanto antes."],
      ["We’ll fix this as soon as possible, probably tomorrow.", "Vamos resolver isso o quanto antes, provavelmente amanhã."]
  ]],
  ['f39','problemas','A peça chegou com defeito','The part arrived damaged','The part arrived damaged during shipping.', [
      ["The part arrived damaged, the screen is cracked.", "A peça chegou com defeito, a tela está trincada."],
      ["I’m sending photos because the part arrived damaged.", "Estou mandando fotos porque a peça chegou com defeito."]
  ]],
  ['f40','problemas','Podemos enviar um substituto','We can send a replacement','We can send a replacement free of charge.', [
      ["We can send a replacement by the end of the week.", "Podemos enviar um substituto até o fim da semana."],
      ["If the battery fails, we can send a replacement.", "Se a bateria falhar, podemos enviar uma substituta."]
  ]],
  ['f41','problemas','Obrigado pela paciência','Thank you for your patience','Thank you for your patience while we sort this out.', [
      ["Thank you for your patience, the part is on its way.", "Obrigado pela paciência, a peça está a caminho."],
      ["Thank you for your patience during the repair.", "Obrigado pela paciência durante o conserto."]
  ]],
  ['f42','problemas','Vamos evitar que isso aconteça de novo','We’ll make sure this doesn’t happen again','We’ll make sure this doesn’t happen again.', [
      ["We changed our packaging. We’ll make sure this doesn’t happen again.", "Mudamos a embalagem. Vamos evitar que isso aconteça de novo."],
      ["I understand, and we’ll make sure this doesn’t happen again.", "Entendo, e vamos evitar que isso aconteça de novo."]
  ]],
  ['f43','suporte','Como podemos melhorar nosso atendimento?','How can we improve our service?','How can we improve our service for you?', [
      ["Tell us honestly: how can we improve our service?", "Fala com sinceridade: como podemos melhorar nosso atendimento?"],
      ["How can we improve our service for the ICU team?", "Como podemos melhorar nosso atendimento para a equipe da UTI?"]
  ]],
  ['f44','suporte','Vamos agendar uma visita técnica','Let’s schedule a service visit','Let’s schedule a service visit for next week.', [
      ["Let’s schedule a service visit for Monday morning.", "Vamos agendar uma visita técnica para segunda de manhã."],
      ["The ventilator needs a check. Let’s schedule a service visit.", "O ventilador precisa de uma revisão. Vamos agendar uma visita técnica."]
  ]],
  ['f45','suporte','O equipamento está na garantia','The equipment is under warranty','Good news: the equipment is under warranty until March.', [
      ["Don’t worry, the equipment is under warranty.", "Não se preocupe, o equipamento está na garantia."],
      ["The equipment is under warranty for two years.", "O equipamento está na garantia por dois anos."]
  ]],
  ['f46','suporte','Precisamos de mais informações sobre o problema','We need more details about the issue','We need more details about the issue you’re facing.', [
      ["We need more details about the issue, like the error code.", "Precisamos de mais informações sobre o problema, tipo o código de erro."],
      ["Before the visit, we need more details about the issue.", "Antes da visita, precisamos de mais informações sobre o problema."]
  ]],
  ['f47','suporte','Vou encaminhar para o time técnico','I’ll forward this to our technical team','I’ll forward this to our technical team right away.', [
      ["Thanks for the photos. I’ll forward this to our technical team.", "Obrigado pelas fotos. Vou encaminhar para o nosso time técnico."],
      ["I’ll forward this to our technical team this afternoon.", "Vou encaminhar para o nosso time técnico hoje à tarde."]
  ]],
  ['f48','suporte','Fico à disposição para o que precisar','Let me know if there’s anything else I can do','Let me know if there’s anything else I can do for you.', [
      ["The pump is fixed. Let me know if there’s anything else I can do.", "A bomba está consertada. Fico à disposição para o que precisar."],
      ["Let me know if there’s anything else I can do before the audit.", "Fico à disposição para o que precisar antes da auditoria."]
  ]],
  ['f49','feiras','Vamos nos encontrar na feira?','Shall we meet at the trade show?','Shall we meet at the trade show in October?', [
      ["Shall we meet at the trade show in Düsseldorf?", "Vamos nos encontrar na feira em Düsseldorf?"],
      ["Shall we meet at the trade show on the second day?", "Vamos nos encontrar na feira no segundo dia?"]
  ]],
  ['f50','feiras','Qual estande é o seu?','Which booth is yours?','Which booth is yours at the exhibition?', [
      ["I’m in Hall 3. Which booth is yours?", "Estou no Pavilhão 3. Qual estande é o seu?"],
      ["Which booth is yours this year?", "Qual estande é o seu este ano?"]
  ]],
  ['f51','feiras','Podemos marcar uma reunião presencial','We can set up an in-person meeting','We can set up an in-person meeting during the event.', [
      ["We can set up an in-person meeting at your office.", "Podemos marcar uma reunião presencial no seu escritório."],
      ["When I’m in Miami, we can set up an in-person meeting.", "Quando eu estiver em Miami, podemos marcar uma reunião presencial."]
  ]],
  ['f52','feiras','Minha passagem já está confirmada','My flight is already confirmed','My flight is already confirmed for next week.', [
      ["My flight is already confirmed, I land on Sunday.", "Minha passagem já está confirmada, chego no domingo."],
      ["Good news: my flight is already confirmed for the fair.", "Boa notícia: minha passagem para a feira já está confirmada."]
  ]],
  ['f53','feiras','Vamos apresentar nossos novos produtos','We’re going to showcase our new products','We’re going to showcase our new products at the booth.', [
      ["We’re going to showcase our new products in São Paulo.", "Vamos apresentar nossos novos produtos em São Paulo."],
      ["This year, we’re going to showcase our new products online.", "Este ano, vamos apresentar nossos novos produtos online."]
  ]],
  ['f54','feiras','Foi ótimo te conhecer pessoalmente','It was great meeting you in person','It was great meeting you in person at the fair.', [
      ["It was great meeting you in person, Tom.", "Foi ótimo te conhecer pessoalmente, Tom."],
      ["It was great meeting you in person after so many calls.", "Foi ótimo te conhecer pessoalmente depois de tantas calls."]
  ]]
  ]
};
