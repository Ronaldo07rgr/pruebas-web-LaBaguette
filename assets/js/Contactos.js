// Este codigo pertenece al submene que aparece al dar clic en Nosotros en el menu de navegacion
// Obtiene el elemento que tiene la clase 'has-submenu'
const hasSubmenu = document.querySelector('.has-submenu');
// Obtiene el submenú
const submenu = document.querySelector('.submenu');
// Asegura que la propiedad display del submenú esté inicialmente establecida en 'none'
submenu.style.display = 'none';

// Agrega un evento de clic al elemento que tiene la clase 'has-submenu'
hasSubmenu.addEventListener('click', (event) => {
  // Evita que el enlace se siga
  event.preventDefault();
  // Si el submenú está oculto (display = 'none')
  if (submenu.style.display === 'none') {
    // Muestra el submenú (display = 'block')
    submenu.style.display = 'block';
  } else {
    // Si el submenú está visible, lo oculta (display = 'none')
    submenu.style.display = 'none';
  }
});

// Selecciona todos los elementos con la clase .field
const fields = document.querySelectorAll('.field');
// Recorre cada elemento seleccionado
fields.forEach((field) => {
  // Agrega un controlador de eventos para el evento 'input'
  field.addEventListener('input', () => {
    // Verifica si el valor del campo no está vacío
    if (field.value !== '') {
      // Agrega la clase .has-value al campo
      field.classList.add('has-value');
    } else {
      // Elimina la clase .has-value del campo
      field.classList.remove('has-value');
    }
  });
});

// Selecciona el elemento con la clase .submit y agrega un controlador de eventos para el evento 'click'
document.querySelector('.submit').addEventListener('click', function() {
  // Muestra el elemento con la clase .modal
  document.querySelector('.modal').style.display = 'block';
  // Muestra el elemento con la clase .opacidad
  document.querySelector('.opacidad').style.display = 'block';
});
// Selecciona el elemento con la clase .close y agrega un controlador de eventos para el evento 'click'
document.querySelector('.close').addEventListener('click', function() {
  // Oculta el elemento con la clase .modal
  document.querySelector('.modal').style.display = 'none';
  // Oculta el elemento con la clase .opacidad
  document.querySelector('.opacidad').style.display = 'none';
});


