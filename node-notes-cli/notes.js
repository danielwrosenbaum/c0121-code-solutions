const fs = require('fs');
const jsonData = require('./data.json');
const info = JSON.stringify(jsonData.notes, null, 2);
const command = process.argv[2];
const index = process.argv[3];
const updateString = process.argv[4];

if (command === 'read') {
  let newInfo = info.substring(1, info.length - 1);
  newInfo = newInfo.substr(1, newInfo.length - 1);
  newInfo = newInfo.replace(/"/g, '');
  newInfo = newInfo.replace(/,/g, '');
  console.log(newInfo);
}

if (command === 'create') {
  fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    const newNote = process.argv[3];
    const currentId = jsonData.nextId;
    jsonData.notes[currentId] = newNote;
    jsonData.nextId++;
    fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), err => {
      if (err) throw err;
    });
  });
}

if (command === 'delete') {
  fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    for (const keys in jsonData.notes) {
      for (let i = 0; i < keys.length; i++) {
        if (keys[i] === index) {
          delete jsonData.notes[keys[i]];
        }
      }
    }
    fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), err => {
      if (err) throw err;
    });
  });
}
if (command === 'update') {
  fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    for (const keys in jsonData.notes) {
      for (let i = 0; i < keys.length; i++) {
        if (keys[i] === index) {
          jsonData.notes[keys[i]] = updateString;
        }
      }
    }
    fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), err => {
      if (err) throw err;
    });
  });
}
