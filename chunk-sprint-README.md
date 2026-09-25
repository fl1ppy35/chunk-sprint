# Chunk Sprint

**Ferramenta de inglês em blocos ("chunks") com repetição espaçada, para uso diário de longo prazo por várias pessoas de uma mesma família.**

Link do app (artefato publicado): https://claude.ai/artifact/NWQNPQY66KatZiUDCkK1xW

Última atualização deste documento: 2026-09-23

---

## 1. O que é

Chunk Sprint é uma página web autocontida (HTML + CSS + JS, sem build, sem dependências externas de runtime) que ensina inglês através de **chunks** — blocos de frase prontos, do jeito que um falante nativo realmente usa, em vez de palavras soltas — combinados com **repetição espaçada** (sistema Leitner) para fixar o conteúdo no longo prazo.

Foi criada para o Felipe aprender inglês de negócios rapidamente, e desenhada desde o início para ser usada por mais de uma pessoa da família, cada uma com seu próprio baralho de conteúdo e seu próprio progresso.

## 2. Método

- **Chunking**: cada item do baralho é uma frase pronta (ex: *"I'd like to introduce myself"*), não uma palavra isolada. O cérebro guarda língua em blocos, não em peças montadas na hora.
- **Leitner (repetição espaçada)**: cada chunk vive numa caixa de 0 a 5. Acertar sobe de caixa (intervalo de revisão maior); errar volta pra caixa 0. Isso concentra o tempo de estudo no que ainda não foi fixado.
  - Intervalos por caixa (dias): `[1, 2, 4, 7, 14, 30]`.
  - Caixa 5 = "dominado", mas continua voltando a cada 30 dias pra não enferrujar.
- **Sessão diária (30–60 min)**, em quatro blocos sequenciais:
  1. **Aquecimento** — revisão dos chunks que venceram hoje (Leitner). Em boxes mais altos, às vezes vem em modo "só de ouvido" (ouve e tenta lembrar o significado/escrita antes de virar). Opcionalmente dá pra **gravar a resposta em voz alta** antes de virar a carta — veja a seção 5.
  2. **Chunks novos** — introdução de conteúdo novo, no ritmo escolhido (4/6/9 por dia), com uma checagem rápida de múltipla escolha logo depois de cada um.
  3. **Prática ativa** — exercícios variados que mudam de tipo conforme a caixa Leitner do chunk: digitar de memória, múltipla escolha, montar a frase (arrastando/tocando as palavras na ordem certa), completar lacuna, ou ditado (ouvir e escrever o que ouviu). Errar reenvia o chunk pro fim do bloco e ele volta amanhã na revisão.
  4. **Shadowing** — ouve e repete em voz alta, com opção de gravar a pronúncia (mesma limitação de microfone da seção 5).
- **Ritmo semanal sugerido**: segunda a sexta com sessão completa, sábado só revisão, domingo livre (filme/jogo/conversa em inglês, sem cobrança).
- **Revisão bônus**: quando não há nada novo nem devido, o app oferece revisar chunks já aprendidos fora do calendário, em vez de travar numa tela vazia.
- **Configurações de voz** (ícone ⚙️ no topo): escolher a voz em inglês do aparelho, ajustar velocidade da fala e ligar/desligar áudio automático ao mostrar um chunk. Atalhos de teclado: Enter avança/confirma, Espaço repete o áudio, 1/2/3 avaliam ou escolhem opções de múltipla escolha.

Tudo isso está documentado também dentro do próprio app, na aba **Método**.

## 3. Perfis e baralhos

O app tem um seletor de perfil no topo. Cada perfil tem baralho e progresso completamente independentes (armazenados separadamente), mas compartilham a mesma mecânica.

| Perfil | Foco principal | Categorias próprias | Chunks próprios |
|---|---|---|---|
| **Felipe** | Inglês de negócios (vendas, cotação, importação de equipamento médico) | Primeiro Contato, Cotações e Preços, Negociação, Pedidos e Logística, E-mails e Follow-up, Telefonemas e Reuniões, Problemas e Soluções, Atendimento e Suporte, Viagens e Feiras | 54 |
| **Arthur** | Games e tecnologia | Entrando no Jogo, Durante a Partida, Montando o PC, Assistindo Streams, Encontro e Despedida, Torneios e Times, Configurações e Software, História Mundial | 48 |
| **Dayane** | Ainda a definir (áreas de interesse dela entram depois) | — | 0 (por enquanto só o módulo comum) |

Além do baralho próprio, **todo perfil começa pelo mesmo módulo comum de inglês de viagem e dia a dia** (24 chunks, 4 categorias), porque a família planeja viagens internacionais e esse é o inglês de sobrevivência que qualquer um precisa antes de entrar em temas mais específicos:

- Conversas do Dia a Dia
- Compras e Serviços
- Pedindo Informações
- Aeroporto e Imigração

Esse módulo aparece **primeiro** na ordem de categorias e é o primeiro conteúdo novo introduzido nas sessões — só depois disso o app passa para o tema principal de cada pessoa. Total de chunks por perfil hoje: Felipe 78, Arthur 72, Dayane 24 (crescendo conforme os interesses dela forem definidos).

Como o módulo de viagem é o mesmo conjunto de chunks reaproveitado nos três baralhos, mas o progresso é gravado por perfil, cada pessoa avança nele de forma independente — o Felipe pode já ter dominado "Aeroporto e Imigração" enquanto o Arthur ainda está começando, sem conflito.

## 4. Estrutura do app (abas)

- **Hoje** — painel do dia: sequência (streak), quantos chunks vencem hoje, quantos novos, botão para iniciar a sessão, seletor de ritmo (Leve/Padrão/Intenso).
- **Baralho** — navegação livre por categoria, com bolinha de status por chunk (cor = caixa Leitner atual) e opção "já sei isso" pra pular direto pra uma caixa mais avançada.
- **Progresso** — sequência atual e recorde, distribuição de chunks por caixa Leitner, mapa de calor dos últimos 28 dias de prática.
- **Método** — a explicação completa do método (chunking, Leitner, ritmo semanal, dicas de imersão fora do app, como o conteúdo é organizado entre os três baralhos, atalhos de teclado).

## 5. Microfone: onde funciona e onde não funciona

O app usa o microfone (reconhecimento de fala do navegador) em dois lugares — na etapa de Revisão (gravar a resposta antes de virar a carta, com sugestão automática de nota Errei/Difícil/Fácil a partir do que foi dito) e no Shadowing (treino de pronúncia).

**Dentro do claude.ai, essas duas coisas não funcionam.** O próprio claude.ai envia um cabeçalho de segurança (`Permissions-Policy: microphone=()`) que bloqueia acesso a microfone em qualquer página hospedada lá, artefatos incluídos — o navegador nem chega a mostrar o pedido de permissão, ele barra antes. Não é um bug do código do app; é uma restrição da plataforma. Quando o microfone é recusado, o app mostra "Sem permissão de microfone" e deixa seguir normalmente pelo fluxo de sempre (autoavaliação de ouvido, sem gravação).

Pra ter o microfone funcionando de verdade, existe uma **versão avulsa** do mesmo app — arquivo HTML autocontido, sem depender do claude.ai — que pode ser hospedada em qualquer lugar:

- **Teste rápido, sem criar conta**: [app.netlify.com/drop](https://app.netlify.com/drop) — arrasta o arquivo `.html` e recebe um link público na hora.
- **Link permanente**: GitHub Pages (subir o arquivo como `index.html` num repositório e ativar o Pages), ou conectando Netlify/Vercel pelas configurações do claude.ai pra deploys direto por aqui.

**Trade-off importante**: a versão de dentro do claude.ai sincroniza o progresso automaticamente entre aparelhos (via banco de dados do artefato). A versão avulsa não tem isso — o progresso fica só no `localStorage` daquele navegador específico, sem sincronizar entre celular e computador. Por isso a recomendação é manter o link do claude.ai como o principal para o dia a dia, e a versão avulsa como um extra só para praticar pronúncia com microfone quando fizer sentido.

## 6. Persistência de dados

O progresso é salvo através da capacidade `db` do Artifact (banco de documentos do próprio artefato publicado), então continua disponível em qualquer dispositivo onde o link for aberto, sem depender do navegador local. Se essa capacidade não estiver disponível por algum motivo (ou na versão avulsa fora do claude.ai), o app cai para `localStorage` como reserva (nesse caso o progresso fica só naquele navegador).

Estrutura salva por perfil (`profiles/<perfil>` no banco do artefato):

```json
{
  "cards": { "<chunkId>": { "box": 0-5, "reps": n, "lapses": n, "due": "YYYY-MM-DD" } },
  "streak": n,
  "longestStreak": n,
  "lastDoneDate": "YYYY-MM-DD",
  "log": { "YYYY-MM-DD": { "reviewCount": n, "newCount": n, "done": true } },
  "settings": { "pace": 4|6|9 }
}
```

O conteúdo do baralho (textos dos chunks) fica embutido no código do app, **separado** do progresso — por isso é seguro adicionar, remover ou reorganizar chunks a qualquer momento sem apagar o histórico de ninguém.

## 7. Como estender

- **Adicionar chunks a um perfil existente**: incluir novos objetos `C(id, categoria, pt, en, exemplo)` no array de chunks daquele perfil e, se for categoria nova, adicionar `{key, label}` no array de categorias correspondente.
- **Adicionar um novo perfil**: criar um novo array de chunks/categorias (ou reaproveitar o módulo de viagem), registrar em `PROFILES`, e incluir a chave nova nos poucos pontos do código que hoje listam os perfis manualmente (troca de perfil no topo, carregamento inicial do progresso).
- **Mudar o ritmo de aprendizado**: o número de chunks novos por dia é ajustável na aba Hoje (4/6/9); os intervalos do Leitner ficam na constante `INTERVALS` no código.
- **Quando um baralho estiver quase todo dominado**: o app já sinaliza isso no painel do dia. Novos pacotes de chunks podem ser pedidos a qualquer momento nesta conversa — como o progresso é gravado por `chunkId` e fica separado do conteúdo, adicionar chunks novos nunca afeta sequência, histórico ou caixas já conquistadas.

## 8. Stack técnica

Página HTML única (publicada via Artifact do Claude), CSS com tokens de tema claro/escuro, JavaScript vanilla sem framework nem bundler. Tipografia: Fraunces (títulos), IBM Plex Sans (texto) e IBM Plex Mono (números), via Google Fonts. Áudio de pronúncia via Web Speech API nativa do navegador (sem serviço externo); reconhecimento de fala via `SpeechRecognition`/`webkitSpeechRecognition` (sujeito à restrição de microfone da seção 5).

Os cliques nos botões de avaliação da Revisão (Errei/Difícil/Fácil) são ligados por delegação de evento num único listener fixo, não religados a cada tela — evita que fiquem sem resposta se algo mais falhar no meio da renderização. Qualquer erro inesperado ao desenhar uma tela cai num aviso recuperável ("Tentar de novo") em vez de travar o app em silêncio.

## 9. Histórico de decisões

1. Criação inicial: método de chunks + Leitner, dois perfis (Felipe/Filho), baralhos de vendas e de games, abas Hoje/Baralho/Progresso/Método.
2. Perfil "Filho" renomeado para **Arthur**; baralhos ampliados (+12 chunks cada) com categorias de suporte/feiras (Felipe) e times/software (Arthur); adicionada lógica de "revisão bônus" para uso de longuíssimo prazo sem travar quando o baralho está em dia.
3. Categorias "Chat e Discord" e "Comprando Peças" removidas do baralho do Arthur; adicionada categoria **História Mundial**, deixando o baralho dele menos restrito a games.
4. Adicionado o terceiro perfil, **Dayane** (depois corrigido de "Daiane"), e criado o **módulo comum de viagem e dia a dia** (24 chunks / 4 categorias), incluído nos três baralhos, motivado pelo plano de viagens internacionais da família.
5. Módulo de viagem reordenado para o **início** de todos os baralhos (Felipe e Arthur incluídos), para que o básico de sobrevivência em inglês venha antes dos temas mais avançados e específicos de cada um.
6. Adicionado motor de exercícios variados na Prática ativa (digitar, múltipla escolha, montar frase, ditado, completar lacuna), reconhecimento de fala no Shadowing, controles de voz/velocidade (⚙️) e atalhos de teclado.
7. Corrigido bug em que os botões Errei/Difícil/Fácil da Revisão paravam de responder a clique — ligação desses botões passou a ser por delegação de evento fixa, e qualquer erro de renderização agora cai num aviso recuperável em vez de travar o app em silêncio.
8. Adicionado microfone também na etapa de Revisão: dá pra gravar a resposta antes de virar a carta, e o app sugere Errei/Difícil/Fácil automaticamente a partir do que foi dito (a decisão final continua sendo do usuário).
9. Descoberto que o microfone (Revisão e Shadowing) não funciona dentro do claude.ai — bloqueio de plataforma (`Permissions-Policy: microphone=()`), não bug do app. Criada uma **versão avulsa** do app (HTML autocontido) pra hospedar fora do claude.ai quando o microfone for necessário — ver seção 5.

## 10. Próximos passos em aberto

- Definir as áreas de interesse da Dayane para montar o baralho específico dela, no mesmo padrão dos outros dois.
- Decidir se vale a pena manter a versão avulsa hospedada de forma permanente (Netlify/Vercel/GitHub Pages) para uso rotineiro do microfone, ou deixá-la só como teste ocasional.
- Continuar expandindo os baralhos conforme forem sendo dominados (o app já avisa quando isso acontece).
