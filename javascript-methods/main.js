var x = 5;
var y = 15;
var z = 10;
var maximumValue = Math.max(x, y, z);
console.log('maximumValue: ', maximumValue);

var heroes = ['batman', 'spiderman', 'wolverine', 'superman'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

var library = [
  {
    title: 'Look Homeward, Angel',
    author: 'Thomas Wolfe'
  },
  {
    title: 'The Sound and the Fury',
    author: 'William Faulkner'
  },
  {
    title: 'The Largesse of the Sea Maiden',
    author: 'Denis Johnson'
  }
];
var lastBook = library.pop();
console.log('lastBook: ', lastBook);
var firstBook = library.shift();
console.log('firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('libraryValue: ', library);

var fullName = 'Daniel' + ' ' + 'Rosenbaum';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
