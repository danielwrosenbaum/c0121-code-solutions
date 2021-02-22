/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var firstNoSpaces = firstString.replaceAll(" ", '');
  var secondNoSpace = secondString.replaceAll(" ", '');
  var firstArray = firstNoSpaces.split('').sort();
  var secondArray = secondNoSpace.split('').sort();
  console.log('first: ', firstArray, 'second: ', secondArray);
  for (var i =0; i < firstArray.length; i++) {
    if (firstArray[i] === secondArray[i]) {
      i++;
  } else {
    return false;
  }
  }
  return true;
  }
