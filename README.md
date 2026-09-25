# Chunk Sprint

Inglês em **chunks** (blocos de frase prontos, do jeito que um nativo fala) com **repetição espaçada**, para a família praticar todo dia. Cada pessoa tem seu perfil, seu baralho e seu progresso.

Página estática (HTML, CSS e JavaScript puro, sem build e sem dependências). Roda no GitHub Pages, e lá o **microfone funciona**. No claude.ai não funcionava porque a plataforma bloqueia o microfone de qualquer página hospedada nela.

## Como usar

- Abrir o link do GitHub Pages no **Safari (iPhone/Mac)**, **Chrome** ou **Edge**. O Firefox não reconhece fala.
- No iPhone: botão Compartilhar → **Adicionar à Tela de Início**. Vira um ícone e abre como app.
- Primeira vez: ⚙️ → **Testar microfone**. Se o navegador bloquear, a própria tela diz onde liberar.

## Método

1. **Aquecimento**: revisão dos chunks que venceram hoje. Fale antes de virar a carta; dá para gravar, e o app sugere Errei, Difícil ou Fácil.
2. **Chunks novos**: 4, 6 ou 9 por dia, cada um com áudio, exemplo e checagem rápida.
3. **Prática ativa**: digitar, montar a frase, completar lacuna, múltipla escolha e ditado. Fica mais difícil conforme o chunk sobe de caixa.
4. **Shadowing**: ouvir, falar junto e gravar para comparar.

Leitner com 6 caixas e intervalos de `[1, 2, 4, 7, 14, 30]` dias. Acertou sobe, errou volta para a caixa 0.

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
| `js/migracao.js` | Progresso trazido do claude.ai (entra uma vez só) |
| `sw.js`, `manifest.webmanifest`, `icons/` | Instalar como app e abrir sem internet |

### Acrescentar conteúdo

Em `js/decks/<baralho>.js`, cada chunk é `['id', 'categoria', 'português', 'inglês', 'frase de exemplo']`.
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

## Próximas levas

- **Metodologia**:
  - produzir o chunk novo em vez de só reconhecê-lo;
  - vários exemplos e substituição por chunk;
  - mini-diálogos para ouvir;
  - role-play falado;
  - intervalos menos duros depois de um erro;
  - níveis A1 a B1.
- **Conteúdo**:
  - baralhos maiores (hoje dão cerca de 2 semanas no ritmo padrão);
  - interesses da Dayane;
  - revisão das frases que soam pouco naturais.
