/* exported isVowel */
function isVowel(char) {
  var vowel = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  for (var i = 0; i < vowel.length; i++) {
    if (char === vowel[i]) {
      return true;
    }
  }
  return false;
}
