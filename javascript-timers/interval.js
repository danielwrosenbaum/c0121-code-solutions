var oldHeading = document.querySelector('h1');

function countDown() {
  if (oldHeading.textContent === '4') {
    oldHeading.textContent = '3';
  } else if (oldHeading.textContent === '3') {
    oldHeading.textContent = '2';
  } else if (oldHeading.textContent === '2') {
    oldHeading.textContent = '1';
  } else {
    oldHeading.textContent = '~Earth Beeeeelooowww Us~';
  }
}
setInterval(countDown, 1000);
