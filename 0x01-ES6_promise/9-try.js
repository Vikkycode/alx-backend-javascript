export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();  // Execute the math function
    queue.push(result);             // Push the result of the function to the queue
  } catch (error) {
    queue.push(error.message);      // Push the error message in case of an exception
  } finally {
    queue.push('Guardrail was processed');  // Always push this message to the queue
  }

  return queue;
}
