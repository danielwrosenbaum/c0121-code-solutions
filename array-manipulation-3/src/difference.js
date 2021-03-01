/* exported difference */
function difference(first, second) {
var newArray = [];
var returnArray = [];
for (var i = 0; i < first.length; i++) {
  var j = second.indexOf(first[i]);
  if (j === -1) {
    newArray.push(first[i]);
  } else {
    second.splice(j, 1);
  }
}
returnArray = newArray.concat(second);
return returnArray;
}
