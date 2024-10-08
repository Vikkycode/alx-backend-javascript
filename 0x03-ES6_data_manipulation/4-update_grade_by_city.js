export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents.filter((student) => student.location === city).map((student) => {
    const updateGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: updateGrade ? updateGrade.grade : 'N/A',
    };
  });
}
