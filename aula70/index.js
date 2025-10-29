// Factory functions / Constructor functions / Classes

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this);
}

const p1 = new Pessoa("Luiz", "Felipe");
delete p1.nome;
const p2 = new Pessoa("Kamilla", "Victoria");
console.log(p1);
console.log(p2);
