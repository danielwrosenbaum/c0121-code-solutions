const fs = require('fs');

function getRandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const content = getRandom(100).toString();

fs.writeFile('random.txt', content, err => {
  if (err) {
    throw err;
  }
});
