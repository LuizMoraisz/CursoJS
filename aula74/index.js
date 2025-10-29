// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
  (this.nome = nome),
    (this.sobrenome = sobrenome),
    ((this.nomeCompleto = () => "ORIGINAL:"), this.nome + " " + this.sobrenome);
}

// Pessoa.prototype === pessoa1.prototype

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

// Instância
const pessoa1 = new Pessoa("Luiz", "M.");
const pessoa2 = new Pessoa("Kamilla", "V.");
const data = new Date();

console.dir(pessoa1);
console.dir(data);
