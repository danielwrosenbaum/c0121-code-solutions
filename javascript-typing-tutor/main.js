var allLetters = document.querySelectorAll('span');
// var question = document.querySelector('h2');
var i = 0;
document.addEventListener('keydown', function (event) {
  if (event.key === allLetters[i].textContent) {
    allLetters[i].className = 'green';
    i++;
    allLetters[i].className = 'black-underline';
  } else {
    allLetters[i].className = 'red-underline';

  }
}
);
