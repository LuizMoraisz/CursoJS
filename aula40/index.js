const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continue - continuar para a proxima iteração
// Break sai do laço

for (let i in numeros) {
  let numero = numeros[i];
  if (numero === 2) {
    console.log("Pulei o numero 2");
    continue;
  }
  console.log(numero);
  if (numero === 7) {
    console.log("7 Sete encontrado saindo...");

    break;
  }
  i++;
}
