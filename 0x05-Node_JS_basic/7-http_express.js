const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    let output = 'This is the list of our students\n';
    await countStudents('database.csv'); // Or the path provided as an argument

        // Capture console.log output
        let logs = '';
        const originalConsoleLog = console.log;

        console.log = (...args) => {
        logs += args.join(' ') + '\n';
        };
        res.send(output + logs)
        console.log = originalConsoleLog;



  } catch (error) {
    res.send(`This is the list of our students\n${error.message}`);
  }
});

app.listen(1245);

module.exports = app;
