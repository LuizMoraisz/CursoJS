const pessoa1 = {
  nome: "Luiz",
  sobrenome: "sousa",
  idade: 20,

  fala() {
    console.log(`A minha idade atual é ${this.idade}`);
  },

  incrementaIdade() {
    this.idade++;
  },
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();

/*const pessoa1 = {
  nome: "Luiz",
  sobrenome: "Morais",
  idade: 23,
};*/
