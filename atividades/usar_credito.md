# Usar Crédito

Essa atividade descreve como funciona o uso do crédito.

## Pre-requisitos

Usuário
- Conta de crédito
- Identidade <a href="./prova_de_identidade.md">provada</a>
- <a href="./solicitacao_credito.md">Solicitação de crédito</a> aprovada

## Visão geral

=> Cliente decide a quantidade de parcelas que vai fazer o pagamento e se vai dar uma entrada e confirma a compra.

A tela inicial do desafio já tem a opção de parcelas, vamos manter ela.

Acho importante adicionar quanto de juros é incidido em cada uma das opções de parcelamento.

Além disso, vamos adicionar uma opção de entrada, ou seja, quanto o cliente quer pagar à vista.

Quando a transação for iniciar, começamos uma conexão de websocket (ou outro protocolo de comunicação bidirecional), até que o status seja "aguardando parcelas", essa comunicação fica aberta (ou é reaberta, caso necessário) e o front-end é notificado de todas as mudanças de status.

Uma vez que a requisição chega no nosso servidor, vamos criar uma <a href="../models/transacao.md">transação</a> com o status de criada.

Um worker de autorização "pega" a transação e faz o <a href="../autorizacao.md">processo de autorização</a>. No momento em que esse worker pegar a transação, ele já deve atualizar o status atual dela para autorizando.

__Problema de autorização__: Caso aconteça algum problema na autorização, o worker vai atualizar o status para não-autorizada e colocar uma nota explicando o que houve.

Caso a autorização dê certo, o worker deve avaliar qual é a próxima fase, se houver uma entrada na transação, ele muda o status para "aguardando entrada", caso contrário, ele troca para "enviando pagamento".

__Aguardando entrada__: Nesse estado, o sistema fica só aguardando o pagamento do pix de entrada, uma vez que o usuário der entrada, ele troca o status para "Enviando pagamento". É importante lembrar que esse repositório supõe um sistema de pagamentos via pix, então não acho que valha a pena elaborar como ele vai interagir com o front-end e como ele vai notificar esse sistema, o que importa é que essa comunicação exista.

=> Caso tenha uma entrada no pagamento, o cliente precisa dar essa entrada imediatamente, vamos enviar um query code para a tela dele, assim com o código copia-e-cola.

O dinheiro é enviado para a conta do comerciante, e o worker muda o estado para "aguardando parcelas". Nesse momento a comunicação bidirecional é encerrada, podemos mostrar o feedback de compra concluída para o usuário e supor que ele recebeu seu produto ou serviço. 

A partir daqui, o "uso" do crédito está concluído, ainda existe uma tarefa de follow up, <a href="./pagar_credito.md">pagar a conta do crédito</a>