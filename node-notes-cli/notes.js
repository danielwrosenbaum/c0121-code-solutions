const fs = require('fs');
const jsonData = require('./data.json');
const command = process.argv[2];
const index = process.argv[3];
const updateString = process.argv[4];

if (command === 'read') {
  for (const property in jsonData.notes) {
    console.log(`${property}: ${jsonData.notes[property]}`);
  }
}

if (command === 'create') {
  const newNote = process.argv[3];
  const currentId = jsonData.nextId;
  jsonData.notes[currentId] = newNote;
  jsonData.nextId++;
  fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), err => {
    if (err) throw err;
  });
}

if (command === 'delete') {
  delete jsonData.notes[index];
  fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), err => {
    if (err) throw err;
  });
}
if (command === 'update') {
  jsonData.notes[index] = updateString;
  fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), err => {
    if (err) throw err;
  });
}
