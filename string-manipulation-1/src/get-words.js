/* exported getWords */
function getWords(string) {
  var arrayString = [];
  for (var i = 0; i < string.length; i++) {
    if (i < 0) {
      return arrayString;
    } else {
      arrayString = string.split(' ');
    }
  }
  return arrayString;
}
