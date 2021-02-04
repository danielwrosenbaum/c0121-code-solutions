var contactForm = document.querySelector('#contact-form');
function submitEvent(event) {
  event.preventDefault();
  var name = contactForm.elements.email.value;
  var email = contactForm.elements.name.value;
  var message = contactForm.elements.message.value;
  var newObj = {
    name: name,
    email: email,
    message: message
  };
  console.log('message data: ', newObj);
  contactForm.reset();
}

contactForm.addEventListener('submit', submitEvent);
