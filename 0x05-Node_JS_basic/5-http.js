const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      await countStudents('database.csv'); // Or any other valid path from arguments
      res.end();
    } catch (error) {
      res.end(error.message); // Display error if database can't be loaded
    }
  } else {
    res.end();
  }
});

app.listen(1245);

module.exports = app;
