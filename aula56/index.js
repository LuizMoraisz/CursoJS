// Factory function (Função Fabrica)
// Constructor function (Função construtora)

function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    fala(assunto = "Falando sobre nada") {
      return `${this.nome} está ${assunto}`;
    },

    altura: a,
    peso: p,
    // Getter
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Luiz", "Felipe", 1.8, 80);
p1.nomeCompleto = "Kamilla Victoria Morais";
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());
