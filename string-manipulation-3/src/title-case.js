/* exported titleCase */
function titleCase(title) {
  var stringArray = title.toLowerCase();
  stringArray = stringArray.split(' ');
  for (var i = 0; i < stringArray.length; i++) {
    for (var j = 0; j < stringArray[i].length; j++) {
      if (stringArray[i][j] === '-') {
        stringArray[i] = stringArray[i].split('-');
        stringArray[i][1] = stringArray[i][1].charAt(0).toUpperCase() + stringArray[i][1].slice(1);
        stringArray[i] = stringArray[i].join('-');
      }
      var x = stringArray[i].length - 1;
      if (stringArray[i] === 'javascript') {
        stringArray[i] = 'JavaScript';
      } else if (stringArray[i] === 'javascript:') {
        stringArray[i] = 'JavaScript:';
      } else if (stringArray[i] === 'api') {
        stringArray[i] = 'API';
      } else {
        if (stringArray[i].charAt(x) !== ':' && stringArray[i] !== 'in' && stringArray[i] !== 'for' && stringArray[i] !==
    'and' && stringArray[i] !== 'of' && stringArray[i] !== 'the') {
          stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
        }
      }
      if (stringArray[i].charAt(x) === ':') {
        stringArray[i + 1] = stringArray[i + 1].charAt(0).toUpperCase() + stringArray[i + 1].slice(1);
      }
    }
  }
  var joinArray = stringArray.join(' ');
  return joinArray;
}
