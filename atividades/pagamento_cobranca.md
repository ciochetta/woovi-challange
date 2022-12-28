# Pagar cobrança

Essa atividade descreve o processo de pagamento de uma cobrança, ou seja, como o cliente final faz o pagamento de um produto ou serviço usando esse sistema.

## Pre-requisitos

Usuário
- Conta de crédito
- Identidade <a href="./verificacao_identidade.md">provada</a>
- <a href="./solicitacao_credito.md">Solicitação de crédito</a> aprovada

## Processo

=> Cliente decide a quantidade de parcelas que vai fazer o pagamento e se vai dar uma entrada e confirma a compra.

A tela inicial do desafio já tem a opção de parcelas, vamos manter ela.

Acho importante adicionar quanto de juros é incidido em cada uma das opções de parcelamento, por uma questão de UX.

Além disso, vamos adicionar uma opção de entrada, ou seja, quanto o cliente quer pagar à vista.

Quando a transação for iniciar, começamos uma conexão de websocket (ou outro protocolo de comunicação bidirecional), até que o status seja "aguardando parcelas", essa comunicação fica aberta (ou é reaberta, caso necessário) e o front-end é notificado de todas as mudanças de status.

Uma vez que a requisição chega no nosso servidor, vamos criar uma <a href="../models/transacao.md">transação</a> com o status de criada.

A partir desse momento, já deve haver um worker trabalhando na <a href="./atualizacao_transacao.md">atualização dessa transação</a>.

O usuário aguarda a autorização e se houver uma entrada, segue para etapa de aguardo de entrada.

=> Caso tenha uma entrada no pagamento, o cliente precisa dar essa entrada imediatamente, vamos enviar um query code para a tela dele, assim com o código copia-e-cola.

O dinheiro é enviado para a conta do comerciante.

=> Cliente é "liberado", ou seja ele já deve ter seu produto ou serviço em mãos.

Se houverem parcelas a serem pagas, elas deverão ser pagas através da atividade de pagar fatura de crédito, descrita no <a href="../system.md">documento principal do sistema</a>.