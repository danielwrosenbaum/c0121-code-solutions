/* exported compact */
function compact(values) {
  var compactValues = [];
  for (var i = 0; i < values.length; i++) {
    if (!values[i]) {
      continue;
    } else {
      compactValues.push(values[i]);
    }
  }
  return compactValues;
}
