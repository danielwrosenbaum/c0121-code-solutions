
var buttonClicks = 0;
function addClicks(event) {
  buttonClicks++;
  clickCount.textContent = 'Clicks: ' + buttonClicks;
  if (buttonClicks < 4) {
    hotButton.className = 'hot-button cold';
  } else if (buttonClicks < 7) {
    hotButton.className = 'hot-button cool';
  } else if (buttonClicks < 10) {
    hotButton.className = 'hot-button tepid';
  } else if (buttonClicks < 13) {
    hotButton.className = 'hot-button warm';
  } else if (buttonClicks < 16) {
    hotButton.className = 'hot-button hot';
  } else {
    hotButton.className = 'hot-button nuclear';
  }
}
var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');
hotButton.addEventListener('click', addClicks);
