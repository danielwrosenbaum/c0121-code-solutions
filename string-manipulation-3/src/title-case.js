/* exported titleCase */
function titleCase(title) {
  var stringArray = title.split(" ");
  console.log(stringArray)
  for (var i = 0; i < stringArray.length; i++) {
    // stringArray[0][0] = stringArray[0][0].toUpperCase();
    if (stringArray[i] === 'javascript') {
      stringArray[i] = 'JavaScript';
    }
    else if (stringArray[i] === 'api') {
      stringArray[i] = 'API';
    }
    else if (stringArray[i] !== 'in' && stringArray[i] !=='JavaScript' && stringArray[i] !== 'for' && stringArray[i] !== 'and' && stringArray[i] !== 'of' && stringArray[i] !== 'the') {
    stringArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].substr(1);
    }
  }

  return stringArray.join(' ');
}
