var colors = ['red', 'white', 'blue'];
console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);
var newString = 'America is' + ' ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2];
console.log(newString);
colors[2] = 'green';
var newString2 = 'Mexico is' + ' ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2];
console.log(newString2);
console.log('value of colors: ', colors);
var students = ['john', 'paul', 'george', 'ringo'];
var numberOfStudents = students.length;
var studentString = 'There are ' + numberOfStudents + ' ' + 'students in the class';
console.log(studentString);
var lastIndex = students[3];
console.log(lastIndex);
var lastStudent = lastIndex;
console.log('The last student in the array is', lastStudent);
console.log('value of students:', students);
