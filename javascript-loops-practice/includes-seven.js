/* exported includesSeven */
function includesSeven(array) {
  var i = 0;
  while (i < array.length) {
    i++;
    if (i === 7) {
      return true;
    }
  }
  return false;
}
