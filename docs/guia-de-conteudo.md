# Guia de conteúdo do Chunk Sprint

Regras para escrever chunks, variações e conversas. Vale para qualquer pacote novo.
Antes de publicar, rode `node tools/validar-conteudo.js`: ele precisa terminar com `OK` e 0 erro.

## Quem usa

- **Felipe**: dono da Astton Medical, empresa brasileira que vende, importa, calibra e faz manutenção
  de equipamento médico (monitores, ventiladores, bombas de infusão, ECG, Holter, bisturi elétrico,
  ultrassom). Clientes são hospitais e clínicas; fornecedores estão no exterior. Inglês para negociar,
  escrever e-mail, fazer call e ir a feira.
- **Arthur**: adolescente, games, PC, streams, tecnologia e história. Linguagem de jogador, sem palavrão.
- **Dayane**: filmes, séries e cultura. Começa do básico.
- Todos começam pelo módulo de viagem.

## Formato de um baralho (`js/decks/<nome>.js`)

```js
window.CS_DECKS = window.CS_DECKS || {};
CS_DECKS.<nome> = {
  name: 'Nome do baralho',
  cats: [
    {key:'chave', label:'Nome da Categoria', level:'A1', cando:'Meta em português, começando por verbo'},
  ],
  chunks: [
    ['id','chave','português','inglês','frase de exemplo em inglês', [
      ['variação 1 em inglês','tradução 1'],
      ['variação 2 em inglês','tradução 2']
    ]],
  ]
};
```

As conversas do pacote ficam no mesmo arquivo, logo abaixo:

```js
window.CS_DIALOGS = Object.assign(window.CS_DIALOGS || {}, {
  chave: { titulo:'Título curto', usa:['id1','id2','id3','id4'], falas:[
    ['outro','fala em inglês','tradução'],
    ['voce','fala em inglês','tradução']
  ]}
});
```

## Regras

**ids**
- Nunca mudam e nunca são reaproveitados: o progresso de cada pessoa fica gravado no id.
- Faixas: viagem `t`, negócios `f`, games `s`, cultura `d`. Próximo número livre depois do maior já usado.
- Chaves de categoria são únicas no app inteiro (o validador confere).

**Chunk (`en`)**
- Um bloco que um nativo realmente usa inteiro, de 2 a 8 palavras. Nada de palavra solta.
- Inglês americano natural e atual. Na dúvida entre o "de livro" e o que se ouve de verdade, fica o
  que se ouve (ex.: *Do you take cards?* e não *Do you accept card?*).
- Apóstrofo curvo `’`, como no resto do conteúdo.
- Nada de repetir um chunk que já existe em outro baralho do mesmo perfil.

**Português (`pt`)**
- Como um brasileiro diria, não tradução palavra por palavra.
- Sem travessão (—). Usar ponto, vírgula ou dois-pontos.

**Exemplo (`ex`)**
- Frase natural que **contém o chunk literalmente** (maiúscula e pontuação final do chunk podem
  mudar), com pelo menos umas 2 palavras a mais. É assim que o exercício "chunk na frase" funciona.

**Variações (2 por chunk)**
- Duas frases curtas (até ~14 palavras) em situações diferentes, usando o mesmo chunk com outra
  "peça" trocada (outro objeto, pessoa, tempo, lugar). Cada uma com a tradução.
- Servem para o exercício de substituição: a pessoa vê o português e produz a frase inteira.

**Nível e meta da categoria**
- `level`: A1, A2 ou B1, honesto. Chunks de sobrevivência são A1; negociação e opinião são B1.
- `cando`: o que a pessoa consegue fazer ao dominar a categoria, começando por verbo
  ("Pedir e discutir uma cotação").

**Conversa (1 por categoria)**
- 5 a 8 falas, alternando `outro` e `voce`, numa cena realista da categoria.
- `usa`: de 4 a 6 ids **daquela categoria**; cada um aparece em alguma fala. As falas de `voce`
  devem conter os chunks que a pessoa pratica; o `outro` pode usar chunks para ela reconhecer.
- Nomes inventados só de primeiro nome; o Felipe pode aparecer pelo nome no baralho dele.

**Tom**
- Conteúdo para a família inteira. Nada de palavrão, política ou tema pesado.
