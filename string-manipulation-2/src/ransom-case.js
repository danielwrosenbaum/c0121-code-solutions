/* exported ransomCase */
function ransomCase(string) {
  var ransomString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      ransomString += string[i].toUpperCase();
    } else {
      ransomString += string[i].toLowerCase();
    }
  }
  return ransomString;
}
