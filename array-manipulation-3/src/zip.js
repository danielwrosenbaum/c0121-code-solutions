/* exported zip */
function zip(first, second) {
  var x = 0;
  if (first.length <= second.length) {
    var newArray = new Array(first.length)
    for (var i =0; i < first.length; i++) {
     newArray[x].push(first[i], second[i])
    //  x++;
    //  for (var j =0; j < second.length; j++) {
    //    newArray.push(second[j])
      //  x++;
    //  }

    }
console.log(newArray)
  }
}
