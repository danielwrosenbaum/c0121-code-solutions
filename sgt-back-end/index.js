const pg = require('pg');
const express = require('express');
const app = express();
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
      from "grades"
     order by "gradeId";
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const values = [req.body.name, req.body.course, req.body.score];
  if (req.body.name === undefined) {
    res.status(400).json({ error: 'name is a required field' });
  } else if (req.body.course === undefined) {
    res.status(400).json({ error: 'course is a required field' });
  } else if (req.body.score === undefined) {
    res.status(400).json({ error: 'score is a required field' });
  } else if (!Number.isInteger(parseInt(req.body.score))) {
    res.status(400).json({ error: 'score must be a valid number.' });
  } else {

    const sql = `
     insert into "grades" ("name", "course", "score")
       values ($1, $2, $3)
      returning *
  `;
    db.query(sql, values)
      .then(result => {
        const grade = result.rows[0];
        res.status(201).json(grade);

      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occured'
        });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  const values = [req.body.name, req.body.course, req.body.score, gradeId];
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });

  } else if (req.body.name === undefined) {
    res.status(400).json({ error: 'name is a required field' });

  } else if (req.body.course === undefined) {
    res.status(400).json({ error: 'course is a required field' });

  } else if (req.body.score === undefined) {
    res.status(400).json({ error: 'score is a required field' });

  } else if (!Number.isInteger(parseInt(req.body.score))) {
    res.status(400).json({ error: 'score must be a valid number.' });
  } else {
    const sql = `
  update "grades"
    set "name" = $1,
        "course" = $2,
        "score" = $3
  where "gradeId" = $4
  returning *
  `;
    db.query(sql, values)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({
            error: `Cannot find Grade with ID of ${gradeId}, please try again.`
          });
        } else {
          res.status(200).json(grade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred'
        });
      });
  }

});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  } else {
    const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *
    `;
    const values = [gradeId];
    db.query(sql, values)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({
            error: `Cannot find Grade with ID of ${gradeId}, please try again.`
          });
        } else {
          res.sendStatus(204);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexepcted error occurred'
        });
      });
  }
});

app.listen(3000, () => {
  // console.log('listening on port 3000!');
});
