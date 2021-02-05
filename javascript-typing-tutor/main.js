var allLetters = document.querySelectorAll('span');

document.addEventListener('keydown', changeColor);

function changeColor(event) {
  var i = 0;
  allLetters[i].className = 'underline';
  for (i; i < allLetters.length; ++i) {
    allLetters[i].className = 'text';
    var oneLetter = allLetters[i].textContent;
    if (event.key === oneLetter) {
      allLetters[i].className = 'green underline';
      // console.log('letters:', oneLetter);
    } else {
      allLetters[i].className = 'red';
    }
  }
}
