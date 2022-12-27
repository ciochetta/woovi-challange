# Guidelines

Eu comecei tentando fazer uma definição formal do que a gente está tentando alcançar com esse sistema, mas acabei divagando em outra coisas, e esse documento virou basicamente um brainstorm do que esse sistema deveria tentar ser.

Eu tentei ordenar as ideias por importância.

<hr>

## Adoção

Queremos fazer parte do dia-a-dia das pessoas

Esse sistema deveria ter o objetivo (ousado) de ser o principal sistema de crédito em território nacional.

Para isso precisamos de ele seja fácil de adotar para todos os tipos de clientes e seja fácil de compreender e usar.

### Integração possível com o sistema de crédito atual

Para facilitar a entrada de pessoas que já estão no domínio e incentivar adoção pela indústria.

### Transparência 

"Todo mundo" gosta de transparência, aumenta a sensação de que o sistema em que as pessoas estão engajando é justo. 

Se possível, acho que deveríamos fornecer transparência a respeito dos processos internos do sistema, mas isso é um tradeoff direto com a segurança do sistema, então, precisa ser analizado em nível de atividade.

### Confiança

O sistema precisa ser projetado para evitar Fraude e Inandimplência

Esse sistema jamais vai evoluir e ser adotado por financiadores se eles sentirem que vão tomar golpes. 


<hr>

## Flexibilidade

Crédito por pix não existe ainda, o que quer dizer que ele pode ser qualquer coisa.

Sermos flexíveis significa que esse sistema deve evoluir de forma que a gente crie soluções específicas para problemas específicos dentro do domínio de crédito.


### Flexibilidade VS aversão à risco

Nós queremos nos aproveitar da flexibilidade de estarmos trabalhando com um sistema 100% digital que não é regulado, mas ao mesmo tempo mitigar a aversão à risco que a ideia pode trazer.

O lado negativo é que a gente vai precisar se esforçar para vencer a aversão ao risco que é normal quando se trata de instituições financeiras, uma coisa que vem à mente é como a gente vai se comparar com Web3, lá também existe bastante flexibilidade, mas a imagem da Web3 é de que é um ambiente propício principalmente para criminosos.


### Flexibilidade e operabilidade

Ao projetar o sistema, devemos ter em mente que ele vai mudar.

O que me veem à mente como principal característica de operabilidade é a migração de modelos de dados.

Para resolver isso, podemos usar event-sourcing para construir bancos de dados conforme necessário.