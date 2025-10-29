// Declaração de função (Function Hoisting)
function falaOi() {
  console.log("Oi");
}

// First-class object (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
  console.log("Sou um dado");
};
souUmDado();

function executaFuncao(funcao) {
  console.log("Vou executar sua função abaixo");

  funcao();
}

// Arrow Function
const funcaoArrow = () => {
  console.log("Sou uma arrow function");
};
funcaoArrow();

// Dentro de um objeto
const obj = {
  falar: function () {
    console.log("Estou falando");
  },
};
obj.falar();
