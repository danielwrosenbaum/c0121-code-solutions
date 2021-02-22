/* exported reverseWords */
function reverseWords(string) {
  var splitString = string.split(' ');
  var newArray = [];
  for (var i = 0; i < splitString.length; i++) {
    for (var j = splitString[i].length; j >= 0; j--) {
      newArray.push(splitString[i][j])
      if (splitString[i][j] === undefined){
        newArray.push(' ');
      }
      var newString = newArray.join('');
      var newString2 = newString.substr(1)
    }
  }
  return newString2
}
