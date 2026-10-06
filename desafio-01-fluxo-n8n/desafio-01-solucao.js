// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets": lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

const entrada = gets().split("<br>");

const tipoEvento = entrada[0];
const statusEvento = entrada[1];
const etapaFluxo = entrada[2];

let resposta = "IGNORAR";
// Lembre-se da prioridade das regras:
// 1) ERRO vem antes de qualquer outra condição.
// 2) Depois, verifique os casos específicos de validar.
// 3) Se a etapa for revisar, a saída muda para ANALISAR.

// TODO: implemente a regra de maior prioridade para quando o status for "ERRO".

if (statusEvento === "ERRO") {
    resposta = "FALHA";
} else if (tipoEvento === "PIX" && statusEvento === "OK" && etapaFluxo === "validar") {
    resposta = "PROCESSAR";
} else if (tipoEvento === "TED" && statusEvento === "OK" && etapaFluxo === "validar") {
    resposta = "AGENDAR";
} else if (etapaFluxo === "revisar") {
    resposta = "ANALISAR";
}

print(resposta);