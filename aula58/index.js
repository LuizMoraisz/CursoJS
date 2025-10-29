// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (New)
function Pessoa(nome, sobrenome) {
  const ID = 123456;

  const metodoInterno = () => {
    // Privadas
  };
  // Atributos ou métodos publicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(this.nome + ": Sou um metodo");
  };
}

const p1 = new Pessoa("Luiz", "Felipe");
const p2 = new Pessoa("Kamilla", "Victoria");
p1.metodo();
