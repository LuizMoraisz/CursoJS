/*let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

const varAtemporaria = varA;
varA = varB;
varB = varC;
varC = varAtemporaria;

console.log(varA, varB, varC);*/

//Maneira mais facil

let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
