# Prova de identidade

Atividade para que um usuário prove que ele é o dono ou pode agir financeiramente em nome de um CPF ou CNPJ .

## Visão geral

Para provar a identidade de alguém, podemos pedir que essa pessoa faça um pix para nós

Esse pix precisa vir de uma conta que tenha o CPF/CNPJ da conta cadastrada

Usamos o valor do pix para fazer a confirmação

50 centávos (para cobrir custos operacionais) + valor aleatório

Quando a gente receber o valor e as informações baterem, dizemos que a conta foi verificada

## Processo

=> Cliente inicia o processo de verificação 

Pode ser algo simples como clicar em um botão no perfil escrito "verificar conta"

No servidor, vamos gerar um <a href="../models/verificacao.md">documento de verificação</a>