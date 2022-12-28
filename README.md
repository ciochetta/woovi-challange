# Woovi Challange

Repositório para resolver o desafio da Woovi.



## Sobre esse repositório

O desafio é criar um sistema de crédito em cima do pix.

Eu tentei assumir o ponto de vista de um arquiteto de software/gerente de produto, dada a natureza do desafio, eu acho difícil desassociar a parte de definição de produto com a solução tecnica.

Esse design de sistema foi feito supondo que já existe um sistema de pagamentos por pix e que os dados dessas movimentações são guardados.

A ideia é que este seja a descrição de um MVP/Arquitetura mínima viável para esse sistema.

Eu tentei balancear um design/documentação com as seguintes características:

Funcional: Seria possível entregar essa documentação para uma equipe de desenvolvimento e ela deve conseguir criar o sistema. Existem, entretanto algumas partes do sistema que eu deliberadamente escolhi não especificar, em cada um dos casos eu espero ter deixado clara a razão pela qual eu fiz isso.

Descritivo: Minimizando as dúvidas a respeito de como as decisões devem ser tomadas.

Minimalista: Evitando big upfront design.



## Índice

<a href="./guidelines.md">Guidelines</a> descreve o objetivo e os princípios usados para projetar esse sistema.

<a href="./system.md">System</a> descreve o lado mais tecnico do sistema, assim como cada uma das atividades previstas.

<a href="./personas.md">Personas</a> é uma lista das personas que eu usei para projetar o sistema.


<a href="./formula_score.md">Formula Score</a> Fala a respeito de como eu acho que podemos fazer um sistema de score, sem definir uma formula específica.

<a href="./autorizacao.md">Autorização</a> é um documento que eu uso como lembrete de que essa é uma parte do sistema que não foi coberta.

A pasta <a href="./atividades">Atividades</a> contém o detalhamento de algumas atividades específicas que eu considerei que seriam grandes de mais para descrever no documento de sistema, sendo elas:

<a href="./atividades/atualizacao_transacao.md">Atualização de transação</a>.

<a href="./atividades/consulta_score.md">Consulta de score</a>.

<a href="./atividades/pagamento_cobranca.md">Pagar uma cobrança</a>.

<a href="./atividades/solicitacao_credito.md">Solicitar crédito</a>.

<a href="./atividades/verificacao_identidade.md">Verificar identidade</a>.

A pasta <a href="./models"> Models</a> tem uma lista de modelos relevantes para o domínio. Essa não é uma lista compreensiva de todos os modelos que vão ser usados, mas a base que deve ser usada:

<a href="./models/cobranca.md">Modelo de cobrança</a>.

<a href="./models/conta_credito.md">Modelo de conta de crédito</a>.

<a href="./models/pagamento_cobranca.md">Modelo de pagamento de cobrança</a>.

<a href="./models/solicitacao_credito.md">Modelo de solicitação de crédito</a>.

<a href="./models/verificacao.md">Modelo de verificação de conta</a>.

<a href="./models/transacao.md">Modelo de transação</a>.

<a href="./models/movimentacao.md">(sub)Modelo de movimentação</a>.

A pasta <a href="./exemplos">exemplos</a> foi criada para colocar exemplos de heurísticas. No fim das contas, acabou que eu criei somente um exemplo, de como criar as movimentações a partir de uma transação.


