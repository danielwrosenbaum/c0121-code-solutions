/* global uuid, todos */

var $todoForm = document.querySelector('#todo-form');
// the querySelector method of the document object is being called with one argument:
// the string '#todo-form' and the return is being assigned to the variable $todoForm

$todoForm.addEventListener('submit', function (event) {
  // the addEventListener method of the $todoForm object is being called with two arguments:
  // the string 'submit' and the anonymous function with the parameter 'event' followed by the opening curly brace for the function code block
  event.preventDefault();
  // the preventDefault method of the event object is being called with no arguments
  var todo = {
    // an object literal is being assigned to the variable todo followed by opening curly brace for the object literal
    todoId: uuid.v4(),
    // the v4 method of the uuid object is being called with no arguments and the retun is being assigned to the property todoID
    task: $todoForm.elements.task.value,
    // the value property of the task property of the element property of the $todoForm object is being assigned to the property task
    isCompleted: false
    // the boolean false is being assigned to the property isCompleted
  };
  // closing curly brace for the object literal
  todos.push(todo);
  // the push method of the todos object is being called with one argument: the variable todo
  $todoList.append(renderTodo(todo));
  // the append method of the $todoList object is being called with one argument:
  // the function renderTodo with one argument the variable todo
  $todoForm.reset();
  // the reset method of the $todoForm object is being called with no arguments
});
// closing curly brace for the function definiton and the closing parentheses for the addEventListener method

var $todoList = document.querySelector('#todo-list');
// the querySelector method of the document object is being called with one argument: the string '#todo-list'
// and the return is being assigned to the variable $todoList

$todoList.addEventListener('change', function (event) {
  // the addEventListener method of the $todoList object is being called with two arguments:
  // the string 'change' and an anonymous function with one parameter: event followed by the opening curly brace for the function def
  var todoId = event.target.getAttribute('id');
  // the getAttribute method of the target property of the event method is being called with one argument:
  // the string id and the return is being assigned to the variable todoID
  for (var i = 0; i < todos.length; i++) {
    // there is a for loop with the initialization of 0 being assigned to the variable i, the conditional
    // i is less than the length property of the todos object and the final expression of i increment
    if (todos[i].todoId === todoId) {
      // there is an if statement with the conditional the todoid property of the todos object at i is strictly equal
      // to the variable todoID followed by opening curly brace for the if statement
      todos[i].isCompleted = event.target.checked;
      // the checked property of the target property of the event target is being assigned to the isCompleted property of todos at i
      break;
      // there is a break statement
    }
    // closing curly brace for the if statement
  }
  // closing curly brace for the for statement
});
// closing curcly brace for the function definition and the closing parenthese for the addEventListener method

for (var i = 0; i < todos.length; i++) {
  // there is a for loop with the initialization of 0 being assigned to the variable i, the conditional
  // i is less than the length property of the todos object and the final expression of i increment
  // followed by opening curly brace for the for loop

  var $todo = renderTodo(todos[i]);
  // the renderTodo method is being called with one argument: the variable todos at i and the result is being returned
  // to the variable $todo
  $todoList.appendChild($todo);
  // the appendChild method of the $todoList object is being called with one argument: the variable $todo
}
// closing curly brace for for loop
function renderTodo(todo) {
  // there is a function named renderTodo with the parameter todo followed by opening curly brace for function definition

  /**
   * <li class="list-group-item">
   *   <div class="form-check d-flex">
   *     <input
   *       type="checkbox"
   *       id="{todo.todoId}"
   *       class="form-check-input">
   *     <label
   *       for="{todo.todoId}"
   *       class="form-check-label flex-grow-1 ml-2">
   *       {todo.task}
   *     </label>
   *   </div>
   * </li>
   */

  var $todo = document.createElement('li');
  // the createElement method of the document object is being called with one argument the string li
  // and the return is being assigned to the variable $todo
  $todo.setAttribute('class', 'list-group-item');
  // the setAttribute method of the $todo object is being called with two arguments:
  // the strings 'class' and 'list-group-item'

  var $formCheck = document.createElement('div');
  // the createElement method of the document object is being called with 1 argument the string div
  // and the return is being assigned the variable #formCheck
  $formCheck.setAttribute('class', 'form-check d-flex');
  // the setAttribute method of the $formCheck object is being called with two arguments:
  // the strings class and form-check d flex

  var $checkbox = document.createElement('input');
  // the createELement method of the document object is being called with one argument the string input
  // the return is being assingned to the variable $checkbox
  $checkbox.checked = todo.isCompleted;
  // the isCompleted property of the todo object is being assigned to the checked property of the checkbox object
  $checkbox.setAttribute('id', todo.todoId);
  // the setAttribute method of the checkbox object is being called with two arguments: the string id and the todoid property of the todo object
  $checkbox.setAttribute('type', 'checkbox');
  // the setAttribute method of the checkbox object is being called with two arguments the strings type and checkbox
  $checkbox.setAttribute('class', 'form-check-input');
  // the setattribute method of the checkobx object is being called with two arguments strings class and form check input

  var $label = document.createElement('label');
  // the createElement method of the document object is being called with one argument string label and the return is being assigned
  // to the variable $label
  $label.setAttribute('for', todo.todoId);
  // the setAttribute method of the $label object is being called with two arguments string for and the todoid property of the todo object
  $label.setAttribute('class', 'form-check-label flex-grow-1 ml-2');
  // the setattribute method of the label object is being called with two arguments strings class and form-check....

  $label.textContent = todo.task;
  // the task property of the todo object is being assigned to the textcontent property of the $label object

  $todo.append($formCheck);
  // the append method of the $todo object is being called with one argument the variable $formcheck
  $formCheck.append($checkbox, $label);
  // the append method of the $formcheck object is being called with two arguments the variables checkbox and label

  return $todo;
  // the value of the variable $todo is being returned
}
// the closing curly brace for the function definition
