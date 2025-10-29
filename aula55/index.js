// IIEF -> Immediately invoked function expression;
(function (idade, peso, altura) {
  const sobrenome = "Morais";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome("Luiz"));
  }

  falaNome();
  console.log(idade, peso, altura);
})(30, 20, 1.89);

const nome = "qualquer coisa";
