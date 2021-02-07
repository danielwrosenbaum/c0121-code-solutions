/* exported capitalizeWord */
function capitalizeWord(word) {
  var lowerCase = word.toLowerCase();
  var noFirstLetter = lowerCase.substr(1, word.length);
  var upperCase = word[0].toUpperCase();
  var newWord = upperCase + noFirstLetter;
  if (newWord === 'Javascript') {
    var java = newWord[4].toUpperCase();
    var newS = newWord.substr(5, newWord.length);
    var javaS = newWord.substr(0, 4);
    return javaS + java + newS;
  }
  return newWord;
}
