// // const tresHoras = 60 * 60 * 3 * 1000;
// // 01/01/1970 Timestamp Unix ou época Unix
// // const data = new Date(2019, 3, 20, 15, 14, 27); //ano, mes, dia, hora, minutos, segundos, milesimos
// const data = new Date("2019-04-20 20:20:59");
// console.log("Dia", data.getDate());
// console.log("Mes", data.getMonth());
// console.log("Ano", data.getFullYear());
// console.log("hora", data.getHours());
// console.log("Min", data.getMinutes());
// console.log("Seg", data.getSeconds());
// console.log("Ms", data.getMilliseconds());
// console.log("Dia semana", data.getDay());
// console.log(data.toString());

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  //   console.log(data);
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = data.getFullYear();
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`;
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
