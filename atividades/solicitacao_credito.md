
# Solicitar crédito

Atividade onde um usuário solicita crédito para nós.

Esse processo deve evoluir quando a gente for lidar com outras formas de crédito.

## Pre-requisitos

Usuário
- Conta de crédito
- Identidade <a href="./verificacao_identidade.md">provada</a>

## Visão geral

Cliente solicita o crédito.

Solicitação é analizada e um decisão é tomada.

Cliente recebe feedback da solicitação.

## Processo

=> Cliente solicita o crédito

Do lado do usuário, pode ser bem simples, a gente coloca um botão "solicitar crédito", ele só clica em um botão e confirma que quer dar início ao processo.

Um campo de texto de observações pode ser útil, para facilitar a comunicação.

Como o usuário vai estar logado no sistema, não é necessário pedir para ele fornecer as informações dele de novo, estou supondo que a gente já coletou isso em outra atividade (como sign in, que não está especificada nesse repositório)

=> É criado no nosso sistema um <a href="../models/solicitacao_credito.md">documento de solicitação de crédito</a>

=> Análise e decisão sobre a solicitação

A parte de análise está descrita no <a href="../system.md">documento principal do sistema</a>.

=> Feedback sobre a solicitação

O cliente recebe um feedback na conta dele (pode ser uma notificação no nosso aplicativo) dizendo o que houve com a solicitação dele.