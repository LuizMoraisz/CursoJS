function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject(false);

    setTimeout(() => {
      resolve(msg.toUpperCase() + " - Passei na promisse");
    }, tempo);
  });
}
// Promise.all Promise.race Promisse.resolve Promisse.reject
const promises = [
  "Primeiro Valor",
  esperaAi("Promise 1", 3000),
  esperaAi("Promise 1", 500),
  esperaAi("Promise 1", 1000),
  "Outro Valor",
];
Promise.all(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });

function baixaPagina() {
  const emCache = true;
  if (emCache) {
    return Promise.resolve("Página em cache");
  } else {
    return esperaAi("Baixei a página", 3000);
  }
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log("ERRO"));
