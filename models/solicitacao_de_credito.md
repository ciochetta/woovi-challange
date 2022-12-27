# Documento de solicitação de crédito

Esse documento serve para representar soliticações de créditos dos nossos clientes


_Modelo_

```json
{
    "id":"id aleatório",
    "creation":234567654322345,
    "accId":"id da conta que fez a solicitação",
    "status":0
}
```


## Propriedades

### Id

Chave primária, pode ser o id auto-definido pelo DBMS.

### Creation

Data de criação em milisegundos.

### AccId

Chave estrangeira, Id da conta do usuário que está solicitando crédito.

Vamos usar esse Id para fazer uma query do score de crédito que o usuário tem conosco.

### Status

Enumerador que contém os possíveis estados da solicitação de crédito.

