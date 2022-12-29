# Sistema

O sistema é composto por quatro sub-sistemas que representam pedaços do domínio.

<a href="https://excalidraw.com/#json=Mgye-1jjityJIeNJlWejH,LO_jPQH62RLRGRvdvH-kiw">Diagrama da arquitetura</a>

__Legenda do diagrama__

Caixa branca = Serviço que vai precisar de uma solução com front-end e back-end.

Caixa verde = Serviço que pode rodar somente no back-end, se alguma interface for criada, vai ser para a administração do sistema em si.

Caixa roxa = Atividade complexa, com vários passos que está detalhada neste repositório.

Caixa amarela = Atividade simples, análoga à uma função/handler dentro de um serviço.

Caixa vermelha = Serviço que eu reconheço que precisaria exsitir, mas achei melhor não entrar em detalhes.

Caixa cinza = Serviço externo que é essencial para o funcionamento do sistema, mas que eu não tenho certeza da interface e portanto achei melhor não entrar em detalhes. 

Seta de uma atividade para um serviço = significa que essa atividade faz parte do serviço e deve ter pelo menos um endpoint relacionado.

Seta de uma atividade para outra = significa que essa atividade depende da outra. Se estiver escrivo "sync", significa que vai ser chamada uma query ou um comando. Se a estiver escrito async, significa que uma atividade consome um tópico onde a outra atividade publica.


## Nota

Acho importante dizer que quando uma atividade interage com algo que eu escolhi deliberadamente não detalhar, as descrições estão um pouco mais nebulosas, isso é de propósito, já que eu não tenho certeza das interfaces e de como esses sistemas vão funcionar, é melhor só dizer o que eles deveriam fazer em alto nível.

# Sistema de Cobrança

Esse sistema lida com a administração de cobranças e pagamentos.

Cobranças, nesse contexto são um produto ou serviço.

Pagamentos são a representação de uma transação comercial entre o cliente e uma cobrança.

## Atividades

### Criar cobrança

Rota REST que cria um <a href="./models/cobranca.md">documento de cobrança</a>.

### Consultar status de um pagamento de cobrança

Para essa atividade, imagino que serão necessárias duas formas de interação:

- Uma rota em REST que devolva o estado atual.
- Uma rota que permita cadastrar webhooks para enviar as atualizações.

O status do pagamento da cobrança é o status da transação.

Para conseguir os dados do status, esse sistema vai precisar consumir os Updates de Transação emitidos pelo Sistema de Transação.

### Pagar cobrança

Essa atividade tem um <a href="./atividades/pagamento_cobranca.md">documento dedicado à descrevê-la</a>.

# Sistema de Transação

Esse sistema é focado em processar e expor dados de <a href="./models/transacao.md">transações</a>.


## Atividades

### Criar transação

Rota REST que cria um <a href="./models/transacao.md">documento de transação</a>.

### Consulta de transações

Rota REST que retorna o resultado de uma pesquisa de transação.

Para conseguir essa informação, é necessário observar o tópico de update de transação para espelhar o que está acontecendo em um banco de dados (e/ou cache).

### Atualizar transação

Essa atividade tem um <a href="./atividades/atualizacao_transacao.md">documento dedicado à descrevê-la</a>.


### Atualizar movimentação

Essa atividade é uma subrotina que fica escutando movimentações monetárias de pix e anotando essas movimentações nas transações apropriadas.

# Sistema de análise de crédito

Esse sistema é focado em resolver solicitações pendentes de crédito.

O público-alvo desse sistema são analistas da financiadora (Woovi, nesse caso).

## Atividades

### Análise de crédito

Essa atividade é a principal funcionalidade desse sistema

A ideia é que um analista de um financiador tenha acesso à uma lista de <a href="./models/solicitacao_credito.md">solicitações de crédito</a>.

Para cada uma dessas solicitações, ele consiga fazer pesquisas a respeito do score do usuário que fez a solicitação e também a respeito das transações passadas.

Para alcançar isso, é necessário usar a consulta de score do sistema de contas e a consulta de transações do sistema de transação.

Além de fazer as pesquisas, eu creio que vai ser necessária alguma forma de comunicação com o solicitante, minha recomendação é usar emails ou intercom para fazer isso. Eu não vou descrever nenhum sistema de comunicação nesse repositório, mas pode-se inferir que vai ser necessário.

Além disso, para cada uma dessas solicitações, é sensato pensar que o analista vai precisar de documentos adicionais para tomar sua decisão e vai solicitar esses documentos diretamente para o solicitante durante a conversa, e para fins de clarificar a tomada de decisões e criar um arquivo, vai ser necessário um sistema de arquivos, minha recomendação é uma abstração em cima de um balde do S3 ou algo parecido.

Por fim, um analista nem sempre é necessário nessa atividade, o sistema deveria ter critérios de indeferência automática para solicitações de crédito. Minha recomendação é fazer isso baseado em score.

### Deferir/Indeferir crédito

Essa atividade é a tomada de decisão depois da análise de crédito.

Em caso de indeferência, acho que seria legal se o analista colocasse também uma nota explicando a razão.


# Sistema de conta

Esse sistema lida com as <a href="./models/conta_credito">contas de crédito</a>.

## Atividades

### Consulta de score

Essa atividade tem um <a href="./atividades/consulta_score.md">documento dedicado à descrevê-la</a>.

### Solicitação de crédito

Essa atividade tem um <a href="./atividades/solicitacao_credito.md">documento dedicado à descrevê-la</a>.

### Verificação de identidade

Essa atividade tem um <a href="./atividades/verificacao_identidade.md">documento dedicado à descrevê-la</a>.

### Consulta de crédito disponível

Rota REST que retorna o valor de crédito disponível para um cliente. Essa informação é atualizada em uma atividade separada (abaixo).

### Atualizar crédito disponível

Essa atividade é uma subrotina que escuta dois tópicos:

- Atualização das transações
- Solicitações de crédito deferidas

Calcula e atualiza na conta do usuário (num banco de dados) o valor disponível de crédito.

Sendo o cálculo = Valor de crédito deferido para essa conta - Crédito usado em transações que ainda não foi pago.

### Consultar contas a pagar

Essa atividade gera uma lista de movimentações que já foram listadas dentro de uma transação mas ainda não foram pagas e classifica por data para mostrar para o usuário as próximas contas que ele vai precisar pagar.

### Pagar fatura de crédito

Essa atividade gera um query-code de pagamento para N movimentações de uma conta.