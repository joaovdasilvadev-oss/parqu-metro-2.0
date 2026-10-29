import { Parquimetro } from "./classes.js";
import {
    encontrarFaixa,
    formatarMoeda,
    obterTemposDisponiveis,
    somarPrecosFaixas
} from "./utils.js";

const formulario = document.getElementById("form-parquimetro");
const campoValor = document.getElementById("valor");
const areaResultado = document.getElementById("resultado");

console.log("Aplicação carregada!");
console.log(obterTemposDisponiveis());
console.log(somarPrecosFaixas());

if (!formulario || !campoValor || !areaResultado) {
    console.error("Erro: não foi possível encontrar os elementos do formulário.");
} else {
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const valorPago = Number(campoValor.value);

        if (campoValor.value.trim() === "" || !Number.isFinite(valorPago) || valorPago < 0) {
            areaResultado.innerHTML = '<p class="erro">Informe um valor válido.</p>';
            return;
        }

        const faixa = encontrarFaixa(valorPago);

        if (!faixa) {
            areaResultado.innerHTML = '<p class="erro">Valor insuficiente! Insira pelo menos R$ 1,00.</p>';
            return;
        }

        const parquimetro = new Parquimetro(valorPago);
        const resultado = parquimetro.obterResultado();

        if (!resultado.sucesso) {
            areaResultado.innerHTML = `<p class="erro">${resultado.mensagem}</p>`;
            return;
        }

        areaResultado.innerHTML = `
            <h2>Estacionamento autorizado!</h2>
            <p>Tempo de permanência: <strong>${resultado.tempo} minutos</strong></p>
            <p>Troco: <strong>${formatarMoeda(resultado.troco)}</strong></p>
        `;
    });
}