var buy = document.querySelectorAll('.buy');
var overlay = document.querySelector('.overlay');
var modalCart= document.querySelector('.modal-cart');
var closeModalCart = document.querySelector('.modal-cart .close')

var open = document.querySelector('.btn-contact');
var modal = document.querySelector('.modal-feedback');
var close = document.querySelector('.modal-feedback .close');

var mapOpen = document.querySelector('.btn-map');
var map = document.querySelector('.map');
var mapClose = document.querySelector('.map .close');
var i;

for(i = 0; i < buy.length; i++) {
  buy[i].addEventListener('click', function(event) {
    event.preventDefault();
    modalCart.classList.add('show');
    overlay.classList.add('overlay-show');
  });
}

open.addEventListener('click', function(event) {
  event.preventDefault();
  modal.classList.add('show');
  overlay.classList.add('overlay-show');
})

mapOpen.addEventListener('click', function(event) {
  event.preventDefault();
  map.classList.add('show');
  overlay.classList.add('overlay-show');
})

closeModalCart.addEventListener('click', function(event) {
  event.preventDefault();
  modalCart.classList.remove('show');
  overlay.classList.remove('overlay-show');
})

close.addEventListener('click', function(event) {
  event.preventDefault();
  modal.classList.remove('show');
  overlay.classList.remove('overlay-show');
})

overlay.addEventListener('click', function(event) {
  event.preventDefault();  
  modal.classList.remove('show');
  map.classList.remove('show');
  overlay.classList.remove('overlay-show');
})

mapClose.addEventListener('click', function(event) {
  event.preventDefault();
  map.classList.remove('show');
  overlay.classList.remove('overlay-show');
})

window.addEventListener('keydown', function(event) {
  if(event.keyCode === 27) {
    if(modal.classList.contains('show')) {
       modal.classList.remove('show');
    }
  }
})
