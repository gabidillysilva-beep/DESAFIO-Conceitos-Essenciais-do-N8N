# Desafio

Em um banco digital, a equipe de automacoes usa fluxos no n8n para tratar eventos simples antes de enviar dados para outros setores. Um dos fluxos recebe o status de uma etapa e precisa decidir rapidamente qual sera a proxima acao. Como voce esta revisando os conceitos essenciais de logica de programacao aplicados ao n8n, sua tarefa e simular esse comportamento em um pequeno validador.

Implemente um programa que leia uma unica string representando o status recebido pelo fluxo. Os valores validos sao: START, PROCESS, ERROR e END. O programa deve responder com a proxima acao correspondente: START gera VALIDATE, PROCESS gera SAVE, ERROR gera RETRY e END gera FINISH. Se a string informada nao for exatamente um desses quatro valores, o programa deve retornar INVALID. A comparacao deve ser exata, respeitando letras maiusculas e minusculas. O problema possui apenas uma decisao central: mapear corretamente o status de entrada para a resposta esperada, sem usar bibliotecas externas.

## Entrada
A entrada contem uma unica linha com uma string representando o status recebido pelo fluxo bancario.

## Saída
Exiba uma unica linha com a acao correspondente ao status informado, seguindo exatamente o mapeamento definido. Caso o valor seja invalido, exiba INVALID.

## Exemplos
A tabela abaixo apresenta exemplos de entrada e saída:

| Entrada | Saída |
| :--- | :--- |
| START | VALIDATE |
| PROCESS | SAVE |
| ERROR | RETRY |
| process | INVALID |