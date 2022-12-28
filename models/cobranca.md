# Cobrança

Uma cobrança representa um produto ou serviço que está sendo oferecido, assim como o valor a ser pago.

```json
{
    "id": "09u4gi3290g54u3g",
    "accId": "2f3i0f92i30f9i",
    "value": 343.2,
    "url": "pagar-mercadoria-X"
}
```

## Propriedades

### Id

Chave primária, pode ser o id auto-definido pelo DBMS.

### Acc(ount) Id

Referência à <a href="./conta_credito.md">conta</a> do comerciante que gerou a cobrança.

### Value

Valor em reais da cobrança.

### Url

Url compartilhável da cobrança.