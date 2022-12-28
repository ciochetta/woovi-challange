# Pagamento de cobrança

Modelo relacional entre transações e cobranças.

Representa a relação 1 cobrança para N transações.

```json
{
    "chargeId": "diogudsiog20u93igr09",
    "transactionId" : "diogudsiog20u93igr09"
}
```

## Propriedades

### Charge Id

Referência à <a href="./cobranca.md">cobrança</a> que está sendo paga.

### Transaction Id

Referência à <a href="./transacao.md">transação</a>.