function ExampleConstructor() {

}
console.log('value of prototype:', ExampleConstructor.prototype);
console.log('typeof prototype property:', typeof ExampleConstructor.prototype);

var exampleVar = new ExampleConstructor();
console.log('examplevar:', exampleVar);

var instanceResult = exampleVar instanceof ExampleConstructor;
console.log('instanceResult:', instanceResult);
