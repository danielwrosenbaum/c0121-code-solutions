function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name: ', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name: ', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name: ', event.target.name);
  console.log('event.target.value: ', event.target.value);
}

var formName = document.querySelector('input[name="name"]');
var formEmail = document.querySelector('input[name="email"]');
var formTextArea = document.querySelector('textarea');

formName.addEventListener('focus', handleFocus);
formName.addEventListener('blur', handleBlur);
formName.addEventListener('input', handleInput);

formEmail.addEventListener('focus', handleFocus);
formEmail.addEventListener('blur', handleBlur);
formEmail.addEventListener('input', handleInput);

formTextArea.addEventListener('focus', handleFocus);
formTextArea.addEventListener('blur', handleBlur);
formTextArea.addEventListener('input', handleInput);
