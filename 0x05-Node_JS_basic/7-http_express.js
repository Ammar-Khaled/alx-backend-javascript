const express = require('express');
const countStudents = require('./5-http');

const app = express();

const port = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  countStudents(process.argv[2])
    .then((payload) => {
      res.send(`This is the list of our students\n${payload.join('\n')}`);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

module.exports = app;
