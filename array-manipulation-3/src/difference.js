/* exported difference */
// function difference(first, second) {
//   var newArray = first.concat(second);
//   console.log(newArray)
//   var returnArray = []
//   for (var i =0; i < newArray; i++) {
//     var newSet = new Set(newArray[i]);
//     returnArray = Array.from(newSet);
//   }
//   return returnArray;
// }

function difference(first, second) {
 var newArray = first.concat(second);
 var newSet = new Set(newArray);
var returnArray = Array.from(newSet);
return returnArray
}

// function difference(first, second) {
//   var newArray = [];
//   first.forEach((e1) =>second.forEach((e2) => {
//     if (e1 === e2) {
//       newArray.push(e1)
//     }
//   }
//   ))
//   return newArray
// }
