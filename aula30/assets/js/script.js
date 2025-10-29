// function getDia(diaSemana) {
//   let diaSemanaTexto;
//   switch (diaSemana) {
//     case 0:
//       diaSemanaTexto = "Domingo";
//       return diaSemanaTexto;
//     case 1:
//       diaSemanaTexto = "Segunda-feira";
//       return diaSemanaTexto;
//     case 2:
//       diaSemanaTexto = "Terça-feira";
//       return diaSemanaTexto;
//     case 3:
//       diaSemanaTexto = "Quarta-feira";
//       return diaSemanaTexto;
//     case 4:
//       diaSemanaTexto = "Quinta-feira";
//       return diaSemanaTexto;
//     case 5:
//       diaSemanaTexto = "Sexta-feira";
//       return diaSemanaTexto;
//     case 6:
//       diaSemanaTexto = "Sabado";
//       return diaSemanaTexto;
//     default:
//       diaSemanaTexto = "";
//   }
//   return diaSemanaTexto;
// }

// function getMes(mes) {
//   let mesTexto;
//   switch (mes) {
//     case 0:
//       return (mesTexto = "Janeiro");
//     case 1:
//       return (mesTexto = "Fevereiro");
//     case 2:
//       return (mesTexto = "Março");
//     case 3:
//       return (mesTexto = "Abril");
//     case 4:
//       return (mesTexto = "Maio");
//     case 5:
//       return (mesTexto = "Junho");
//     case 6:
//       return (mesTexto = "Julho");
//     case 7:
//       return (mesTexto = "Agosto");
//     case 8:
//       return (mesTexto = "Setembro");
//     case 9:
//       return (mesTexto = "Outubro");
//     case 10:
//       return (mesTexto = "Novembro");
//     case 11:
//       return (mesTexto = "Dezembro");
//     default:
//       return (mesTexto = "");
//   }
// }

// const h1 = document.querySelector(".container h1");

// const data = new Date();

// let mes = data.getMonth();
// let diaSemana = data.getDay();
// let ano = data.getFullYear();
// let hora = data.getHours();
// let min = data.getMinutes(2);
// let diaDoMes = data.getDate();
// const diaSemanaTexto = getDia(diaSemana);
// const mesTexto = getMes(mes);

// console.log(diaSemana, diaSemanaTexto, mesTexto, ano, hora, min);
// h1.innerHTML = `${diaSemanaTexto}, ${diaDoMes} de ${mesTexto} de ${ano} ${hora}:${min}`;

// const h1 = document.querySelector(".container h1");
// const data = new Date();
// const opcoes = {
//   dateStyle: "full",
//   timeStyle: "Short",
// };

// h1.innerHTML = data.toLocaleDateString("pt-BR", opcoes);

const data = new Date();
const h1 = document.querySelector(".container h1");
h1.innerHTML = `${data.toLocaleString("pt-BR")}`;
