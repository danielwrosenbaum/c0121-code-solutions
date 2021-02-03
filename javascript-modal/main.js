var noModal = document.querySelector('.modal');
var onButton = document.querySelector('.button');
var overlayOn = document.querySelector('.overlay');

function modalOn(event) {
  noModal.className = 'modal modalOn';
  overlayOn.className = 'overlay overlayOn';
  onButton.className = 'button';
}
onButton.addEventListener('click', modalOn);

var noButton = document.querySelector('.modal-button');
function modalOff(event) {
  overlayOn.className = 'overlay off';
  onButton.className = 'button buttonPosition';
}
noButton.addEventListener('click', modalOff);
