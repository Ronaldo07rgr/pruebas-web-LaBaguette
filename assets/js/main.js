// Este codigo pertenece al submene que aparece al dar clic en Nosotros en el menu de navegacion
// Obtiene el elemento que tiene la clase 'has-submenu'
const hasSubmenu = document.querySelector('.has-submenu');
// Obtiene el submenú
const submenu = document.querySelector('.submenu');
// Asegura que la propiedad display del submenú esté inicialmente establecida en 'none'
submenu.style.display = 'none';


// codigo de el menu desplegable del carrito de compras
// Define la función showCartMenu para mostrar el menú del carrito
function showCartMenu() { // Obtiene el elemento del menú del carrito por su ID
    var cartMenu = document.getElementById("cartMenu");
    // Cambia la propiedad de estilo display del menú del carrito a "block" para hacerlo visible
    cartMenu.style.display = "block";
}
// Define la función hideCartMenu para ocultar el menú del carrito
function hideCartMenu() { 
    // Obtiene el elemento del menú del carrito por su ID
    var cartMenu = document.getElementById("cartMenu");
    // Cambia la propiedad de estilo display del menú del carrito a "none" para ocultarlo
    cartMenu.style.display = "none";
}


//Codigo de la seleccion del boton pedido: domicio o ir ala tienda
// Define una función llamada 'selectButton' que toma un parámetro llamado 'button'
function selectButton(button) { 
   // Obtiene una referencia a un elemento en la página con el ID "button2" y lo almacena en la variable 'button2'
    var button2 = document.getElementById("button2"); 
    // Obtiene una referencia a un elemento en la página con el ID "button3" y lo almacena en la variable 'button3'
    var button3 = document.getElementById("button3"); 
    // Elimina la clase "selected" del elemento almacenado en 'button2'
    button2.classList.remove("selected"); 
    // Elimina la clase "selected" del elemento almacenado en 'button3'
    button3.classList.remove("selected"); 
    // Agrega la clase "selected" al elemento pasado como parámetro 'button'
    button.classList.add("selected"); 
}


//este codigo pertenece al menu del carrito de comprar donde cada producto se añadira aqui
// Agrega un evento de clic al elemento que tiene la clase 'has-submenu'
hasSubmenu.addEventListener('click', (event) => { // Evita que el enlace se siga
    event.preventDefault();
    // Si el submenú está oculto (display = 'none')
    if (submenu.style.display === 'none') { 
        // Muestra el submenú (display = 'block')
        submenu.style.display = 'block';
    } else { // Si el submenú está visible, lo oculta (display = 'none')
        submenu.style.display = 'none';
    }
});
const addToCartBtns = document.querySelectorAll('.add-to-cart1');
const cartItemsContainer = document.querySelector('.cart-items');
const cart = {};
const subtotalBtn = document.querySelector('#subtotal-button');
function createCartItem(productName, productPrice, productImage) {
  const priceFloat = parseFloat(productPrice.replace('$', '').replace(',', ''));
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.setAttribute('data-product-name', productName);
  cartItem.innerHTML = `
    <div>
      <div class="item-image" style="display="flex">
        <img src="${productImage}" alt="${productName}">
        <div class="item-details">
          <h3>${productName}</h3>
          <p class="precio">${productPrice}</p>
        </div>
        <button class="remove-btn">X</button>
      </div>
    </div>
    <div class="item-quantity">
      <button class="quantity-btn minus-btn">-</button>
      <input type="number" class="quantity-input" value="0" min="0" readonly>
      <button class="quantity-btn plus-btn">+</button>
    </div>
  `;
  cartItemsContainer.appendChild(cartItem);
  return cartItem;
}
function updateCartItemQuantity(productName, cartItem, quantity) {
  const quantityInput = cartItem.querySelector('.quantity-input');
  cart[productName] = quantity;
  quantityInput.value = quantity;
  updateSubtotal();
}

function updateSubtotal() {
  let subtotal = 0;
  const precioElems = document.querySelectorAll('.cart-item .precio');
  precioElems.forEach((elem) => {
    const precio = parseFloat(elem.textContent.replace('$', '').replace(',', ''));
    const quantityInput = elem.closest('.cart-item').querySelector('.quantity-input');
    const quantity = parseInt(quantityInput.value);
    subtotal += precio * quantity;
  });
  subtotalBtn.textContent = `Subtotal: $${subtotal.toFixed(2).replace('.', ',')}`;
}

addToCartBtns.forEach(addToCartBtn => {
  addToCartBtn.addEventListener('click', () => {
    const productName = addToCartBtn.closest('.col').querySelector('h3').textContent;
    const productPrice = addToCartBtn.closest('.col').querySelector('.precio').textContent;
    const productImage = addToCartBtn.closest('.col').querySelector('.product-image img').src;
    if (cart[productName]) {
      const existingCartItem = cartItemsContainer.querySelector(`[data-product-name="${productName}"]`);
      updateCartItemQuantity(productName, existingCartItem, cart[productName] + 1);
    } else {
      cart[productName] = 0; 
      const cartItem = createCartItem(productName, productPrice, productImage);
      const minusBtn = cartItem.querySelector('.minus-btn');
      const plusBtn = cartItem.querySelector('.plus-btn');
      const quantityInput = cartItem.querySelector('.quantity-input');
      const removeBtn = cartItem.querySelector('.remove-btn');
      minusBtn.addEventListener('click', () => {
        if (cart[productName] > 1) {
          updateCartItemQuantity(productName, cartItem, cart[productName] - 1);
        }
      });
      plusBtn.addEventListener('click', () => {
        updateCartItemQuantity(productName, cartItem, cart[productName] + 1);
      });
      removeBtn.addEventListener('click', () => {
        const cartItem = removeBtn.closest('.cart-item');
        cartItem.classList.add('fade-out');
        const cartItems = Array.from(document.querySelectorAll('.cart-item'));
        const index = cartItems.indexOf(cartItem);
        cartItems.slice(index + 1).forEach(item => {
          const top = parseInt(item.style.top);
          item.style.top = `${top - cartItem.offsetHeight}px`;
        });
        setTimeout(() => {
          cartItem.remove();
          delete cart[productName];
          updateSubtotal(); // Agrega esta línea para actualizar el subtotal
        }, 300);
      });
    }
  });
});