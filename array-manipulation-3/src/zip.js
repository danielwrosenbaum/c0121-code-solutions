/* exported zip */
function zip(first, second) {
  var newArray =[];
  if (first.length <= second.length) {
    newArray.length = first.length;
    for (var i = 0; i < first.length; i++) {
      newArray[i] = [];
      newArray[i].push(first[i], second[i])
    }
  } else {
    newArray.length = second.length
    for (var j = 0; j < second.length; j++) {
      newArray[j] = [];
      newArray[j].push(first[j], second[j]);
    }
  }
  return newArray;
}
