class Pessoa {
  Constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar() {
    console.log(`${this.nome} esta falando.`);
  }

  comer() {
    console.log(`${this.nome} esta comendo.`);
  }

  beber() {
    console.log(`${this.nome} esta bebendo.`);
  }
}

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}
Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} esta falando.`);
};

const p1 = new Pessoa("Luiz", "Felipe");
console.log(p1);
