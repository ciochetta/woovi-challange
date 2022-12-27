
# Solicitar crédito

Atividade onde um usuário solicita crédito para nós.


Esse processo deve evoluir quando a gente for lidar com outras formas de crédito. 

## Pre-requisitos

Usuário
- Conta de crédito
- Identidade <a href="./prova_de_identidade.md">provada</a>

## Visão geral

Cliente solicita o crédito.

Solicitação é analizada e um decisão é tomada.

Cliente recebe feedback da solicitação.

## Processo

=> Cliente solicita o crédito

Do lado do usuário, pode ser bem simples, a gente coloca um botão "solicitar crédito", ele só clica em um botão e confirma que quer dar início ao processo.


Um campo de texto de observações pode ser útil, para facilitar a comunicação.

Como o usuário vai estar logado no sistema, não é necessário pedir para ele fornecer as informações dele de novo, estou supondo que a gente já coletou isso em outra atividade (como sign in, que não está especificada nesse repositório)

=> É criado no nosso sistema um <a href="../models/solicitacao_de_credito.md">documento de solicitação de crédito</a>

=> Análise e decisão sobre a solicitação



Analista (da Woovi?) olha a solicitação e toma uma decisão. (Essa parte do processo pode eventualmente ser automatizada, acho que no começo vamos querer olhar cada solicitação individualmente para criarmos uma heuristica)

=> Feedback sobre a solicitação

