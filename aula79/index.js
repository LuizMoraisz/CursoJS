const falar = {
  falar() {
    console.log(`${this.nome} está falando`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está falando`);
  },
};

const beber = {
  bebendo() {
    console.log(`${this.nome} está falando`);
  },
};

const pessoaPrototype = Object.assign({}, falar, comer, beber);

function CriaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p1 = CriaPessoa("Luiz", "Felipe");
console.log(p1);
