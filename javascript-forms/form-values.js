var contactForm = document.querySelector('#contact-form');
function submitEvent(event) {
  var emailVal = contactForm.elements.email.value;
  var nameVal = contactForm.elements.name.value;
  var msgVal = contactForm.elements.message.value;
  var newObj = {};
  event.preventDefault();
  newObj.email = emailVal;
  newObj.name = nameVal;
  newObj.message = msgVal;
  console.log('message data: ', newObj);
  contactForm.reset();
}
contactForm.addEventListener('submit', submitEvent);
