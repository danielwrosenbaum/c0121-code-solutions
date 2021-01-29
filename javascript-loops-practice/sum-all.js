/* exported sumAll */

function sumAll(numbers) {
  var sum = 0;
  for (var value in numbers) {
    sum += numbers[value];
  }
  return sum;
}
