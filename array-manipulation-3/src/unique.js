/* exported unique */
function unique(array) {
  var newArray = [];
  var returnArray = [];
  for (var i =0; i < array.length; i++) {
    var index = array[i];
    if (newArray[index] === undefined) {
      newArray[index] = true;
      returnArray.push(index);
    }
  }
  return returnArray;
}
