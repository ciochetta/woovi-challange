
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

Antes de chegar em um analista humano, vamos ter critérios de eliminação automática, minha sugestão é:
- Score mínimo
- Data da última solicitação (para evitar spam)

Caso, a solicitação não seja automaticamente indeferida, ela fica aguardando análise.

Um analista nosso olha a solicitação e toma uma decisão de deferir ou indeferir o pedido de crédito, assim como o valor que vai ser disponibilizado.

No começo e para os casos de "cartão" de crédito, o valor provavelmente vai ser tirado de uma formula baseada no score do cliente e no volume de capital que ele costuma movimentar. Eu prefiro não entrar em detalhes a respeito disso porque eu realmente não sei como fazer essa conta.

Essa parte do processo pode eventualmente ser mais automatizada, acho que no começo vamos querer olhar cada solicitação individualmente para criarmos uma heuristica.

Caso o analista decida indeferir a solicitação, ele escreve uma nota em um campo de observações.

Caso ele decida deferir a solicitação, vamos atualizar também a conta de crédito do usuário com o valor.

=> Feedback sobre a solicitação

O cliente recebe um feedback na conta dele (pode ser uma notificação no nosso aplicativo) dizendo o que houve com a solicitação dele.