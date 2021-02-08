/* exported dropRight */
function dropRight(array, count) {
  var takeArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i < (array.length - count)) {
      takeArray.push(array[i]);
    }
  }
  return takeArray;
}
