// const nome = "Luiz";
// const sobrenome = "Felipe";
// const falaNome = () => nome + " " + sobrenome;
// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = "oque eu quiser";

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

const nome = "Luiz";
const sobrenome = "felipe";
module.exports = {
  nome,
  sobrenome,
  Pessoa,
};

// module.exports.nome = "Luiz";
// exports.Pessoa = Pessoa;
// this.sobrenome = "Qualquer coisa que eu quiser";
