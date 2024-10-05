0x01-ES6_promise
This project introduces the concept of Promises in JavaScript, a powerful tool for handling asynchronous operations.

Description
The project consists of several JavaScript files, each demonstrating different aspects of Promises:

0-promise.js: Introduces the basic structure of a Promise, showing how to create a Promise that resolves with a success message or rejects with an error.
1-promise.js: Builds upon the previous example by resolving with a more complex object containing status and body information.
2-then.js: Demonstrates how to use the .then() method to handle successful Promise resolutions and the .catch() method for error handling. It also introduces the .finally() method for actions to be performed regardless of success or failure.
3-all.js: Shows how to use Promise.all() to execute multiple Promises concurrently and handle their results collectively.
4-user-promise.js: Creates a simple Promise that resolves with user data.
5-photo-reject.js: Creates a Promise that always rejects, simulating a failed operation.
6-final-user.js: Combines previous examples to demonstrate handling both successful and failed Promises using Promise.allSettled().
7-load_balancer.js: Simulates a load balancer using Promise.race(), selecting the fastest response from multiple sources.
8-try.js: Shows basic error handling with try...catch blocks, unrelated to Promises.
9-try.js: Demonstrates how to use try...catch blocks for error handling within a Promise.
100-await.js: Introduces the async/await syntax for writing asynchronous code in a more synchronous and readable manner.
Usage
Each file contains a JavaScript function that demonstrates a specific Promise concept. You can run these files individually to see the output.

Learning Objectives
By the end of this project, you should be able to:

Understand the concept of Promises in JavaScript.
Create and handle Promises using different methods like .then(), .catch(), and .finally().
Use Promise.all() and Promise.race() for concurrent Promise execution.
Implement error handling with Promises using try...catch blocks.
Write asynchronous code using the async/await syntax.
