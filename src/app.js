import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  let sustantivos = ["tormenta eléctrica", "App del móvil", "el sistema"];
  let acciones = ["causó un apagón", "se bloqueó", "falló"];
  let evitar = ["no pudo acabar", "no debió fallar", "mojar"];
  let cuando = ["ayer", "mientras estaba en el trabajo", "mientras programaba"];

  let parte1 = Math.floor(Math.random() * sustantivos.length);
  let parte2 = Math.floor(Math.random() * acciones.length);
  let parte3 = Math.floor(Math.random() * evitar.length);
  let parte4 = Math.floor(Math.random() * cuando.length);


  document.querySelector("#excusas").innerHTML =
  sustantivos[parte1] + acciones[parte2]+evitar[parte3]+cuando[parte4];
       
};


