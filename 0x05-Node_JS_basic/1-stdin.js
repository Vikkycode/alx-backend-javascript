console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (input) => {
  const name = input.toString().trim(); // Remove newline and whitespace
  console.log(`Your name is: ${name}`);
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
