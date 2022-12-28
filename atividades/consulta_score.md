# Consulta de score privado

Atividade feita para dar transparência para o usuário a respeito do estado atual do score dele.

Aqui podemos fazer um dump de todas as informações que nós levamos em consideração na hora de dar um score para ele e como cada fator pesa.

Um nice-to-have seria permitir o compartilhamento do resultado (completo ou parcial) dessa consulta com outros usuários, essa poderia ser a base para a criação de padrões de novos scores construídos em cima do nosso sistema, para usos específicos.

## Pre-requisitos

Usuário
- Conta de crédito
- Identidade <a href="./verificacao_identidade.md">provada</a>

## Processo

=> Query no banco com as transações passadas do CPF/CNPJ

=> Query no Serasa

=> Fórmula de score

=> Se o usuário está solicitando uma consulta do próprio score ou seja um analista fazendo uma análise de crédito, mantemos os detalhes de como chegamos no resultado. Caso contrário, removemos os detalhes e enviamos somente o resultado.

=> Renderizamos o resultado