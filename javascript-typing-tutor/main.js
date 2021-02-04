var allLetters = document.querySelectorAll('span');
// var keyText = document.querySelector('span.text');

function changeColor(event) {
  for (var i = 0; i < allLetters.length; i++) {
    allLetters[i].className = 'text underline';
    if (event.key === allLetters[i].textContent) {
      allLetters[i].className = 'text green';
    } else if (event.key !== allLetters[i].textContent) {
      allLetters.className = 'text red';
    }
  }
}
document.addEventListener('keydown', changeColor);
