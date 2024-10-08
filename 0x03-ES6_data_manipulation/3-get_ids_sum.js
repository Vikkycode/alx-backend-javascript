export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((acc, student) => acc + student.id, 0);
}
