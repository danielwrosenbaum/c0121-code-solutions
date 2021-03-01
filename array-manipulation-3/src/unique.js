/* exported unique */

function unique(array) {
  var newSet = new Set(array)
  var newArray = Array.from(newSet)
  return newArray;
  }
