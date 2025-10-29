/*
Primitivos - String, number, boolean, undefined, null (bigint, symbol) - Valores Copiados

Referencia  (mutavel) - Arrays, object, function - Passados por referencia
*/
const a = {
  nome: "Luiz",
  sobrenome: "Morais",
};
const b = { ...a };
a.nome = "Fernando";
console.log(b);
