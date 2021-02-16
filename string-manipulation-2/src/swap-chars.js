/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var firstLetter = string.charAt(firstIndex);
  var secondLetter = string.charAt(secondIndex);
  var reverseStringFirst = string.replace(firstLetter, secondLetter);
  var splitString = reverseStringFirst.split('');
  splitString[secondIndex] = firstLetter;
  var reverseString = splitString.join('');
  return reverseString;
}
