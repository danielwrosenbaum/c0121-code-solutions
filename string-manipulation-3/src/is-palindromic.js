/* exported isPalindromic */
function isPalindromic(string) {
  var noSpaces = string.replaceAll(" ", '')
  var i = 0;
  var j = noSpaces.length -1;
  for (i; i <noSpaces.length; i++) {
  if (noSpaces[i] === noSpaces[j]) {
    j--;
  } else {
    return false;
  }
}
  return true;
}
