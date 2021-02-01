/* exported getKeys */
function getKeys(object) {
  var objectArray = [];
  for (var key in object) {
    objectArray.push(key);
  }
  return objectArray;
}
