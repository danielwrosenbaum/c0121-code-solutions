const express = require('express');
const path = require('path');
const app = express();

const publicDir = path.join(__dirname, 'public');
console.log(publicDir);

const newVar = express.static(publicDir);

app.use(newVar);
app.listen(3000, () => {
  console.log('listening on port 3000!');

});
