// Este codigo pertece a Nosotros.HTML donde hace el cambio de mision y vision a quines somos y viceversa
// Obtener los elementos necesarios
const misionVision = document.getElementById("main-VisionMision");
const quienesSomos = document.getElementById("main-QuienesSomos");
const botonMisionVision = document.querySelector(".MV a");
const botonQuienesSomos = document.querySelector(".QS a");

// Agregar eventos para mostrar y ocultar el contenido según la opción seleccionada
botonMisionVision.addEventListener("click", function (event) {
  event.preventDefault();
  misionVision.style.display = "block";
  quienesSomos.style.display = "none";
});

botonQuienesSomos.addEventListener("click", function (event) {
  event.preventDefault();
  misionVision.style.display = "none";
  quienesSomos.style.display = "block";
});