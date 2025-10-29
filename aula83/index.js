function teste() {
  console.log("Esse é o meu teste");
}
class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
    teste();
  }
  //Metodos de Instância
  aumentarVolume() {
    this.volume += 2;
  }
  diminuirVolume() {
    this.volume -= 2;
  }

  //Método estático
  static soma(x, y) {
    console.log(this);
  }
}

const controle1 = new ControleRemoto("Lg");
ControleRemoto.soma();
