/* exported union */
function union(first, second) {
  var newArray = first.concat(second);
  var newSet = new Set(newArray);
  var returnArray = Array.from(newSet);
  return returnArray
}
