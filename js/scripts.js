var open = document.querySelector('.btn-contact');
var modal = document.querySelector('.modal-feedback');
var close = modal.querySelector('.close');
var overlay = document.querySelector('.overlay');

var mapOpen = document.querySelector('.btn-map');
var map = document.querySelector('.map');
var mapClose = map.querySelector('.close');

open.addEventListener('click', function(event) {
  event.preventDefault();
  modal.classList.add('show');
  overlay.classList.add('overlay-show');
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

mapOpen.addEventListener('click', function(event) {
  event.preventDefault();
  map.classList.add('show');
  overlay.classList.add('overlay-show');
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