const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const firstNum = Number(process.argv[2]);
const secondNum = Number(process.argv[4]);
if (process.argv[3] === 'plus') {
  console.log(add(firstNum, secondNum));
} else if (process.argv[3] === 'minus') {
  console.log(subtract(firstNum, secondNum));
} else if (process.argv[3] === 'times') {
  console.log(multiply(firstNum, secondNum));
} else if (process.argv[3] === 'over') {
  console.log(divide(firstNum, secondNum));
} else {
  console.log('Error');
}
