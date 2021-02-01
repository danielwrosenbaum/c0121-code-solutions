/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var newArray = [];
  var x = 0;
  while (x < words.length) {
    newArray.push(words[x] + suffix);
    x++;
  }
  return newArray;
}
