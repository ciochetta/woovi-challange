# Movimentação

Esse documento representa uma movimentação de dinheiro/crédito dentro do nosso sistema.

Esse modelo deve ser usado dentro de um array, dentro de um <a href="./transacao.md">documento de transação</a>.

```json
{
    "id": 2,
    "value": 5,
    "accId": "9fi024o9og04lp3woi",
    "accRole": "processor",
    "type": "processing fee",
    "transferDate": 34567898765,
    "dueDate": 34567898765,
    "status": 2
}
```

## Propriedades

### Id

Valor inteiro, offset do array no momento da criação.

Ele vai ser usado posteriormente para referenciar movimentações individualmente.

### Value

Valor em reais que foi ou será movimentado dessa conta.

Se o valor for positivo significa que a conta deve receber dinheiro, se for negativo, que deve ser cobrado esse valor.

### Account Id

Id da conta de crédito referenciada na movimentação.

### Account Role

Enumerador que representa o papel que essa conta está prestando nessa transação.

__Valores__
- Comprador: 1
- Comerciante: 2
- Processador: 3
- Financiador: 4

### Type

Enumerador que diz o que essa movimentação representa dentro da transação.

__Valores__
- Entrada: 0
- Venda: 1
- Taxa de processamento: 2
- Pagamento de parcela: 3
- Juros: 4

### Transfer Date

Data que a transferência foi feita.

### Due Date

Data em que a transferência deveria ser feita.

### Status

Enumerador que representa se essa movimentação já ocorreu ou ainda deve acontecer.

__Valores__
- Done
- Waiting