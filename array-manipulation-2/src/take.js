/* exported take */
function take(array, count) {
  var arrayLength = [];
  for (var i = 0; i <= count - 1; i++) {
    if (array.length <= 1) {
      return array;
    } else {
      arrayLength.push(array[i]);
    }
  }
  return arrayLength;
}
