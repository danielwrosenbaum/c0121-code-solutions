var keys = Array.from(document.querySelectorAll('span'));
var keyText = document.querySelector('.text');

document.addEventListener('DOMContentLoaded', init);
function init() {
  var text = document.querySelector('.text');
  text.addEventListener('keydown', anyKey);
  document.body.addEventListener('keydown', anyKey);
}

function anyKey(event) {
  // console.log( ev.type, ev.target);
  // var char =  event.charCode || event.which;
  // var s = String.fromCharCode(char);
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] === event.key) {
      keys.className = 'text green underline';

    }
  }
}
function changeColor(event) {
  keyText.className = 'text green underline';
}
keyText.addEventListener('keydown', changeColor);
