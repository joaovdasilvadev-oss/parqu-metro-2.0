export class Parquimetro {
    constructor(valorPago) {
        this.valorPago = valorPago;
        this.tempo = 0;
        this.troco = 0;
    }

    calcularTempo() {
        if (this.valorPago < 1) {
            return false;
        }

        if (this.valorPago >= 3) {
            this.tempo = 120;
            this.troco = this.valorPago - 3;
        } else if (this.valorPago >= 1.75) {
            this.tempo = 60;
            this.troco = this.valorPago - 1.75;
        } else {
            this.tempo = 30;
            this.troco = this.valorPago - 1;
        }

        this.troco = Math.round(this.troco * 100) / 100;

        return true;
    }

    obterResultado() {
        if (!this.calcularTempo()) {
            return {
                sucesso: false,
                mensagem: "Valor insuficiente! Insira pelo menos R$ 1,00."
            };
        }

        return {
            sucesso: true,
            tempo: this.tempo,
            troco: this.troco
        };
    }
}