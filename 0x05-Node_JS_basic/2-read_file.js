const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines
    const students = lines.slice(1); // Remove header row

    console.log(`Number of students: ${students.length}`);

    const fields = {};
    students.forEach((student) => {
      const studentData = student.split(',');
      const field = studentData[3];
      if (field) { // Handle potential empty fields
        fields[field] = (fields[field] || []).concat(studentData[0]); // Add student to field
      }
    });

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
