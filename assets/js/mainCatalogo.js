// Esta es la interaccion del boton del menu desplegable donde sale las galletas,panes y novedades
// Obtiene los botones del menú por su ID
const menuButtons = document.querySelectorAll('#menu-button');
// Obtiene los menús por su ID
const menus = document.querySelectorAll('#menu');
// Recorre la lista de botones del menú
menuButtons.forEach((menuButton, index) => {
  // Asegura que la propiedad display del menú esté inicialmente establecida en 'none'
  menus[index].style.display = 'none';
  // Agrega un evento de clic al botón del menú
  menuButton.addEventListener('click', () => {
    // Si el menú está oculto (display = 'none')
    if (menus[index].style.display === 'none') {
      // Muestra el menú (display = 'flex')
      menus[index].style.display = 'flex';
      // Agrega la animación de entrada al menú
      menus[index].style.animationName = 'slide-in';
    } else {
      // Si el menú está visible, agrega la animación de salida
      menus[index].style.animationName = 'slide-out';
      // Después de 400 milisegundos (duración de la animación), oculta el menú
      setTimeout(() => menus[index].style.display = 'none', 400);
    }
  });
});


//Este codigo es para el cambio de div product-catalog: Novedades, Panes y Galletas
function mostrarCatalogo(catalogo) {
  // obtener todos los elementos con clase 'product-catalog'
  var elementos = document.getElementsByClassName('product-catalog');
  // recorrer los elementos y ocultarlos
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.display = 'none';
  }
  // mostrar el elemento correspondiente al catálogo seleccionado
  document.getElementById(catalogo).style.display = 'block';
}


// Este codigo es funcionamiento del slider de los productos mostados en los catalogos
// Selecciona todos los elementos con la clase 'slider' y los almacena en la variable 'sliders'
const sliders = document.querySelectorAll('.slider');
// Para cada elemento en 'sliders'
sliders.forEach(slider => {
  // Selecciona todas las imágenes dentro del elemento 'slider' y las almacena en la variable 'slides'
  const slides = slider.querySelectorAll('img');  
  // Inicializa la variable 'index' en 0
  let index = 0;  
  // Define la función 'moveSlide'
  function moveSlide() {
    // Elimina la clase 'active' del elemento actual en 'slides'
    slides[index].classList.remove('active');
    // Incrementa el valor de 'index' en 1
    index++;
    // Si el valor de 'index' es igual a la longitud de 'slides', restablece su valor a 0
    if (index === slides.length) {
      index = 0;
    } 
    // Agrega la clase 'active' al nuevo elemento actual en 'slides'
    slides[index].classList.add('active');
  }
  // Ejecuta la función 'moveSlide' cada 5000 milisegundos (5 segundos)
  setInterval(moveSlide, 5000);
});


// Este Codigo JavaScript pertenece a la interaccion de la ventana emergente de los porductos
// Obtener todos los elementos del botón con la clase "add-to-cart"
var addToCartButtons = document.querySelectorAll('.add-to-cart');
// Recorrer todos los elementos del botón y agregar un detector de eventos a cada uno
addToCartButtons.forEach(function(addToCartButton) {
  // Agregar un detector de eventos al botón que escucha un evento de clic
  addToCartButton.addEventListener('click', function() {
    // Obtener el elemento emergente correspondiente a este botón
    var popup = addToCartButton.closest('.col').querySelector('.popup');
    // Mostrar el elemento emergente estableciendo su estilo de visualización en "block"
    popup.style.display = 'block';
  });
});
// Obtener todos los elementos del botón con la clase "add-to-cart" dentro del elemento emergente
var addToCartButtonsInPopup = document.querySelectorAll('.popup .add-to-cart');
// Recorrer todos los elementos del botón y agregar un detector de eventos a cada uno
addToCartButtonsInPopup.forEach(function(addToCartButtonInPopup) {
  // Agregar un detector de eventos al botón que escucha un evento de clic
  addToCartButtonInPopup.addEventListener('click', function() {
    // Obtener el elemento emergente correspondiente a este botón
    var popup = addToCartButtonInPopup.closest('.popup');
    // Agregar la clase "hide" al elemento emergente para activar la animación de desvanecimiento
    popup.classList.add('hide');  
    // Esperar a que termine la animación antes de ocultar el elemento emergente
    setTimeout(function() {
      popup.style.display = 'none';
      popup.classList.remove('hide');
    }, 1000);
  });
});
// Obtener todos los elementos del botón con la clase "close"
var closeButtons = document.querySelectorAll('.close');
// Recorrer todos los elementos del botón y agregar un detector de eventos a cada uno
closeButtons.forEach(function(closeButton) {
  // Agregar un detector de eventos al botón que escucha un evento de clic
  closeButton.addEventListener('click', function() {
    // Obtener el elemento emergente correspondiente a este botón
    var popup = closeButton.closest('.popup');   
    // Agregar la clase "hide" al elemento emergente para activar la animación de desvanecimiento
    popup.classList.add('hide');   
    // Esperar a que termine la animación antes de ocultar el elemento emergente
    setTimeout(function() {
      popup.style.display = 'none';
      popup.classList.remove('hide');
    }, 1000);
  });
});