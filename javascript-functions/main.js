
function convertMinutesToSeconds(minutes) {
  var time = minutes * 60;
  return time;
}
var amountOfSeconds = convertMinutesToSeconds(5);
console.log('amountOfSeconds: ', amountOfSeconds);

function greet(name) {
  var greeting = 'Hey,' + ' ' + name;
  return greeting;
}
var myGreeting = greet('Beavis');
console.log('myGreeting: ', myGreeting);

function getArea(width, height) {
  var area = width * height;
  return area;
}
var areaOfRectangle = getArea(17, 42);
console.log('areaOfRectangle: ', areaOfRectangle);

function getFirstName(person) {
  var name = person.firstName;
  return name;
}
var theName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('theName: ', theName);

function getLastElement(array) {
  var lastElement = array.length - 1;
  var theArray = array[lastElement];
  return theArray;
}
var lastArray = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('lastElement:', lastArray);
