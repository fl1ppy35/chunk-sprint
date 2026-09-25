/* Baralho "Negócios, pacote 2". Produto, pagamento, importação, contratos, calibração,
   normas e parcerias (Astton Medical).
   Cada chunk: [id, categoria, português, inglês, frase de exemplo, variações].
   O id NUNCA deve mudar nem ser reaproveitado: é nele que o progresso de cada pessoa fica gravado. */
window.CS_DECKS = window.CS_DECKS || {};
CS_DECKS.negocios2 = {
  name: 'Negócios, pacote 2',
  cats: [
  {key:'n2_informal', label:'Conversa Informal com Clientes', level:'A2', cando:'Puxar conversa e quebrar o gelo antes do assunto sério'},
  {key:'n2_instalacao', label:'Instalação e Treinamento', level:'A2', cando:'Combinar a instalação e treinar a equipe do cliente'},
  {key:'n2_jantar', label:'Jantar e Visita de Negócios', level:'A2', cando:'Receber um visitante e conduzir um jantar de negócios'},
  {key:'n2_produto', label:'Apresentando o Produto', level:'B1', cando:'Apresentar um equipamento e suas especificações'},
  {key:'n2_pagamento', label:'Pagamento e Faturamento', level:'B1', cando:'Combinar a forma de pagamento e cobrar uma fatura'},
  {key:'n2_importacao', label:'Importação e Alfândega', level:'B1', cando:'Resolver documentos e atrasos de importação'},
  {key:'n2_contrato', label:'Contratos e Garantia', level:'B1', cando:'Discutir cláusulas de contrato e o que a garantia cobre'},
  {key:'n2_calibracao', label:'Calibração e Manutenção', level:'B1', cando:'Explicar calibração, manutenção preventiva e prazos'},
  {key:'n2_normas', label:'Registro e Normas', level:'B1', cando:'Conversar sobre registro na Anvisa, certificados e normas'},
  {key:'n2_parcerias', label:'Parcerias e Distribuição', level:'B1', cando:'Propor uma parceria e negociar a distribuição'}
  ],
  chunks: [
  ['f79','n2_informal','Como vão as coisas por aí?','How are things on your end?','Hi Mark, how are things on your end?', [
    ['How are things at the hospital?','Como vão as coisas no hospital?'],
    ['How are things in Munich these days?','Como vão as coisas em Munique ultimamente?']
  ]],
  ['f80','n2_informal','Quanto tempo!','It’s been a while!','Hey, it’s been a while! How have you been?', [
    ['It’s been a while since the trade show!','Quanto tempo desde a feira!'],
    ['It’s been a while since our last call.','Faz tempo desde a nossa última call.']
  ]],
  ['f81','n2_informal','Como foi o fim de semana?','How was your weekend?','Good morning! How was your weekend?', [
    ['How was your trip to Chicago?','Como foi sua viagem a Chicago?'],
    ['How was your vacation?','Como foram as férias?']
  ]],
  ['f82','n2_informal','Como está o tempo aí?','How’s the weather over there?','It’s really hot here. How’s the weather over there?', [
    ['How’s the weather in Shenzhen?','Como está o tempo em Shenzhen?'],
    ['How’s the traffic over there today?','Como está o trânsito aí hoje?']
  ]],
  ['f83','n2_informal','Está bem corrido por aqui','It’s been pretty busy here','It’s been pretty busy here with all the hospital contracts.', [
    ['It’s been pretty busy at the lab this month.','Está bem corrido no laboratório este mês.'],
    ['It’s been pretty quiet here this week.','Está bem tranquilo por aqui esta semana.']
  ]],
  ['f84','n2_informal','Manda um abraço para a equipe','Say hi to the team for me','Say hi to the team for me, and see you in Düsseldorf.', [
    ['Say hi to Anna for me.','Manda um abraço para a Anna.'],
    ['Say hi to your family for me.','Manda um abraço para a sua família.']
  ]],

  ['f85','n2_instalacao','Quando podemos fazer a instalação?','When can we do the installation?','When can we do the installation in the ICU?', [
    ['When can we do the training?','Quando podemos fazer o treinamento?'],
    ['When can we do the setup in the OR?','Quando podemos fazer a configuração no centro cirúrgico?']
  ]],
  ['f86','n2_instalacao','A sala precisa estar pronta','The room needs to be ready','The room needs to be ready before our team arrives.', [
    ['The power outlets need to be ready by Monday.','As tomadas precisam estar prontas até segunda.'],
    ['The gas lines need to be ready first.','A rede de gases precisa estar pronta antes.']
  ]],
  ['f87','n2_instalacao','Vamos treinar a equipe de enfermagem','We’ll train the nursing staff','After the installation, we’ll train the nursing staff.', [
    ['We’ll train the clinical engineering team on Friday.','Vamos treinar a equipe de engenharia clínica na sexta.'],
    ['We’ll train the night shift next week.','Vamos treinar o plantão noturno semana que vem.']
  ]],
  ['f88','n2_instalacao','Quantas pessoas vão participar?','How many people will attend?','How many people will attend the training session?', [
    ['How many people will attend the workshop?','Quantas pessoas vão participar do workshop?'],
    ['How many nurses will attend on Tuesday?','Quantas enfermeiras vão participar na terça?']
  ]],
  ['f89','n2_instalacao','Alguém tem alguma pergunta?','Does anyone have any questions?','Before we finish, does anyone have any questions?', [
    ['Does anyone have any questions about the alarms?','Alguém tem alguma pergunta sobre os alarmes?'],
    ['Does anyone have any questions before the break?','Alguém tem alguma pergunta antes do intervalo?']
  ]],
  ['f90','n2_instalacao','Vou deixar um guia rápido','I’ll leave a quick guide','I’ll leave a quick guide next to each monitor.', [
    ['I’ll leave a quick guide at the nurses’ station.','Vou deixar um guia rápido no posto de enfermagem.'],
    ['I’ll leave a copy of the manual with you.','Vou deixar uma cópia do manual com você.']
  ]],

  ['f103','n2_jantar','Fez boa viagem?','Did you have a good flight?','Welcome to São Paulo! Did you have a good flight?', [
    ['Did you have a good flight from Frankfurt?','Fez um bom voo de Frankfurt?'],
    ['Did you have a good trip from the airport?','A vinda do aeroporto foi tranquila?']
  ]],
  ['f104','n2_jantar','Deixa eu te mostrar o lugar','Let me show you around','Come in, let me show you around the lab.', [
    ['Let me show you around the warehouse.','Deixa eu te mostrar o estoque.'],
    ['Let me show you around the city tonight.','Deixa eu te mostrar a cidade hoje à noite.']
  ]],
  ['f105','n2_jantar','Você já provou...','Have you ever tried...','Have you ever tried pão de queijo? It’s a classic.', [
    ['Have you ever tried feijoada?','Você já provou feijoada?'],
    ['Have you ever tried a caipirinha?','Você já provou caipirinha?']
  ]],
  ['f106','n2_jantar','O que você recomenda?','What would you recommend?','Everything looks good. What would you recommend?', [
    ['What would you recommend for dessert?','O que você recomenda de sobremesa?'],
    ['Which wine would you recommend?','Qual vinho você recomenda?']
  ]],
  ['f107','n2_jantar','Essa é por minha conta','This one’s on me','Please, put your card away. This one’s on me.', [
    ['Dinner’s on me tonight.','O jantar hoje é por minha conta.'],
    ['The next round’s on me.','A próxima rodada é por minha conta.']
  ]],
  ['f108','n2_jantar','Obrigado por vir de tão longe','Thanks for coming all this way','Thanks for coming all this way to meet us.', [
    ['Thanks for coming all this way from Germany.','Obrigado por vir lá da Alemanha.'],
    ['Thanks for coming all this way for the audit.','Obrigado por vir de tão longe para a auditoria.']
  ]],

  ['f55','n2_produto','Deixa eu te mostrar como funciona','Let me show you how it works','Let me show you how it works on the demo unit.', [
    ['Let me show you how the touchscreen works.','Deixa eu te mostrar como funciona a tela touch.'],
    ['Let me show you how the alarm settings work.','Deixa eu te mostrar como funcionam os ajustes de alarme.']
  ]],
  ['f56','n2_produto','Ele vem com...','It comes with...','It comes with two batteries and a carrying case.', [
    ['It comes with a five-lead ECG cable.','Vem com um cabo de ECG de cinco vias.'],
    ['The Holter comes with ten recorders.','O Holter vem com dez gravadores.']
  ]],
  ['f57','n2_produto','Um dos principais diferenciais é...','One of the key features is...','One of the key features is the long battery life.', [
    ['One of the key features is the built-in printer.','Um dos principais diferenciais é a impressora embutida.'],
    ['One of the key features is wireless monitoring.','Um dos principais diferenciais é o monitoramento sem fio.']
  ]],
  ['f58','n2_produto','É bem fácil de usar','It’s very easy to use','The nurses love it because it’s very easy to use.', [
    ['The new software is very easy to use.','O software novo é bem fácil de usar.'],
    ['Even the night shift says it’s very easy to use.','Até o plantão noturno diz que é bem fácil de usar.']
  ]],
  ['f59','n2_produto','Vocês têm a ficha técnica?','Do you have a spec sheet?','Do you have a spec sheet for the new model?', [
    ['Do you have a spec sheet in Portuguese?','Vocês têm a ficha técnica em português?'],
    ['Do you have a spec sheet for the pediatric probe?','Vocês têm a ficha técnica do transdutor pediátrico?']
  ]],
  ['f60','n2_produto','Qual é a diferença entre os dois modelos?','What’s the difference between the two models?','What’s the difference between the two models, besides the price?', [
    ['What’s the difference between the two probes?','Qual é a diferença entre os dois transdutores?'],
    ['What’s the difference between the old and new versions?','Qual é a diferença entre a versão antiga e a nova?']
  ]],

  ['f61','n2_pagamento','Quais são as condições de pagamento?','What are your payment terms?','What are your payment terms for new customers?', [
    ['What are your payment terms for large orders?','Quais são as condições de pagamento para pedidos grandes?'],
    ['What are your payment terms for spare parts?','Quais são as condições de pagamento para peças de reposição?']
  ]],
  ['f62','n2_pagamento','Precisamos de 30% de entrada','We need a 30% deposit','We need a 30% deposit to start production.', [
    ['We need a 50% deposit on this order.','Precisamos de 50% de entrada neste pedido.'],
    ['For custom units, we need a 40% deposit.','Para unidades sob encomenda, precisamos de 40% de entrada.']
  ]],
  ['f63','n2_pagamento','O pagamento vence em 30 dias','Payment is due in 30 days','Payment is due in 30 days from the invoice date.', [
    ['Payment is due in 15 days.','O pagamento vence em 15 dias.'],
    ['The second payment is due in 60 days.','A segunda parcela vence em 60 dias.']
  ]],
  ['f64','n2_pagamento','Já fizemos a transferência','We’ve already sent the wire transfer','We’ve already sent the wire transfer this morning.', [
    ['We’ve already sent the wire transfer for the deposit.','Já fizemos a transferência da entrada.'],
    ['We’ve already sent the wire transfer to your German account.','Já fizemos a transferência para a sua conta na Alemanha.']
  ]],
  ['f65','n2_pagamento','Pode me mandar a fatura?','Could you send me the invoice?','Could you send me the invoice for the last order?', [
    ['Could you send me the invoice by email?','Pode me mandar a fatura por e-mail?'],
    ['Could you send me the proforma invoice first?','Pode me mandar a fatura proforma antes?']
  ]],
  ['f66','n2_pagamento','Esta fatura está em atraso','This invoice is overdue','Just a reminder that this invoice is overdue.', [
    ['This invoice is two weeks overdue.','Esta fatura está duas semanas atrasada.'],
    ['The March invoice is still overdue.','A fatura de março ainda está em atraso.']
  ]],

  ['f67','n2_importacao','A carga está presa na alfândega','The shipment is stuck in customs','The shipment is stuck in customs in São Paulo.', [
    ['The monitors are stuck in customs.','Os monitores estão presos na alfândega.'],
    ['Our last order was stuck in customs for ten days.','Nosso último pedido ficou preso na alfândega por dez dias.']
  ]],
  ['f68','n2_importacao','Precisamos do certificado de origem','We need the certificate of origin','To clear the goods, we need the certificate of origin.', [
    ['We need the certificate of origin by Monday.','Precisamos do certificado de origem até segunda.'],
    ['Customs still needs the certificate of origin.','A alfândega ainda precisa do certificado de origem.']
  ]],
  ['f69','n2_importacao','Pode conferir o packing list?','Could you double-check the packing list?','Could you double-check the packing list before you ship?', [
    ['Could you double-check the serial numbers?','Pode conferir os números de série?'],
    ['Could you double-check the HS code on the invoice?','Pode conferir o código NCM na fatura?']
  ]],
  ['f70','n2_importacao','Quem paga os impostos de importação?','Who pays the import duties?','Under this Incoterm, who pays the import duties?', [
    ['Who pays the import duties on spare parts?','Quem paga os impostos de importação das peças?'],
    ['Who pays the storage fees at the port?','Quem paga a armazenagem no porto?']
  ]],
  ['f71','n2_importacao','O despachante vai cuidar disso','Our customs broker will handle it','Don’t worry, our customs broker will handle it.', [
    ['Our customs broker will handle the paperwork.','Nosso despachante vai cuidar da papelada.'],
    ['Our freight forwarder will handle the pickup.','Nosso agente de carga vai cuidar da coleta.']
  ]],
  ['f72','n2_importacao','Dá para mandar por via aérea?','Can you ship it by air?','It’s urgent. Can you ship it by air?', [
    ['Can you ship the probes by air?','Dá para mandar os transdutores por via aérea?'],
    ['Can you ship the rest by sea?','Dá para mandar o resto por via marítima?']
  ]],

  ['f73','n2_contrato','Vou mandar o contrato para revisão','I’ll send the contract over for review','I’ll send the contract over for review by Friday.', [
    ['I’ll send the draft over for review today.','Vou mandar a minuta para revisão hoje.'],
    ['I’ll send the new terms over for review.','Vou mandar os novos termos para revisão.']
  ]],
  ['f74','n2_contrato','O que a garantia cobre?','What does the warranty cover?','What does the warranty cover, exactly?', [
    ['What does the extended warranty cover?','O que a garantia estendida cobre?'],
    ['What does the service contract cover?','O que o contrato de manutenção cobre?']
  ]],
  ['f75','n2_contrato','Tem garantia de dois anos','It has a two-year warranty','Good news: it has a two-year warranty on parts and labor.', [
    ['The probe has a one-year warranty.','O transdutor tem garantia de um ano.'],
    ['The new model has a three-year warranty.','O modelo novo tem garantia de três anos.']
  ]],
  ['f76','n2_contrato','Isso não é coberto pela garantia','That’s not covered by the warranty','I’m afraid that’s not covered by the warranty.', [
    ['Drop damage isn’t covered by the warranty.','Dano por queda não é coberto pela garantia.'],
    ['The battery isn’t covered by the warranty.','A bateria não é coberta pela garantia.']
  ]],
  ['f77','n2_contrato','Podemos renovar o contrato?','Can we renew the contract?','Can we renew the contract for another year?', [
    ['Can we renew the service contract in January?','Podemos renovar o contrato de manutenção em janeiro?'],
    ['Can we renew the agreement on the same terms?','Podemos renovar o acordo nas mesmas condições?']
  ]],
  ['f78','n2_contrato','Vamos colocar isso por escrito','Let’s put that in writing','Sounds good. Let’s put that in writing.', [
    ['Let’s put the new price in writing.','Vamos colocar o novo preço por escrito.'],
    ['Let’s put the delivery date in writing.','Vamos colocar a data de entrega por escrito.']
  ]],

  ['f91','n2_calibracao','A calibração vence no mês que vem','The calibration is due next month','The calibration is due next month for all the pumps.', [
    ['The calibration is due in March.','A calibração vence em março.'],
    ['The preventive maintenance is due next week.','A manutenção preventiva vence na semana que vem.']
  ]],
  ['f92','n2_calibracao','Fazemos manutenção preventiva a cada seis meses','We do preventive maintenance every six months','We do preventive maintenance every six months on the ventilators.', [
    ['We do preventive maintenance every year on the ECGs.','Fazemos manutenção preventiva todo ano nos eletrocardiógrafos.'],
    ['We do safety testing every twelve months.','Fazemos o teste de segurança elétrica a cada doze meses.']
  ]],
  ['f93','n2_calibracao','Está fora da tolerância','It’s out of tolerance','The flow reading is off. It’s out of tolerance.', [
    ['The pressure reading is out of tolerance.','A leitura de pressão está fora da tolerância.'],
    ['This channel is slightly out of tolerance.','Este canal está um pouco fora da tolerância.']
  ]],
  ['f94','n2_calibracao','Vamos emitir o certificado de calibração','We’ll issue the calibration certificate','Once the tests pass, we’ll issue the calibration certificate.', [
    ['We’ll issue the certificate by Friday.','Vamos emitir o certificado até sexta.'],
    ['We’ll issue the service report today.','Vamos emitir o relatório de serviço hoje.']
  ]],
  ['f95','n2_calibracao','Precisamos trocar uma peça','We need to replace a part','We need to replace a part in the flow sensor.', [
    ['We need to replace the battery.','Precisamos trocar a bateria.'],
    ['We need to replace the display on this unit.','Precisamos trocar o display deste aparelho.']
  ]],
  ['f96','n2_calibracao','O equipamento está liberado para uso','The unit is cleared for use','All tests passed, so the unit is cleared for use.', [
    ['The monitor is cleared for use in the ICU.','O monitor está liberado para uso na UTI.'],
    ['The pump isn’t cleared for use yet.','A bomba ainda não está liberada para uso.']
  ]],

  ['f97','n2_normas','O produto tem registro na Anvisa?','Is the product registered with Anvisa?','Before we order, is the product registered with Anvisa?', [
    ['Is the new model registered with Anvisa?','O modelo novo tem registro na Anvisa?'],
    ['Is this probe registered with the FDA?','Este transdutor tem registro na FDA?']
  ]],
  ['f98','n2_normas','Vocês podem mandar o certificado CE?','Can you send us the CE certificate?','Can you send us the CE certificate for this model?', [
    ['Can you send us the ISO 13485 certificate?','Vocês podem mandar o certificado ISO 13485?'],
    ['Can you send us the test report?','Vocês podem mandar o relatório de ensaio?']
  ]],
  ['f99','n2_normas','Ele atende à IEC 60601','It complies with IEC 60601','Yes, it complies with IEC 60601 and the local standards.', [
    ['The charger complies with IEC 60601.','O carregador atende à IEC 60601.'],
    ['The software complies with the new standard.','O software atende à nova norma.']
  ]],
  ['f100','n2_normas','O registro está em andamento','The registration is in progress','The registration is in progress and should be approved soon.', [
    ['The renewal is in progress.','A renovação está em andamento.'],
    ['The Anvisa registration is still in progress.','O registro na Anvisa ainda está em andamento.']
  ]],
  ['f101','n2_normas','Precisamos do dossiê técnico completo','We need the full technical file','For the registration, we need the full technical file.', [
    ['We need the full technical file by next month.','Precisamos do dossiê técnico completo até o mês que vem.'],
    ['We need the full user manual in Portuguese.','Precisamos do manual do usuário completo em português.']
  ]],
  ['f102','n2_normas','Quando vence esse certificado?','When does this certificate expire?','When does this certificate expire, exactly?', [
    ['When does the registration expire?','Quando vence o registro?'],
    ['When does your ISO certificate expire?','Quando vence o seu certificado ISO?']
  ]],

  ['f109','n2_parcerias','Queremos ser seu distribuidor no Brasil','We’d like to be your distributor in Brazil','We’d like to be your distributor in Brazil for the whole product line.', [
    ['We’d like to be your distributor in South America.','Queremos ser seu distribuidor na América do Sul.'],
    ['We’d like to be your service partner in Brazil.','Queremos ser seu parceiro de assistência técnica no Brasil.']
  ]],
  ['f110','n2_parcerias','Vocês oferecem exclusividade?','Do you offer exclusivity?','Do you offer exclusivity for the Brazilian market?', [
    ['Do you offer exclusivity by region?','Vocês oferecem exclusividade por região?'],
    ['Do you offer training for distributors?','Vocês oferecem treinamento para distribuidores?']
  ]],
  ['f111','n2_parcerias','Temos uma rede forte de hospitais','We have a strong network of hospitals','We have a strong network of hospitals in the Southeast.', [
    ['We have a strong network of clinics in Minas Gerais.','Temos uma rede forte de clínicas em Minas Gerais.'],
    ['We have a strong network of field technicians.','Temos uma rede forte de técnicos de campo.']
  ]],
  ['f112','n2_parcerias','Qual é o pedido mínimo?','What’s the minimum order quantity?','What’s the minimum order quantity per year?', [
    ['What’s the minimum order quantity for the probes?','Qual é o pedido mínimo dos transdutores?'],
    ['What’s the minimum annual volume?','Qual é o volume anual mínimo?']
  ]],
  ['f113','n2_parcerias','Podemos começar com um período de teste','We could start with a trial period','We could start with a trial period of six months.', [
    ['We could start with a pilot in two hospitals.','Podemos começar com um piloto em dois hospitais.'],
    ['We could start with a small first order.','Podemos começar com um primeiro pedido pequeno.']
  ]],
  ['f114','n2_parcerias','Vemos isso como uma parceria de longo prazo','We see this as a long-term partnership','We see this as a long-term partnership, not a one-time deal.', [
    ['We see this as a long-term relationship.','Vemos isso como uma relação de longo prazo.'],
    ['We see Brazil as a long-term market.','Vemos o Brasil como um mercado de longo prazo.']
  ]]
  ]
};

/* Conversas do pacote 2, uma por categoria. */
window.CS_DIALOGS = Object.assign(window.CS_DIALOGS || {}, {
  n2_produto: { titulo:'Demonstração de um monitor', usa:['f55','f56','f57','f58','f60'], falas:[
    ['outro','Hi Felipe. So this is the new patient monitor?','Oi, Felipe. Então esse é o monitor multiparamétrico novo?'],
    ['voce','That’s right. Let me show you how it works.','Isso mesmo. Deixa eu te mostrar como funciona.'],
    ['outro','The screen looks great. Is it complicated to set up?','A tela é ótima. É complicado de configurar?'],
    ['voce','Not at all, it’s very easy to use. One of the key features is the long battery life.','Nem um pouco, é bem fácil de usar. Um dos principais diferenciais é a bateria que dura muito.'],
    ['outro','Good. What’s the difference between the two models?','Legal. Qual é a diferença entre os dois modelos?'],
    ['voce','The premium one? It comes with a built-in printer and capnography.','O premium? Ele vem com impressora embutida e capnografia.'],
    ['outro','That could be really useful in the ICU.','Isso pode ser bem útil na UTI.']
  ]},
  n2_pagamento: { titulo:'Acertando o pagamento com o fornecedor', usa:['f61','f62','f63','f65'], falas:[
    ['voce','Before we place the order, what are your payment terms?','Antes de fecharmos o pedido, quais são as condições de pagamento?'],
    ['outro','We need a 30% deposit, and the balance before shipping.','Precisamos de 30% de entrada e o saldo antes do envio.'],
    ['voce','Could we pay the balance after delivery instead?','Poderíamos pagar o saldo depois da entrega?'],
    ['outro','For a long-term customer, sure. Payment is due in 30 days, counting from delivery.','Para um cliente antigo, claro. O pagamento vence em 30 dias, contando da entrega.'],
    ['voce','Great. Could you send me the invoice for the deposit?','Ótimo. Pode me mandar a fatura da entrada?'],
    ['outro','I’ll email it to you right now.','Vou te mandar por e-mail agora mesmo.'],
    ['voce','Perfect. We’ll pay it as soon as it arrives.','Perfeito. Pagamos assim que chegar.']
  ]},
  n2_importacao: { titulo:'Carga parada na alfândega', usa:['f67','f68','f69','f71'], falas:[
    ['outro','Hi Felipe, any news on the ventilators?','Oi, Felipe, alguma novidade dos ventiladores?'],
    ['voce','Unfortunately, the shipment is stuck in customs.','Infelizmente, a carga está presa na alfândega.'],
    ['outro','Oh no. What’s missing?','Ah, não. O que está faltando?'],
    ['voce','We need the certificate of origin. Could you double-check the packing list too? One serial number doesn’t match.','Precisamos do certificado de origem. Pode conferir o packing list também? Um número de série não bate.'],
    ['outro','I’ll check it and send both documents today.','Vou conferir e mandar os dois documentos hoje.'],
    ['voce','Thanks. Once we have them, our customs broker will handle it.','Obrigado. Quando chegarem, o nosso despachante vai cuidar disso.']
  ]},
  n2_contrato: { titulo:'Revisando o contrato de manutenção', usa:['f73','f74','f76','f77','f78'], falas:[
    ['outro','Our current agreement ends in December. Can we renew the contract?','Nosso contrato atual termina em dezembro. Podemos renovar o contrato?'],
    ['voce','Of course. I’ll send the contract over for review this week.','Claro. Vou mandar o contrato para revisão esta semana.'],
    ['outro','Thanks. What does the warranty cover on the new pumps?','Obrigado. O que a garantia cobre nas bombas novas?'],
    ['voce','Parts and labor. If someone drops a pump, though, that’s not covered by the warranty.','Peças e mão de obra. Mas se alguém derrubar uma bomba, isso não é coberto pela garantia.'],
    ['outro','Fair enough. And the response time stays at 24 hours?','Justo. E o tempo de atendimento continua em 24 horas?'],
    ['voce','Yes. Let’s put that in writing, too.','Sim. Vamos colocar isso por escrito também.']
  ]},
  n2_informal: { titulo:'Antes de começar a call', usa:['f79','f80','f81','f83','f84'], falas:[
    ['voce','Hi Anna! It’s been a while! How are things on your end?','Oi, Anna! Quanto tempo! Como vão as coisas por aí?'],
    ['outro','Pretty good, thanks. How was your weekend?','Tudo bem, obrigada. Como foi o fim de semana?'],
    ['voce','Nice and relaxing. I went to the beach with my family. And you?','Bem tranquilo. Fui para a praia com a família. E você?'],
    ['outro','Just stayed home. It’s been pretty busy here with the new launch.','Fiquei em casa. Está bem corrido por aqui com o lançamento novo.'],
    ['voce','I can imagine. Well, let’s get to the order.','Imagino. Bom, vamos ao pedido.'],
    ['outro','Sure. And before I forget, Mark says hello.','Claro. E antes que eu esqueça, o Mark mandou um oi.'],
    ['voce','Say hi to the team for me!','Manda um abraço para a equipe!']
  ]},
  n2_instalacao: { titulo:'Combinando a instalação no hospital', usa:['f85','f86','f87','f88','f90'], falas:[
    ['outro','The monitors arrived. When can we do the installation?','Os monitores chegaram. Quando podemos fazer a instalação?'],
    ['voce','Next Tuesday works for us. The room needs to be ready, with the outlets working.','Terça que vem dá para a gente. A sala precisa estar pronta, com as tomadas funcionando.'],
    ['outro','No problem. What about training?','Sem problema. E o treinamento?'],
    ['voce','On Wednesday we’ll train the nursing staff. How many people will attend?','Na quarta vamos treinar a equipe de enfermagem. Quantas pessoas vão participar?'],
    ['outro','About fifteen, split into two shifts.','Umas quinze, divididas em dois turnos.'],
    ['voce','Great. I’ll leave a quick guide at the nurses’ station, too.','Ótimo. Vou deixar um guia rápido no posto de enfermagem também.']
  ]},
  n2_calibracao: { titulo:'Resultado da calibração', usa:['f91','f93','f94','f95','f96'], falas:[
    ['outro','Hi Felipe, how did the pump calibration go?','Oi, Felipe, como foi a calibração das bombas?'],
    ['voce','Eleven of them passed. One failed the flow test. It’s out of tolerance.','Onze passaram. Uma falhou no teste de vazão. Está fora da tolerância.'],
    ['outro','Can you fix it here?','Dá para consertar aqui?'],
    ['voce','We need to replace a part. It should arrive on Thursday.','Precisamos trocar uma peça. Deve chegar na quinta.'],
    ['outro','And the pump from the ER?','E a bomba do pronto-socorro?'],
    ['voce','That one passed. The unit is cleared for use, and we’ll issue the calibration certificate today.','Essa passou. O equipamento está liberado para uso, e vamos emitir o certificado de calibração hoje.'],
    ['outro','Great. By the way, the calibration is due next month for the ventilators.','Ótimo. Aliás, a calibração dos ventiladores vence no mês que vem.']
  ]},
  n2_normas: { titulo:'Documentos para o registro', usa:['f97','f98','f100','f101','f102'], falas:[
    ['voce','We’re interested in your new ECG. Is the product registered with Anvisa?','Temos interesse no seu ECG novo. O produto tem registro na Anvisa?'],
    ['outro','Not yet. The registration is in progress with a local partner.','Ainda não. O registro está em andamento com um parceiro local.'],
    ['voce','I see. Can you send us the CE certificate in the meantime?','Entendi. Enquanto isso, vocês podem mandar o certificado CE?'],
    ['outro','Sure, I’ll attach it to my next email.','Claro, vou anexar no meu próximo e-mail.'],
    ['voce','Thanks. When does this certificate expire?','Obrigado. Quando vence esse certificado?'],
    ['outro','In 2028. Do you need anything else?','Em 2028. Precisa de mais alguma coisa?'],
    ['voce','If we register it ourselves, we need the full technical file.','Se nós mesmos formos registrar, precisamos do dossiê técnico completo.']
  ]},
  n2_jantar: { titulo:'Recebendo o fornecedor alemão', usa:['f103','f104','f105','f106','f107','f108'], falas:[
    ['voce','Welcome, Klaus! Did you have a good flight?','Bem-vindo, Klaus! Fez boa viagem?'],
    ['outro','Long, but fine. Thanks for having me.','Longa, mas tranquila. Obrigado pelo convite.'],
    ['voce','Thanks for coming all this way. Let me show you around the lab.','Obrigado por vir de tão longe. Deixa eu te mostrar o laboratório.'],
    ['outro','Very impressive. So where are we having dinner tonight?','Muito bom. E onde vamos jantar hoje à noite?'],
    ['voce','A steakhouse. Have you ever tried Brazilian barbecue?','Numa churrascaria. Você já provou churrasco brasileiro?'],
    ['outro','Never! What would you recommend?','Nunca! O que você recomenda?'],
    ['voce','Try the picanha. And put your wallet away, this one’s on me.','Prova a picanha. E guarda a carteira, essa é por minha conta.']
  ]},
  n2_parcerias: { titulo:'Proposta de distribuição', usa:['f109','f110','f111','f112','f113'], falas:[
    ['voce','We’d like to be your distributor in Brazil.','Queremos ser seu distribuidor no Brasil.'],
    ['outro','Interesting. Tell me more about Astton.','Interessante. Me conta mais sobre a Astton.'],
    ['voce','We have a strong network of hospitals, and our own calibration lab. Do you offer exclusivity?','Temos uma rede forte de hospitais e laboratório de calibração próprio. Vocês oferecem exclusividade?'],
    ['outro','Only with a minimum annual target.','Só com uma meta anual mínima.'],
    ['voce','Makes sense. What’s the minimum order quantity?','Faz sentido. Qual é o pedido mínimo?'],
    ['outro','Fifty units a year, for the first contract.','Cinquenta unidades por ano, no primeiro contrato.'],
    ['voce','We could start with a trial period of one year and review the numbers.','Podemos começar com um período de teste de um ano e rever os números.']
  ]}
});
