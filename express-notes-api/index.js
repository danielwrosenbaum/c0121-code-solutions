const express = require('express');
const app = express();
const jsonData = require('./data.json');

app.get('/api/notes', (req, res) => {
  const newArray = [];
  if (jsonData.notes === null) {
    return newArray;
  } else {
    for (const objects in jsonData.notes) {
      newArray.push(jsonData.notes[objects]);
    }
    res.json(newArray);
  }
});
app.get('/api/notes/:id', (req, res) => {
  const index = req.params.id;
  if (!Math.sign(index)) {
    res.status(400).json({ error: index + ' ' + 'is not a positive integer' });
  } else {
    if (jsonData.notes[index] !== undefined) {
      res.status(200).send(jsonData.notes[index]);
    } else {
      res.status(404).json({ error: 'cannot find note with id' + ' ' + index });
    }
  }
});

app.listen(3000, () => {
  // console.log('listening on port 3000!');
});
