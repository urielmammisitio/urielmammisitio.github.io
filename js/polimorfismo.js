//Enemigos

/** @interface */
class SeMueve {
  muévete() {
    throw new Error("intf");
  }
}
xIniE = window.innerWidth / 20; //Variable de x inicial
EnemigoId = 1; //variable para el id de los enemigos
/** @implements {SeMueve} */
class EnemigoWeb
    extends HTMLElement {  
    connectedCallback() {
      this.x = xIniE; //x sera igual a x inicial
      this.aleatorio  =  Math.floor(Math.random() * 3.6) + 1; //Número aleatorio para definir la posicion y del enemigo
      this.EAleatorio  =  Math.floor(Math.random() * 2.6) + 1; //Número aleatorio para definir el sprite del enemigo
      if(this.aleatorio === 1){
        this.y = 1;
      }else if(this.aleatorio === 2){
        this.y = 7;
      }else{
        this.y = 13;
      }
      if(EnemigoId>30){ //solo en caso de que ya existan otros 30 enemigos s creara uno con la imagen de victoria
        this.innerHTML = "<img src='images/win.png'>";
      }else if(this.EAleatorio === 1){
        this.innerHTML = "<img src='images/enemigo.png'>";
      }else{
        this.innerHTML = "<img src='images/enemigo2.png'>";
      }
      this.id =
        "enemigo" + EnemigoId; //Co ayuda de la variable del principio se crea un id
      this.style.position =
        "absolute";
      this.style.display =
        "inline-block";
      this.style.height =
        "5rem";
      this.className =
        "sprite";
      this.style.width =
        "4rem";
      this.style.left =
        `${this.x}rem`;
      this.style.top =
        `${this.y}rem`;
      xIniE +=9.2; //Se aumenta el valor de x inicial para que los enemigos no se junten demasiado
      EnemigoId += 1; //se aumenta en 1 el valor para los id
    }
    muévete() { //permite mover enemigos
      this.x -= 0.6;
      this.style.left =
        `${this.x}rem`;
    }
  }
  customElements.define(
    "enemigo-web", EnemigoWeb)


  /** Devuelve true si 2
  * elementos se tocan.
  * @param {HTMLElement} e1
  * @param {HTMLElement} e2
  * @returns {boolean} true
  *  si los elementos se
  *  tocan. */
  function seTocan(e1, e2) {
      const rE1 = e1.getBoundingClientRect();
      const rE2 = e2.getBoundingClientRect();
      return (rE1.right >= rE2.left && rE1.left <= rE2.right && rE1.top <= rE2.bottom && rE1.bottom >= rE2.top);
  }

//Se mueve con botones

/** @implements {SeMueve} */
class PersonajeWeb
extends HTMLElement {
  connectedCallback() {
    this.xMenor = //variables iniciales para el personaje
      1;
    this.xMayor =
      12.5;
    this.yMenor =
      1;
    this.yMayor =
      13;
    this.x = this.xMenor;
    this.y = this.yMenor;
    this.innerHTML = "<img src='images/personaje.png'>"; //sprite para el personaje
    this.id = 
      "caritaBotones";
    this.style.position =
      "absolute";
    this.style.display =
      "inline-block";
    this.style.height =
      "5rem";
    this.className =
      "sprite";
    this.style.width =
      "4rem";
    this.style.left =
      `${this.x}rem`;
    this.style.top =
      `${this.y}rem`;
  }
  arriba() { //funciones para mover al personaje
    if (this.y > this.yMenor) {
      this.y -= 6;
    }
    this.style.top =
      `${this.y}rem`;
  }
  abajo() {
    if (this.y < this.yMayor){
      this.y += 6;
    }
    this.style.top =
      `${this.y}rem`;
  }
  retrocede(){
    if (this.x > this.xMenor) {
      this.x -= 4.5;
    }
    this.style.left =
        `${this.x}rem`;
  }
  avanza(){
    if (this.x < this.xMayor) {
      this.x += 4.5;
    }
    this.style.left =
        `${this.x}rem`;
  }
}
customElements.define(
"personaje-web", PersonajeWeb);


