const fs = require('fs');

for (var i = 2; i < process.argv.length; i++) {
  fs.writeFile('note.txt', process.argv[i], err => {
    if (err) {
      throw err;
    }
  });
}
