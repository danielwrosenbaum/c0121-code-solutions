/* exported todos */

var todos = [];
// There is an empty array assigned to the variable todos.
var previousTodosJSON = localStorage.getItem('javascript-local-storage');
// the getItem method of the localStorage object is being called with one argument:
/// the string 'javascript-local-storage' and the return is being assigned to the variable previousTodosJson.
todos = JSON.parse(previousTodosJSON);
// the parse method of the JSON object is being called with one argument:
// the variable previousTodosJSON. and the return is being assigned to the variable todos
window.addEventListener('beforeunload', function () {
// the addEventListener method of the widow object is being called with two arguments:
// the string 'beforeunload' and an anonymous function followed by the opening curly brace for the function code block
  var todosJSON = JSON.stringify(todos);
  // the stringify method of the JSON object is being called with one argument:
  // the variable todos and the return is being assigned to the variable todosJSON

  localStorage.setItem('javascript-local-storage', todosJSON);
});
// the setItem method of the localStorage object is being called with two arguments:
// the string 'javascript-local-storage' and the variable todosJSON
// followed by the closing curly brace for the function definition and the closing parentheses for the addEventListener method
