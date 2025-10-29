const nome = "Luiz Felipe";
const sobrenome = "Sousa Morais";
const idade = 20;
const alturaEmM = 1.93;
const peso = 81;
let imc; //peso divido por altura vezes altura
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2025 - idade;

console.log(`${nome}, ${sobrenome}, tem, ${idade}, anos, pesa, ${peso}, Kg`);
console.log(`Tem, ${alturaEmM}, de altura e seu IMC é de ${imc}`);
console.log(`${nome}, nasceu em, ${anoNascimento}`);
