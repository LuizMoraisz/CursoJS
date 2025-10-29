const pessoa = {
  nome: "Luiz",
  sobrenome: "Morais",
  idade: 20,
  endereço: {
    rua: "Av Brasil",
    numeros: 320,
  },
};
// Atribuição via desestruturação
const { nome, ...resto } = pessoa;
console.log(resto);
