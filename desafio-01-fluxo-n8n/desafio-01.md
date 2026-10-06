# Desafios - Conceitos Essenciais do N8N

Repositório dedicado aos desafios de lógica e automação com foco em ferramentas low-code, no-code e inteligência artificial.

---

## Desafio Técnico: Validação de Fluxo de Automação

### Contexto
Em um banco digital, a equipe de operações está revisando fluxos simples criados no n8n para treinar novos analistas. Um dos fluxos recebe eventos de transações e decide rapidamente se a automação deve continuar, aguardar revisão humana ou encerrar por erro. Antes de publicar o fluxo em produção, você precisa implementar a mesma regra em código para validar se a lógica básica foi entendida.

### Regras
Leia três informações: o tipo do evento, o status recebido e a etapa atual do fluxo. Seu programa deve retornar uma única mensagem de controle. As regras são:
1. Se o status for **ERRO**, independentemente dos outros campos, retorne **FALHA**.
2. Se o tipo for **PIX**, o status for **OK** e a etapa for **validar**, retorne **PROCESSAR**.
3. Se o tipo for **TED**, o status for **OK** e a etapa for **validar**, retorne **AGENDAR**.
4. Se a etapa for **revisar**, retorne **ANALISAR**.
5. Para qualquer outra combinação válida, retorne **IGNORAR**.

O problema envolve comparações simples de strings e prioridade de regras, como em um fluxo inicial do n8n. Considere as palavras exatamente como fornecidas, com letras maiúsculas e minúsculas relevantes.

### Entrada
A entrada contém três linhas:
* **Linha 1:** Tipo do evento (podendo ser PIX, TED ou outro texto).
* **Linha 2:** Status do evento.
* **Linha 3:** Etapa atual do fluxo.

### Saída
Exiba uma única linha com uma das mensagens: `PROCESSAR`, `AGENDAR`, `FALHA`, `ANALISAR` ou `IGNORAR`, conforme as regras descritas.

### Exemplos

| Entrada | Saída |
| :--- | :--- |
| PIX<br>OK<br>validar | `PROCESSAR` |
| TED<br>OK<br>validar | `AGENDAR` |
| PIX<br>ERRO<br>validar | `FALHA` |
| DOC<br>OK<br>revisar | `ANALISAR` |