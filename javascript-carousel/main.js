var $circleButtons = document.querySelectorAll('.circle');
var $viewList = document.querySelectorAll('.view');
var $rightArrow = document.querySelector('.right');
var $leftArrow = document.querySelector('.left');
var $bottomButton = document.querySelectorAll('.bottom');
var $navBar = document.querySelector('.nav-bar');
var timer = setInterval(changeImage, 3000);
$rightArrow.addEventListener('click', changeImageWithRightArrow);
$leftArrow.addEventListener('click', changeImageWithLeftArrow);
$navBar.addEventListener('click', changeButton);

function changeImage() {
  var i = 0;
  for (i; i < $viewList.length; i++) {
    if ($viewList[i].className === 'view') {
      $viewList[i].className = 'view hidden';
      $circleButtons[i].className = ('circle far fa-circle fa-3x');
      i++;
      if (i < $viewList.length) {
        $viewList[i].className = 'view';
        $circleButtons[i].className = 'circle fas fa-circle fa-3x';
      } else if (i === $viewList.length) {
        $viewList[0].className = 'view';
        $circleButtons[0].className = 'circle fas fa-circle fa-3x';
      }
    }

  }
}

function changeImageWithRightArrow(event) {
  var j = 0;
  for (j; j < $viewList.length; j++) {
    if ($viewList[j].className === 'view') {
      $viewList[j].className = 'view hidden';
      $circleButtons[j].className = ('circle far fa-circle fa-3x');
      j++;
      if (j < $viewList.length) {
        $viewList[j].className = 'view';
        $circleButtons[j].className = 'circle fas fa-circle fa-3x';
      } else {
        $viewList[0].className = 'view';
        $circleButtons[0].className = 'circle fas fa-circle fa-3x';
      }
    }
  }
}

function changeImageWithLeftArrow(event) {
  var y = $viewList.length - 1;
  for (var x = 0; x < $viewList.length; x++) {
    if ($viewList[x].className === 'view') {
      $viewList[x].className = 'view hidden';
      $circleButtons[x].className = ('circle far fa-circle fa-3x');
      x--;
      if (x >= 0) {
        $viewList[x].className = 'view';
        $circleButtons[x].className = 'circle fas fa-circle fa-3x';
      } else {
        $viewList[y].className = 'view';
        $circleButtons[y].className = 'circle fas fa-circle fa-3x';
        x--;
      }
    }
  }
}

function changeButton(event) {
  clearInterval(timer);
  if (event.target.matches('i')) {
    for (var z = 0; z < $bottomButton.length; z++) {
      if (event.target === $bottomButton[z]) {
        $bottomButton[z].className = 'bottom active';
      } else {
        $bottomButton[z].className = 'bottom';
      }
    }
    var dataValue = event.target.getAttribute('data-view');
    for (z = 0; z < $viewList.length; z++) {
      var listAttribute = $viewList[z].getAttribute('data-view');
      if (dataValue === listAttribute) {
        $viewList[z].className = 'view';
        $circleButtons[z].className = 'circle fas fa-circle fa-3x';
      } else {
        $viewList[z].className = 'hidden';
        $circleButtons[z].className = 'circle far fa-circle fa-3x';
      }
    }
  }

}
