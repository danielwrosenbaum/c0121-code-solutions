/* exported difference */
function difference(first, second) {
var newArray = [];
var newArray2 = []
var returnArray = [];
for (var i = 0; i < first.length; i++) {
  var j = second.indexOf(first[i]);
  if (j === -1 ) {
    newArray.push(first[i]);
  }
}
for (var x=0; x< second.length; x++) {
  var y = first.indexOf(second[x]);
  if (y === -1) {
    newArray2.push(second[x])
  }
}
returnArray = newArray.concat(newArray2);
return returnArray;
}
