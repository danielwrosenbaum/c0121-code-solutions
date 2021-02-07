var allLetters = document.querySelectorAll('span');
var top = document.querySelector('.top');
var i = 0;

document.addEventListener('keydown', function (event) {
  if (event.key === allLetters[i].textContent) {
    allLetters[i].className = 'green';
    i++;
    if (i < allLetters.length - 1) {
      allLetters[i].className = 'black-underline';
    } else {
      allLetters[i].className = 'text';
      top.className = 'top text';
      // return i;
    }
  } else if (event.key !== allLetters[i].textContent) {
    allLetters[i].className = 'red-underline';

  }
  return i;
}
);
var yesButton = document.querySelector('.yes');
function reload(event) {
  window.location.reload();
}
yesButton.addEventListener('click', reload);

var noButton = document.querySelector('.no');
var kBye = document.querySelector('.bye');
var finish = document.querySelector('.finish-line');
var wordz = document.querySelector('.wordz');
function bye(event) {
  kBye.className = 'bye';
  finish.className = 'hidden';
  wordz.className = 'hidden';
}
noButton.addEventListener('click', bye);
