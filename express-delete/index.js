const express = require('express');
const app = express();
const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  const newArray = [];
  for (const objects in grades) {
    newArray.push(grades[objects]);
  }

  res.json(newArray);
});

app.delete('/api/grades/:id', (req, res) => {
  const index = req.params.id;
  delete grades[index];
  res.sendStatus(204);

});

app.listen(3000, () => {
  // console.log('listening on port 3000!');
});
