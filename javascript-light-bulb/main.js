var lightBulb = document.querySelector('.container');
var skyLight = document.querySelector('.sky');

function lightsOn(event) {
  if (skyLight.className === 'sky night') {
    lightBulb.className = 'container light';
    skyLight.className = 'sky day';
  } else if (skyLight.className !== 'sky night') {
    lightBulb.className = 'container dark';
    skyLight.className = 'sky night';
  }
}
skyLight.addEventListener('click', lightsOn);
