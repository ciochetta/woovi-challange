# Woovi Challange

Repositório para resolver o desafio da Woovi.

<hr>


## Sobre esse repositório

O desafio é criar um sistema de crédito em cima do pix.

Eu tentei assumir o ponto de vista de um arquiteto de software/gerente de produto, dada a natureza do desafio, eu acho difícil desassociar a parte de definição de produto da solução tecnica.

Esse design de sistema foi feito supondo que já existe um sistema de pagamentos por pix e que os dados dessas transações são guardados.

A ideia é que este seja a descrição de um MVP/Arquitetura mínima viável para esse sistema.

Eu tentei balancear um design/documentação com as seguintes características:

Funcional: Seria possível entregar essa documentação para uma equipe de desenvolvimento e ela deve conseguir criar o sistema.

Descritivo: Minimizando as dúvidas a respeito de como as decisões devem ser tomadas.

Minimalista: Evitando big upfront design.

<hr>


# Sobre o sistema

Para informações sobre o que esse sistema tenta ser, leia <a href="./guidelines.md" >guidelines</a>

## Atividades

O <a href="./atividades.md">documento de atividades</a> lista o que as pessoas podem fazer dentro do sistema e contém links para detalhamentos de cada uma dessas atividades.

## Formula de score

O elemento central de como esse sistema funciona é a formula de crédito, pensando nisso, eu fiz um <a href="./formula_score.md">documento</a> separado para falar a respeito dela.

<hr>


## Domínio

Tem um diretório nesse repoistório chamado domínio, lá eu coloquei várias informações relacionadas à crédito que podem ser relevantes de revisitar durante o design desse sistema.

<hr>


## Personas

### Cliente final 
Consumidor/usuário do nosso "cartão" de "crédito"

### Lojista 
Pessoa que está usando o nosso sistema para receber dinheiro

### Financiador
Por enquanto, é a Woovi, mas eu acho que se esse sistema vai realmente ser relevante, isso precisa se tornar aberto eventualmente.