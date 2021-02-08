/* exported dropRight */
function dropRight(array, count) {
  var takeArray = [];
  for (var i = 0; i < array.length; i++) {
    var newValue = (array.length - count);
    if (i < newValue) {
      takeArray.push(array[i]);
    }
  }
  return takeArray;
}
