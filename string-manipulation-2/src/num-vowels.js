/* exported numVowels */
function numVowels(string) {
  var numArray = [];
  var vowel = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  var numString = string.split('');
  var i = 0;

  for (i; i < numString.length; i++) {
    //   console.log('numstring: ', numString[i]);
    //    console.log('vowel: ', vowel[i]);
    if (numString[i] === vowel[i]) {

      numArray.push(numString[i]);
      //   console.log(numArray);
    }

  }
  return numArray.length;
}
