var $circleButtons = document.querySelectorAll('.circle');
var $viewList = document.querySelectorAll('.view');
var $rightArrow = document.querySelector('.right');
var $leftArrow = document.querySelector('.left');
var $bottomButton = document.querySelectorAll('.bottom');
var $navBar = document.querySelector('.nav-bar');
$rightArrow.addEventListener('click', nextImage);
$leftArrow.addEventListener('click', prevImage);
$navBar.addEventListener('click', changeButton);

var counter = 0;
var totalCounter = $viewList.length
var timer = setInterval(nextImage, 3000)
var pause = false;

function deactivate(list, button) {
  list[counter].className = 'view hidden';
  button[counter].className = 'circle far fa-circle fa-3x';
}

function activate(list, button) {
  list[counter].className = 'view';
  button[counter].className = 'circle fas fa-circle fa-3x'
}
function nextImage() {
  deactivate($viewList, $circleButtons);
  counter = (counter +1) % totalCounter;
  activate($viewList, $circleButtons);
}

function prevImage() {
  deactivate($viewList, $circleButtons);
  if (counter === 0) {
    counter = totalCounter - 1;
  } else {
    counter = (counter -1);
  }
  activate($viewList, $circleButtons);
}

function changeButton(event) {
  if (event.target.matches('i')) {
    for (var i = 0; i < $bottomButton.length; i++) {
      if (event.target === $bottomButton[i]) {
        $bottomButton[i].className = 'bottom active';
      } else {
        $bottomButton[i].className = 'bottom';
      }
    }
    var dataValue = event.target.getAttribute('data-view');
    for (i = 0; i < $viewList.length; i++) {
      var listAttribute = $viewList[i].getAttribute('data-view');
      if (dataValue === listAttribute) {
        $viewList[i].className = 'view';
        $circleButtons[i].className = 'circle fas fa-circle fa-3x';
      } else {
        $viewList[i].className = 'hidden';
        $circleButtons[i].className = 'circle far fa-circle fa-3x';
      }
    }
  }
}
