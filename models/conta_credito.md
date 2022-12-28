# Conta de crédito

Esse documento vai conter as principais informações sobre um usuário de crédito por pix.

_Modelo_

```json
{
    "id": "5i4uy9trekof02394j",
    "document": "111.111.111-11",
    "isVerified": true,
    "creditValue": 24324.40,
    "creditUsed": 1111.20,
    "bankAcc":{}
}
```

## Propriedades

### Id

Chave primária, pode ser o id auto-definido pelo DBMS.

### Document

CPF ou CNPJ do cliente.

### isVerified

Booleano para indicar se essa conta já passou pelo processo de <a href="../atividades/verificacao_identidade.md">verificação de identidade</a>

Falso por padrão.

### Credit Value

Valor de crédito total de para um cliente.

Esse valor é atualizado quando um cliente tem uma solicitação de crédito deferida.

Mas caso a gente precise reconstruir o banco de dados a partir 

### Bank Account

Objeto com informações a respeito da conta do banco relacionada com essa conta de crédito.

Aqui provavelmente que vai ficar a chave pix de recebimento.

Assim como agência, conta etc.

Eu não vou entrar em detalhes porque eu não sei exatamente o que é necessário e eu suponho que seja padronizado.