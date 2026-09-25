# Chunk Sprint: regras para o Claude

## Conferência de repositório (obrigatória)

Este projeto só existe em **um** lugar no GitHub: `fl1ppy35/chunk-sprint` (arquivo `.repo-esperado`).
O Felipe tem outros projetos em andamento na mesma máquina (ERP Astton, curso, site) e já houve
um repositório criado por engano na pasta pessoal. Antes de **qualquer** commit ou push:

1. `git rev-parse --show-toplevel` tem que ser esta pasta (`.../Projetos Felipe/Inglês`).
2. `git remote get-url origin` tem que apontar para `github.com/fl1ppy35/chunk-sprint`.
3. `git config core.hooksPath` tem que responder `.githooks` (é o que liga a trava abaixo).
4. Mostrar ao Felipe a lista do que vai subir e esperar o ok dele antes do push.

Se qualquer item não bater: parar e avisar, sem "consertar" remoto nem pasta por conta própria.

A trava automática fica em `.githooks/pre-push`: ela recusa push para qualquer outro repositório
ou para outra branch que não seja `main`, inclusive pelo GitHub Desktop. Num clone novo, ligar com
`git config core.hooksPath .githooks`.

## Publicação

`main` = site no ar (GitHub Pages, raiz do repositório). Não existe branch de staging aqui.
Depois do push, o Pages leva uns 2 minutos; conferir o site antes de dizer que está no ar.
