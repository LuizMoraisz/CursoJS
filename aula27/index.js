// (condição) ? "Valor Verdadeiro" : "Valor para Falso":
const pontuacaoUsuario = 999;
const nivelUsuario =
  pontuacaoUsuario >= 1000 ? "Usuario VIP" : "Usuario Normal";

const corUsuario = null;
const corPadrao = corUsuario || "Preta";

console.log(nivelUsuario, corPadrao);

// if (pontuacaoUsuario >= 1000) {
//   console.log("Usuario Vip");
// } else {
//   console.log("Usuario Normal");
// }
