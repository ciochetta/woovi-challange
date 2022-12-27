# Formula de score de crédito 

Essa fórmula vai ser a principal barreira contra inadimplência e fraude e tentar criar um sistema que não pode ser gamificado de maneira fácil e rápida é importante.

Segurança vs usabilidade é o principal tradeoff dessa fórmula.

Eu não vou especificar como essa fórmula deve ser pelas seguintes razões:

- Essa fórmula precisa ser descoberta e não projetada.
- Na prática, vamos precisar de várias versões dessa fórmula para casos de uso diferentes.

Então, ao invés disso, vou levantar princípios que eu acho que devem ser utilizados para guiar a criação da fórmula e variáveis que devem ser levadas em consideração.

## Princípios

### Importância

Quanto mais importante o nosso sistema for para um cliente, mais podemos confiar que ele não vai nos fraudar ou deixar de pagar o crédito.

### Sinergia com o sistema de crédito

Queremos que nosso sistema consiga trabalhar próximo do sistema que já existe, como se fosse uma extensão dele.

### Integração com a nossa comunidade

Pessoas/Instituições que tem um relacionamento melhor conosco são mais confiáveis do que desconhecidos.

## Variáveis

Sugestão de variáveis que podemos usar para calcular o score

### Consulta de crédito (no Serasa)

Com a ideia de aumentar a sinergia com o sistema de crédito que já existe e previnir fraudes, podemos usar o score do Serasa dentro da nossa formula, se o CPF ou CNPJ tiver um score baixo com o Serasa, é uma forte indicação de que nós também não queremos emprestar quantidades substanciais de dinheiro para essa pessoa/instituição.

### Tempo de uso 

Há quanto mais tempo o cliente usa o sistema, mais confiável ele é.


### Volume de capital transacionado

Quanto mais dinheiro alguém movimentou no sistema, mais podemos supor que ela usa esse sistema para fins relevantes.

Essa variável pode ser quebrada em duas: 
- Volume de capital que saiu dessa conta para outras.
- Volumet de capital recebido por essa conta.

### Volume de transações 

Se um cliente está transacionando dentro do nosso sistema com frequência, podemos assumir que ele está construindo um negócio em cima do nosso sistema.

Novamente, podemos quebrar essa variável em duas:
- Volume de transações para essa conta.
- Volume de transações originadas dessa conta.

### Variabilidade na relação com outras contas

A ideia é que essa variável diga com quantas contas diferentes essa conta se relacionou

Novamente, essa variável pode ser quebrada em duas:
- Variabilidade de contas que transferiram para essa conta.
- Variabilidade de contas que receberam transferências dessa conta.