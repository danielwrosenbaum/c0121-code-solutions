/* exported oddOrEven */

function oddOrEven(numbers) {
  var stringArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      stringArray.push('even');
    } else if (numbers[i] % 2 !== 0) {
      stringArray.push('odd');
    }
  }
  return stringArray;
}
