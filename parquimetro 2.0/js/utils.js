export const faixasEstacionamento = [
    { valorMinimo: 1, tempo: 30, preco: 1 },
    { valorMinimo: 1.75, tempo: 60, preco: 1.75 },
    { valorMinimo: 3, tempo: 120, preco: 3 }
];

export function obterTemposDisponiveis() {
    return faixasEstacionamento.map(faixa => faixa.tempo);
}

export function encontrarFaixa(valorPago) {
    return [...faixasEstacionamento]
        .reverse()
        .find(faixa => valorPago >= faixa.valorMinimo);
}

export function somarPrecosFaixas() {
    return faixasEstacionamento.reduce(
        (total, faixa) => total + faixa.preco,
        0
    );
}

export function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}