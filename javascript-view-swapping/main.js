var tabContainer = document.querySelector('.tab-container');
var tabList = document.querySelectorAll('.tab');
var viewList = document.querySelectorAll('.view');

tabContainer.addEventListener('click', checkFunction);

function checkFunction(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabList.length; i++) {
      if (event.target === tabList[i]) {
        tabList[i].className = 'tab active';

      } else {
        tabList[i].className = 'tab';
      }
    }
    var dataValue = event.target.getAttribute('data-view');
    for (i = 0; i < viewList.length; i++) {
      var listAttribute = viewList[i].getAttribute('data-view');
      if (dataValue === listAttribute) {
        viewList[i].className = 'view';
      } else {
        viewList[i].className = 'hidden';
      }
    }
  }
}
