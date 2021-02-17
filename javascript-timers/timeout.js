var oldHeading = document.querySelector('h1');
function changeHeading() {
  oldHeading.textContent = 'Hello There';
}
setTimeout(changeHeading, 2 * 1000);
