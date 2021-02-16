/* exported capitalizeWords */
function capitalizeWords(string) {
  var lowerCase = string.toLowerCase();
  var stringArray = lowerCase.split(' ');
  for (var i = 0; i < stringArray.length; i++) {
    stringArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].substr(1);
  }
  return stringArray.join(' ');
}
