
const btnAbrirPopup = document.getElementById('botones'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup');

btnAbrirPopup.addEventListener('click', ()=>{
	overlay.classList.add('active');
	popup.classList.add('active');
});
