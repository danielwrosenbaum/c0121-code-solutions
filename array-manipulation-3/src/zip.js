/* exported zip */
function zip(first, second) {
  var newArray =[];
  var length = Math.min(first.length, second.length);
    for (var i = 0; i < length; i++) {
      newArray[i] = [];
      newArray[i].push(first[i], second[i]);
  }
  return newArray;
}
