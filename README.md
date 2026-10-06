# Desafios — Conceitos Essenciais do n8n

Repositório dedicado a desafios de lógica e automação inspirados em fluxos do n8n e em operações de um banco digital. Esta página reúne uma visão geral dos três desafios; os enunciados completos ficam nas pastas correspondentes.

## Desafios

### 1. Roteamento de solicitações bancárias

Receba o status de uma solicitação e encaminhe o fluxo:

| Status | Resposta |
| --- | --- |
| `APROVADO` | `PAGAMENTO` |
| `PENDENTE` | `ANALISE_MANUAL` |
| `NEGADO` | `ENCERRAMENTO` |
| Qualquer outro valor | `ERRO_STATUS` |

O status deve ser comparado exatamente, respeitando as letras maiúsculas.

[Ver enunciado completo](./desafio-01-fluxo-n8n/desafio-01.md)

### 2. Decisão de status no fluxo

Mapeie o estado recebido para a próxima ação do fluxo:

| Status | Próxima ação |
| --- | --- |
| `START` | `VALIDATE` |
| `PROCESS` | `SAVE` |
| `ERROR` | `RETRY` |
| `END` | `FINISH` |
| Qualquer outro valor | `INVALID` |

A comparação é exata e diferencia letras maiúsculas de minúsculas.

[Ver enunciado completo](./desafio-02-Decisao-de-Status-no-N8N-Bancario/desafio-02.md)

### 3. Validador de eventos bancários

Leia três informações — tipo do evento, status e etapa atual — e retorne a mensagem de controle conforme estas regras, na ordem indicada:

1. Se o status for `ERRO`, retorne `FALHA`, independentemente dos outros campos.
2. Para status `OK` e etapa `validar`, tipo `PIX` retorna `PROCESSAR` e tipo `TED` retorna `AGENDAR`.
3. Se a etapa for `revisar`, retorne `ANALISAR`.
4. Para qualquer outra combinação, retorne `IGNORAR`.

As comparações devem respeitar exatamente o texto e a capitalização definidos.

[Ver enunciado completo](./desafio-03-Validador-de-Status-n8n-no-Banco-Digital/desafio-03.md)

## Organização

Cada pasta contém o enunciado completo do desafio correspondente. Consulte os links acima para ver os formatos detalhados de entrada e saída e os exemplos.
