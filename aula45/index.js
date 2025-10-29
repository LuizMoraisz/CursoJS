// try - É executada quando não ha erros
// catch - É executada quando há erros
// finally - Sempre

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instancia de date");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}
try {
  const data = new Date("01-01-1970 12:58:12");

  const hora = retornaHora();
  console.log(hora);
  console.log(hora);

  //tratar erro
} catch (e) {
} finally {
  console.log("Tenha um bom dia ");
}
