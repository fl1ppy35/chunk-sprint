# Chunk Sprint

Inglês em **chunks** (blocos de frase prontos, do jeito que um nativo fala) com **repetição espaçada**, para a família praticar todo dia. Cada pessoa tem seu perfil, seu baralho e seu progresso.

Página estática (HTML, CSS e JavaScript puro, sem build e sem dependências). Roda no GitHub Pages, e lá o **microfone funciona**. No claude.ai não funcionava porque a plataforma bloqueia o microfone de qualquer página hospedada nela.

## Como usar

- Abrir o link do GitHub Pages no **Safari (iPhone/Mac)**, **Chrome** ou **Edge**. O Firefox não reconhece fala.
- No iPhone: botão Compartilhar → **Adicionar à Tela de Início**. Vira um ícone e abre como app.
- Primeira vez: ⚙️ → **Testar microfone**. Se o navegador bloquear, a própria tela diz onde liberar.

## Método

1. **Aquecimento**: revisão dos chunks que venceram hoje. Fale antes de virar a carta; dá para gravar, e o app sugere Errei, Difícil ou Fácil.
2. **Chunks novos**: 4, 6 ou 9 por dia. Cada um é apresentado com áudio e exemplo, e depois a pessoa tem que **produzir** o chunk (falar ou digitar a partir do português, com dica de iniciais opcional).
3. **Prática ativa**: digitar, montar a frase, completar lacuna, múltipla escolha, ditado, **chunk na frase** (encaixar o chunk no exemplo) e **outra situação** (substituição: produzir a frase inteira com o chunk num contexto novo). Fica mais difícil conforme o chunk sobe de caixa.
4. **Shadowing**: ouvir, falar junto e gravar. A porcentagem mede clareza, não sotaque.
5. **Conversa**: um diálogo curto por categoria, liberado quando os chunks dele já foram aprendidos. Primeiro ouvir sem ler; depois fazer o seu papel, falando. Também fica na aba Baralho.

Leitner com 6 caixas e intervalos de `[1, 2, 4, 7, 14, 30]` dias. Fácil sobe uma caixa; Difícil fica na caixa com metade do intervalo; Errei desce **duas** caixas (não zera) e volta amanhã.

**Metas por nível**: cada categoria tem nível (A1, A2, B1) e uma meta do tipo "negociar preço". A meta se cumpre com 80% dos chunks firmes (caixa 2 ou mais). Painel na aba Progresso.

**Semana**: segunda a sexta com sessão completa; **sábado só revisão** (há um botão para pedir chunks novos mesmo assim); **domingo livre, sem quebrar a sequência**.

## Onde fica cada coisa

| Arquivo | O que tem |
|---|---|
| `index.html` | A página |
| `css/app.css` | Visual, tema claro e escuro |
| `js/app.js` | Toda a lógica (sessão, exercícios, áudio, microfone, progresso) |
| `js/profiles.js` | **Pessoas** e quais baralhos cada uma usa, em ordem |
| `js/decks/viagem.js` | Módulo comum de viagem e dia a dia (24 chunks) |
| `js/decks/negocios.js` | Negócios, Astton Medical (54 chunks) |
| `js/decks/games.js` | Games, tecnologia e história (48 chunks) |
| `js/decks/negocios2.js` | Negócios, pacote 2: produto, pagamento, alfândega, contratos, calibração, normas… (60) |
| `js/decks/games2.js` | Games, pacote 2: estratégia, loja, criar conteúdo, programação, escola, ciência… (60) |
| `js/decks/cultura.js` | Dayane: filmes, séries, cinema, música, livros, museus, teatro, opinião (60) |
| `js/dialogos.js` | 21 conversas do pacote 1 (as dos pacotes novos ficam no próprio arquivo do baralho) |
| `docs/guia-de-conteudo.md` | Regras para escrever chunks, variações e conversas |
| `tools/validar-conteudo.js` | Verificador: `node tools/validar-conteudo.js` precisa dar OK antes de publicar |
| `js/migracao.js` | Progresso trazido do claude.ai (entra uma vez só) |
| `sw.js`, `manifest.webmanifest`, `icons/` | Instalar como app e abrir sem internet |

### Acrescentar conteúdo

Categorias: `{key, label, level, cando}`. Em `js/decks/<baralho>.js`, cada chunk é `['id', 'categoria', 'português', 'inglês', 'frase de exemplo']`.
**O `id` nunca muda nem é reaproveitado**, porque é nele que o progresso fica gravado. Texto pode ser corrigido à vontade.

### Acrescentar uma pessoa

Uma linha em `js/profiles.js`. Para um baralho novo, crie `js/decks/novo.js` e inclua o `<script>` no `index.html`.

## Progresso

Fica salvo **no navegador de cada aparelho** (`localStorage`, chave `cs_profile_<perfil>`). Como cada pessoa usa o próprio celular, isso basta. Para trocar de aparelho ou guardar uma cópia de segurança: **Progresso → Exportar** e, no outro aparelho, **Importar**.

```json
{
  "cards": { "<id>": { "box": 0, "reps": 0, "lapses": 0, "due": "AAAA-MM-DD" } },
  "streak": 0, "longestStreak": 0, "lastDoneDate": "AAAA-MM-DD",
  "log": { "AAAA-MM-DD": { "reviewCount": 0, "newCount": 0, "done": true } },
  "settings": { "pace": 6 }
}
```

## Testar no computador

```bash
python3 -m http.server 8765
```

Depois abrir `http://localhost:8765`. Abrir o `index.html` direto pelo Finder também funciona, mas o microfone exige `localhost` ou `https`.

## Histórico

1. Criado no claude.ai: chunks + Leitner, perfis Felipe e Arthur, abas Hoje, Baralho, Progresso e Método.
2. Baralhos ampliados, revisão bônus, categoria História Mundial para o Arthur.
3. Perfil da Dayane e módulo comum de viagem, colocado no início de todos os baralhos.
4. Exercícios variados, shadowing com microfone, ajustes de voz e atalhos de teclado.
5. Microfone também na revisão; descoberto o bloqueio de microfone do claude.ai.
6. **25/09/2026, projeto no GitHub**:
   - saiu do claude.ai para o GitHub Pages, com microfone;
   - conteúdo separado em arquivos;
   - perfis cadastrados num lugar só;
   - instalação como app;
   - exportar e importar o progresso;
   - progresso do Felipe migrado.

   Correções:
   - o erro de permissão do microfone aparecia como "não ouvi nada";
   - a legenda da aba Progresso mostrava a contagem da caixa vizinha, e os dominados sumiam da barra;
   - o domingo livre zerava a sequência;
   - o sábado não era só de revisão;
   - as caixas 0 e 1 tinham a mesma cor;
   - "Alget" virou Astton Medical;
   - textos de tela sem travessão.

7. **25/09/2026, segunda leva (metodologia)**:
   - o chunk novo agora é produzido (fala ou digitação), não só reconhecido;
   - exercício "chunk na frase";
   - 21 conversas para ouvir e fazer role-play;
   - intervalos menos duros;
   - metas por nível A1 a B1;
   - aviso de que o microfone mede clareza, não sotaque.

8. **25/09/2026, terceira leva (conteúdo)**:
   - +60 chunks para cada perfil (Felipe 138, Arthur 132, Dayane 84), em ordem de nível A1 → B1;
   - baralho da Dayane: filmes, séries e cultura;
   - 30 conversas novas (51 no total);
   - 2 variações por chunk (612 frases) e exercício de substituição;
   - 5 frases pouco naturais trocadas (ids mantidos) e 15 exemplos ajustados;
   - guia de conteúdo e verificador automático.

## Próximas levas

- Novo pacote quando o painel avisar que um baralho está quase dominado (seguir `docs/guia-de-conteudo.md`).
