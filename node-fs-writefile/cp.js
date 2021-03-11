const fs = require('fs');

for (var i = 2; i < process.argv.length; i++) {
  fs.readFile(process.argv[2], (err, data) => {
    if (err) {
      throw err;
    } else {
      const info = data.toString();
      fs.writeFile(process.argv[3], info, err => {
        if (err) {
          throw err;
        }
      });
    }
  });
}
