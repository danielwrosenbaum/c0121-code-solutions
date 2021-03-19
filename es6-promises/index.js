const takeAChance = require('./take-a-chance');

const dan = takeAChance('Daniel');
dan.then(resolve => {
  console.log(resolve);
});
dan.catch(reject => {
  console.log(reject);
});
