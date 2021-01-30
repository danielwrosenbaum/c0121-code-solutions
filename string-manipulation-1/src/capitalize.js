/* exported capitalize */
function capitalize(word) {
  var upperCase;
  var lowerCase;
  var lowerCaseWord;
  for (var i = 0; i < word.length; i++) {
    upperCase = word[0].toUpperCase();
    if (word.length < 2) {
      return upperCase;
    } else {
      lowerCase = word.toLowerCase();
      lowerCaseWord = lowerCase.substr(1);
    }
  }
  return upperCase + lowerCaseWord;
}
