# Documento de solicitação de crédito

Esse documento serve para representar soliticações de créditos dos nossos clientes


_Modelo_

```json
{   
    "id":"jf249308guj309q0i",
    "creation":234567654322345,
    "accId":"dlkfjg34o30392ifkjd",
    "status":0,
    "creditGranted": 9324.21
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

__Estados__
- Solicitação feita: 0
- Solicitação deferida: 1
- Solicitação indeferida automaticamente: 2
- Solicitação indeferida manualmente: 3

### Credit Granted

Valor em reais de crédito que foi deferido por conta dessa solicitação.