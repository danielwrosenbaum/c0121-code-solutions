/* exported getValues */
function getValues(object) {
  var returnArray = [];
  for (var key in object) {
    returnArray.push(object[key]);
  }
  return returnArray;
}
