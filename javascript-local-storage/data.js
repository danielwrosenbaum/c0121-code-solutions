/* exported todos */

var todos = [];
var previousTodosJSON = localStorage.getItem('javascript-local-storage');
todos = JSON.parse(previousTodosJSON);
window.addEventListener('beforeunload', function () {
  var todosJSON = JSON.stringify(todos);

  localStorage.setItem('javascript-local-storage', todosJSON);
});
