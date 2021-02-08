/* exported take */
function take(array, count) {
  var arrayLength = [];
  if (array.length <= 1) {
    return array;
  }
  for (var i = 0; i <= count - 1; i++) {
    arrayLength.push(array[i]);
  }
  return arrayLength;
}
