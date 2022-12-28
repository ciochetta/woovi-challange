# Conta de crédito

Esse documento vai conter as principais informações sobre o usuário de crédito por pix.

_Modelo_

```json
{
    "id": "5i4uy9trekof02394j",
    "document": "111.111.111-11",
    "isVerified": true,
    "creditValue": 24324.40,
    "creditUsed": 1111.20
}
```

## Propriedades

### Id

Chave primária, pode ser o id auto-definido pelo DBMS.

### Document

CPF ou CNPJ do cliente.

### isVerified

Booleano para indicar se essa conta já passou pelo processo de <a href="../atividades/prova_de_identidade.md">verificação de identidade</a>

Falso por padrão.

### Credit Value

Valor de crédito total de para um cliente.

Esse valor é atualizado quando um cliente tem uma solicitação de crédito deferida.

Mas caso a gente precise reconstruir o banco de dados a partir 