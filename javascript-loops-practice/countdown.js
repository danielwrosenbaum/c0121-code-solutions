/* exported countdown */
function countdown(number) {
  var countdownArray = [];
  while (number >= 0) {
    countdownArray.push(number);
    number--;
  }
  return countdownArray;
}
