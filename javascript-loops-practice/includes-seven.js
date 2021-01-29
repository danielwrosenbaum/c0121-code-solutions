/* exported includesSeven */

function includesSeven(array) {
  var index = [];
  var i = 0;
  while (i < array.length) {
    index.push(i);
    i++;
  }
  if (i === 7) {
    return true;
  } else {
    return false;
  }
}
