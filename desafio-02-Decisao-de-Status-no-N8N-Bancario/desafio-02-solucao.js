// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets": lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

const status = String(gets());
let resultado = "ERRO_STATUS";

// Compare o status exatamente como foi recebido e defina a saída correta.
if (status === "APROVADO") {
    resultado = "PAGAMENTO";
} else if (status === "PENDENTE") {
    resultado = "ANALISE_MANUAL";
} else if (status === "NEGADO") {
    resultado = "ENCERRAMENTO";
}

print(resultado);