const express = require('express');
let nextId = 1;
const grades = {};
const app = express();
const newArray = [];

app.get('/api/grades', (req, res) => {

  for (const objects in grades) {
    newArray.push(grades[objects]);

  }
  res.json(newArray);
});

app.use(express.json());
app.post('/api/grades', (req, res) => {
  const newObj = {
    id: nextId,
    name: req.body.name,
    course: req.body.course,
    score: req.body.score
  };
  newArray.push(newObj);
  nextId++;
  res.sendStatus(201);
});

app.listen(3000, () => {
  // console.log('listening on port 3000!');
});
