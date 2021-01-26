var student = {
  firstName: 'Daniel',
  lastName: 'Rosenbaum',
  age: 34
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('The students full name is: ', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'AV Technician';
console.log('Does the student live in Irvine? ', student.livesInIrvine);
console.log('previous job: ', student.previousOccupation);
console.log('Value of student: ', student);
var vehicle = {
  make: 'Hyundai',
  model: 'Sonata',
  year: 2006
};
vehicle['color'] = 'Navy';
vehicle['isConvertible'] = false;
console.log('The color is: ', vehicle.color);
console.log('Is it a convertible? ', vehicle.isConvertible);
console.log('Vehicle info: ', vehicle);

var pet = {
  name: 'Cashew',
  type: 'Dog'
};
delete pet.name;
delete pet.type;
console.log('value of pet: ', pet);
