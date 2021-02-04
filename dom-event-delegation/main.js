var taskList = document.querySelector('.task-list');
taskList.addEventListener('click', clickTask);

function clickTask(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var closeElement = event.target.closest('li');
    console.log('closest .task-list-item: ', closeElement);
    closeElement.remove();
  }
}
