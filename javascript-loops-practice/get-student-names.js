/* exported getStudentNames */

function getStudentNames(student) {
  var studentNames = [];
  for (var i = 0; i < student.length; i++) {
    studentNames.push(student[i].name);
  }
  return studentNames;
}
