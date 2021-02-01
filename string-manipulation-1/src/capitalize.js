/* exported capitalize */
function capitalize(word) {
  var lowerCase = word.toLowerCase();
  var upperCase = word[0].toUpperCase();
  var lowerCaseWord;
  if (word.length < 2) {
    return upperCase;
  } else {
    lowerCaseWord = lowerCase.substr(1);
  }
  return upperCase + lowerCaseWord;
}
