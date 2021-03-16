const express = require('express');
let nextId = 1;
const grades = {};
const app = express();

app.get('/api/grades', (req, res) => {
  const newArray = [];
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
  grades[nextId] = newObj;
  nextId++;
  res.status(201).send(newObj);
});

app.listen(3000, () => {
  // console.log('listening on port 3000!');
});
