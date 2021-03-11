const fs = require('fs');

// const index = 2;
// const start = process.argv[index];
// fs.readFile(start, (err, data) => {
//   if (err) throw err;
//   const arrayFile = anyFile.trim.split(' ');
//   for (var i = 0; i < arrayFile.length; i++) {
//     console.log(data.toString());
//   }
// });
// for (let i = process.argv.length - 1; i > 1; i--) {
//   fs.readFile(process.argv[i], (err, data) => {
//     if (err) throw err;
//     console.log(process.argv[i]);
//     console.log(data.toString());
//   });
// }
// function printInfo(info) {
//   console.log(info);
// }

// for (let i = 2; i < process.argv.length; i++) {
//   fs.readFile(process.argv[i], (err, data) => {
//     if (err) {
//       throw err;
//     }
//     console.log(process.argv[i]);
//     // console.log(data.toString());
//     const dataFile = data.toString();
//     logInfo(dataFile);
//     process.exitCode = 0;
//   });
// }
// function logInfo(data) {
//   console.log(data.toString());
// }
for (let i = 2; i < process.argv.length; i++) {
  fs.readFile(process.argv[i], (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(data.toString());
    }
  });

}
