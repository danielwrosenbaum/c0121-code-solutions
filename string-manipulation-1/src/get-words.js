/* exported getWords */
function getWords(string) {
  var arrayString = [];
  if (string.length < 1) {
    return arrayString;
  } else {
    arrayString = string.split(' ');
  }
  return arrayString;
}
