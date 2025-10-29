const numero = Number(prompt("Digite um numero"));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

/*const numeroTitulo = document.getElementById("numero-titulo");
const raiz = document.getElementById("raiz");
const inteiro = document.getElementById("inteiro");
const nÉUmNumero = document.getElementById("NaN");
const arredondaBaixo = document.getElementById("arrendondarPraBaixo");
const arredondaCima = document.getElementById("arrendondarPraCima");
const casaDecimal = document.getElementById("duasCasasDecimais");*/

numeroTitulo.innerHTML = numero;

texto.innerHTML += `<p>Raiz Quadradada : <strong>${numero ** 0.5}</strong></p>`;
texto.innerHTML += `<p>
    ${numero} é inteiro : <strong>${Number.isInteger(numero)}</strong>
</p>`;
texto.innerHTML += `<p>É NaN : <strong>${Number.isNaN(numero)}</strong></p>`;
texto.innerHTML += `<p>
    Arredondando para baixo: <strong>${Math.floor(numero)}</strong>
</p>`;
texto.innerHTML += `<p>
    Arredondando para cima: <strong>${Math.ceil(numero)}</strong>
</p>`;
texto.innerHTML += `<p>Com duas casas decimais: <strong>${numero.toFixed(
  2
)}</strong></p>`;

//texto.innerHTML = `<p>Seu numero + 2 é: ${numero + 2}</p>`;
