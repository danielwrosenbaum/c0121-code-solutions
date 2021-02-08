/* exported takeRight */
function takeRight(array, count) {
  var giveArray = [];
  for (var i = (array.length - count); i < array.length; i++) {
    if (array[i] !== undefined) {
      giveArray.push(array[i]);
    }
  }
  return giveArray;
}
