/* exported compact */
function compact(values) {
  var compactValues = [];
  var badValues = [];
  for (var i = 0; i < values.length; i++) {
    if (!values[i]) {
      badValues.push(values[i]);
    } else {
      compactValues.push(values[i]);
    }
  }
  return compactValues;
}
