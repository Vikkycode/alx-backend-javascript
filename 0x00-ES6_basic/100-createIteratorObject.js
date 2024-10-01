export default function createIteratorObject(report) {
  const employees = []; // Array to store all employees

  // Loop through each department in the allEmployees object
  for (const department in report.allEmployees) {
    if (Object.hasOwn(report.allEmployees, department)) {
      // Concatenate the employees from each department into the employees array
      employees.push(...report.allEmployees[department]);
    }
  }

  // Return a generator function to create an iterator
  function* employeeIterator() {
    for (const employee of employees) {
      yield employee; // Yield each employee one at a time
    }
  }

  return employeeIterator(); // Return the iterator
}
