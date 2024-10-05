// export default function iterateThroughObject(reportWithIterator) {
//   const employeeNames = [];

//   for (const employee of reportWithIterator) {
//     employeeNames.push(employee);
//   }

//   return employeeNames.join(' | ');
// }
export default function iterateThroughObject(reportWithIterator) {
  // If `reportWithIterator` is indeed an iterator, just collect the names and join
  return [...reportWithIterator].join(' | ');
}
