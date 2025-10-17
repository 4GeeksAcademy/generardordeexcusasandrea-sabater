import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  let sustantivos = ["tormenta eléctrica", "App del móvil", "el sistema"];
  let acciones = ["causó un apagón", "se bloqueó", "falló"];
  let evitar = ["no pudo acabar", "no debió fallar", "mojar"];
  let cuando = ["ayer", "mientras estaba en el trabajo", "mientras programaba"];

  let indiceSustantivo = Math.floor(Math.random() * sustantivos.length);
  let indiceAcciones = Math.floor(Math.random() * acciones.length);
  let indiceEvitar = Math.floor(Math.random() * evitar.length);
  let indiceCuando = Math.floor(Math.random() * cuando.length);
  document.querySelector("#excusas").innerHTML =
  sustantivos[parte1] + acciones[indiceAcciones]+evitar[indiceEvitar]+cuando[indiceCuando];
 }
