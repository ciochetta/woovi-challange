# Transação

Esse documento representa uma transação de crédito.

_Modelo_

```json
{
    "id":"9gfuh9ids89f3209f8ui0",
    "movements":["..."],
    "purchaseValue": 100,
	"entry": 20,
	"fee": 0.05,
	"interest": 0.05,
	"installmentNumber": 2,
	"status": [
		{
			"value" :2,
			"note": "",
			"date":20392340
		}
	]
}
```

## Propriedades

### Id

Chave primária, pode ser o id auto-definido pelo DBMS.

### Movements

Parte mais importante desse documento, eu escrevi <a href="./movimentacao.md">outro documento</a> para detalhar melhor.

Acho importante colocar aqui que provavelmente vamos ter um índice nessa coleção feita em cima desse array.

Link para uma documentação que pode ajudar => https://www.mongodb.com/docs/manual/core/index-multikey/

### Status

Status é um array de objetos que guarda o histórico do status de uma transação.

Os status são ordenados por data de criação de maneira decrescente, de maneira que o status atual é sempre o primeiro offset.

As propriedades do status são:

__Note__
Texto explicando o estado

Na prática, a nota só vai ser usada quando a transação da errado.

Talvez valha a pena criar uma tabela separada para isso.

__Date__
Data em que a troca de status ocorreu.

__Value__

O valor é um enumerador que diz o estado da transação.

__Estados__
- Criada: 0
- Autorizando: 1
- Autorizada: 2
- Não-autorizada: 3
- Aguardando entrada: 4
- Enviando pagamento: 5
- Aguardando parcelas: 6
- Concluída: 7
- Falha: 8

__Criada__
Transação chegou até nós e está esperando um worker iniciar a autorização.

__Autorizando__
Transação chegou na fase de autorização e já tem um worker trabalhando nela.

__Autorizada__
Transação já foi autorizada e está aguardando um worker.

__Não-autorizada__
Transação não foi autorizada e deu errado.

__Aguardando entrada__
Caso o cliente tenha optado por dar uma entrada no pagamento por crédito, aguardamos o pagamento da entrada antes de proceder com o processamento.

__Enviando pagamento__
Movimentando o dinheiro da conta do financiador para o comerciante.

__Aguardando parcelas__
Pagamos o comerciante e o cliente já deve ter seu produto/serviço? em mãos.

Mantemos nesse status enquanto houverem parcelas não-pagas dentro do array de movements.

__Concluída__
Todas as parcelas foram pagas e a transação foi concluída com sucesso.

__Falha__
Houve algum problema na transação.

### Purchase Value

Valor à vista da compra.

### Entry

Entrada (o que o cliente pagou no momento da compra via pix)

### Fee

Taxa de processamento da transação, expressa em decimais 

_Exemplo: 0.3 representa uma taxa de 30%_

### Interest

Taxa de juros que vai ser aplicada no valor que foi pago no crédito, expressa em decimais

_Exemplo: 0.05 representa uma taxa de 5%_

### Installment Number

Quantidade de parcelas.




## Exemplo

Eu fiz um script em node que pega as propriedades de uma transação e transforma em um array de movimentações, ele deve ajudar a entender o que cada uma das propriedades faz e como o resultado final deve se parecer.

<a href="../exemplos/movimentacoes.js">Link para o script</a>

## Nota importante

Como dito antes, essa estrutura de dados usa um array de documentos aninhados para representar as movimentações e os status.

Isso quer dizer que podemos ter problemas de performance ao fazer queries para essas propriedades.

Minha recomendação é fazer um teste para avaliar se vale a pena manter essa estrutura ou separar em várias tabelas.