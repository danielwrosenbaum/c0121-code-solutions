const fs = require('fs');
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

app.use(express.json());
app.post('/api/notes', (req, res) => {
  const newObj = {
    id: jsonData.nextId,
    content: req.body.content
  };
  if (req.body.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (req.body.content !== undefined) {
    jsonData.notes[jsonData.nextId] = newObj;
    jsonData.nextId++;
    fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).send(newObj);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const index = req.params.id;
  if (!Math.sign(index)) {
    res.status(400).json({ error: index + ' ' + 'is not a positive integer' });
  } else {
    if (jsonData.notes[index] !== undefined) {
      delete jsonData.notes[index];
      fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), err => {
        if (err) {
          res.status(500).json({ error: 'An unexpected error occurred.' });
        } else {
          res.sendStatus(204);
        }
      });
    } else {
      res.status(404).json({ error: 'cannot find note with id' + ' ' + index });
    }
  }
});

app.put('/api/notes/:id', (req, res) => {
  const index = req.params.id;
  const newObj = {
    id: index,
    content: req.body.content
  };
  if (!Math.sign(index) || req.body.content === undefined) {
    res.status(400).json({ error: ':-(' });
  } else {
    if (jsonData.notes[index] !== undefined) {
      jsonData.notes[index] = newObj;
      fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), err => {
        if (err) {
          res.status(500).json({ error: 'An unexpected error occurred.' });
        } else {
          res.status(200).send(newObj);
        }
      });
    } else {
      res.status(404).json({ error: 'cannot find note with id' + ' ' + index });
    }
  }
});
app.listen(3000, () => {
  // console.log('listening on port 3000!');
});
