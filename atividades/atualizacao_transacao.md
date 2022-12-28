# Atualização da Transação

Essa atividade é feita de maneira automática pelo sistema.


## Processo

Uma vez que uma transação é criada, este processo inicia automaticamente.

__Transação criada__: Um worker de autorização "pega" a transação e faz o <a href="../autorizacao.md">processo de autorização</a>. No momento em que esse worker pegar a transação, ele já deve atualizar o status atual dela para autorizando.

__Problema de autorização__: Caso aconteça algum problema na autorização, o worker vai atualizar o status para não-autorizada e colocar uma nota explicando o que houve.

Caso a autorização dê certo, o worker deve avaliar qual é a próxima fase, se houver uma entrada na transação, ele muda o status para "aguardando entrada", caso contrário, ele troca para "enviando pagamento".

__Aguardando entrada__: Nesse ponto o sistema fica só aguardando o pagamento da entrada. Quando ela ocorre, o sistema autaliza o status para "Enviando pagamento".

O pagamento é enviado para a conta do comerciante, se houverem parcelas a serem pagas, o worker muda o estado para "aguardando parcelas". 

__Aguardando parcelas__: Nesse estado, o sistema fica apenas aguardando pelo pagamento das movimentações individuais através da atividade de pagar fatura de crédito, descrita no <a href="../system.md">documento principal do sistema</a>.

Uma vez que todas as parcelas estiverem pagas, o worker deve alterar o status para "Concluído", de forma que essa transação não seja mais processada por workers dessa atividade no futuro.

__Falha__: Caso haja qualquer problema durante alguma das fases, a transação entra em estado de falha e uma nota é adicionada na troca de status para feedback e debug.