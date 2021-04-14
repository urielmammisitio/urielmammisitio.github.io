const peronaje = new PersonajeWeb();
      document.getElementById("contenedor").append(peronaje); //se agrega al personaje como un nodo al contenedor
      function arriba() { //funciones para mover al personaje
        peronaje.arriba();
      }
      function abajo() {
        peronaje.abajo();
      }
      function retrocede() {
        peronaje.retrocede();
      }
      function avanza() {
        peronaje.avanza();
      }
      const figuras = [
        new EnemigoWeb(),new EnemigoWeb(),new EnemigoWeb(),new EnemigoWeb(),new EnemigoWeb(),
        new EnemigoWeb(),new EnemigoWeb(),new EnemigoWeb(),new EnemigoWeb(),new EnemigoWeb(),
        new EnemigoWeb(),new EnemigoWeb(),new EnemigoWeb(),new EnemigoWeb(),new EnemigoWeb(),
        new EnemigoWeb(),new EnemigoWeb(),new EnemigoWeb(),new EnemigoWeb(),new EnemigoWeb(),
        new EnemigoWeb(),new EnemigoWeb(),new EnemigoWeb(),new EnemigoWeb(),new EnemigoWeb(),
        new EnemigoWeb(),new EnemigoWeb(),new EnemigoWeb(),new EnemigoWeb(),new EnemigoWeb(),
        new EnemigoWeb()]; //Arreglo con 30 enemigos +1
      
      for (let fig of figuras) {
        document.getElementById("contenedor").append(fig);
      } //se agrega 30 enemigos +1 como nodos al contenedor
      function mueve() {
        for (var fig of figuras) {
          fig.muévete();
          if (seTocan(fig, caritaBotones)) { //Si toca un enemigo detiene los intervalos
            clearInterval(intervalo);
            clearInterval(puntos);
            pierde();
          }
          if(fig.id=="enemigo30" && pasaEnemigo(fig, caritaBotones)){ //Si pasa 30 enemigos detiene los intervalos
            gana();
            clearInterval(intervalo);
            clearInterval(puntos);
          }
        }
      }

      function pasaEnemigo(e1, e2) { //Detecta si se revaso un enemigo
          const rE1 = e1.getBoundingClientRect();
          const rE2 = e2.getBoundingClientRect();
          return (rE1.right < rE2.left);
      }
      function score(){ //Aumenta el score en 100
        var s = document.getElementById("score");
        let total = parseInt(s.value, 10) + 100;
        s.value = total;
      }
      function pierde(){ //Muestra un mensaje de derrota y el score
        let p = document.getElementById("score");
        document.getElementById("puntuacionP").value= p.value;
        document.getElementById("lose").style.display="block";
        p.value = 0;
      }
      function gana(){ //Muestra un mensaje de victoria y el score
        let p = document.getElementById("score");
        document.getElementById("puntuacionG").value= p.value;
        document.getElementById("win").style.display="block";
        p.value = 0;
      }
      let puntos = setInterval(score, 1000); //Agrega 100 puntos al score cada segundo
      let intervalo = setInterval(mueve, 45); //mueve a los enemigos


