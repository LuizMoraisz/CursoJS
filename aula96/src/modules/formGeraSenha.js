import geraSenha from "./geradores";

const senhaGerada = document.querySelector(".senha-gerada");
const qtdCaracteres = document.querySelector(".qtd-caracteres");
const ckhMaiusculas = document.querySelector(".chk-maiusculas");
const ckhMinusculas = document.querySelector(".chk-minusculas");
const ckhNumeros = document.querySelector(".chk-numeros");
const ckhSimbolos = document.querySelector(".chk-simbolos");
const gerarSenha = document.querySelector(".gerar-senha");

export default () => {
  gerarSenha.addEventListener("click", () => {
    senhaGerada.innerHTML = gera();
  });
};

function gera() {
  const senha = geraSenha(
    qtdCaracteres.value,
    ckhMaiusculas.checked,
    ckhMinusculas.checked,
    ckhNumeros.checked,
    ckhSimbolos.checked
  );
  return senha || "Nada Selecionado";
}
