# Desafio

Em um banco digital, a equipe de operacoes esta revisando fluxos simples no n8n antes de liberar automacoes reais. Um dos testes simula um no de decisao que recebe o status de uma solicitacao e precisa encaminha-la corretamente. Como analista iniciante, sua tarefa e reproduzir essa regra com logica de programacao, garantindo que cada entrada gere exatamente uma resposta padronizada.

Implemente um programa que leia uma unica string representando o status recebido pelo fluxo. Os valores validos sao: APROVADO, PENDENTE e NEGADO. Se o status for APROVADO, o programa deve indicar que a automacao segue para pagamento. Se for PENDENTE, deve indicar que a automacao segue para analise manual. Se for NEGADO, deve indicar que a automacao segue para encerramento. Qualquer outro valor deve ser tratado como erro de integracao. Considere comparacao exata, incluindo letras maiusculas. O problema envolve apenas uma decisao simples, semelhante a um bloco condicional usado em automacoes basicas.

## Entrada
A entrada contem uma unica linha com uma string representando o status da solicitacao no fluxo bancario.

## Saída
Exiba uma unica linha com uma das mensagens exatas: PAGAMENTO, ANALISE_MANUAL, ENCERRAMENTO ou ERRO_STATUS.

## Exemplos
A tabela abaixo apresenta exemplos de entrada e saída:

| Entrada | Saída |
| :--- | :--- |
| APROVADO | PAGAMENTO |
| PENDENTE | ANALISE_MANUAL |
| NEGADO | ENCERRAMENTO |
| EM_ANALISE | ERRO_STATUS |