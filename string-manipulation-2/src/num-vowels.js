/* exported numVowels */

function numVowels(string) {
  var vowelNumber = 0;
  var numArray = [];
  var lowerCaseString = string.toLowerCase();
  for (var i = 0; i < lowerCaseString.length; i++) {
    if (lowerCaseString.charAt(i) === 'a' || lowerCaseString.charAt(i) === 'e' || lowerCaseString.charAt(i) === 'i' ||
      lowerCaseString.charAt(i) === 'o' || lowerCaseString.charAt(i) === 'u') {
      vowelNumber++;
      numArray.push(vowelNumber);
    }

  }
  return numArray.length;
}
