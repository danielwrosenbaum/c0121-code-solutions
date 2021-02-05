var bookArray = [
  {
    isbn: '1122331',
    title: 'Jesus Son',
    author: 'Denis Johnson'
  },
  {
    isbn: '1122332',
    title: 'The Sound and the Fury',
    author: 'William Faulkner'
  },
  {
    isbn: '1122333',
    title: 'Look Homeward, Angel',
    author: 'Thomas Wolfe'
  }
];
console.log('Books: ', bookArray, 'type: ', typeof bookArray);

var jString = JSON.stringify(bookArray);
console.log('JSON String: ', jString, 'type: ', typeof jString);

var studentString = '{"Number ID": "1234", "Name": "Daniel"}';

console.log('student string: ', studentString, 'type: ', typeof studentString);

var backToJSON = JSON.parse(studentString);
console.log('new JSON: ', backToJSON, 'type: ', typeof backToJSON);
