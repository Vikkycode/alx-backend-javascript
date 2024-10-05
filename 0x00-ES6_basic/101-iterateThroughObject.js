<<<<<<< HEAD
// export default function iterateThroughObject(reportWithIterator) {
//   const employeeNames = [];

//   for (const employee of reportWithIterator) {
//     employeeNames.push(employee);
//   }

//   return employeeNames.join(' | ');
// }
export default function iterateThroughObject(reportWithIterator) {
  // If `reportWithIterator` is indeed an iterator, just collect the names and join
=======
export default function iterateThroughObject(reportWithIterator) {
>>>>>>> 7a51a6d00577eafc5c35ed2adc2c6c9c3d988056
  return [...reportWithIterator].join(' | ');
}
