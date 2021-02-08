/* exported takeRight */
function takeRight(array, count) {
  var takeArray = [];
  var giveArray = [];
  for (var i = 0; i < array.length; i++) {
    var newValue = (array.length - count);
    if (i < newValue) {
      takeArray.push(array[i]);
    } else {
      giveArray.push(array[i]);
    }
  }
  return giveArray;
}
