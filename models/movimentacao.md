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

### Acc(ount) Id

Id da conta de crédito referenciada na movimentação.

### Acc(ount) Role

Enumerador que representa o papel que essa conta está prestando nessa transação.

__Valores__
- Comprador: 1
- Comerciante: 2
- Processador: 3
- Financiador: 4

### Type

Enumerador que diz o que essa movimentação representa dentro da transação.

