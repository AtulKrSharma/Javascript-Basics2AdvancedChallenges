let firstName = 'John';
let lastName = 'Doe';
let container;

// console.log(firstName);
// console.log(lastName);

// container = firstName;
// firstName = lastName;
// lastName = container;

// console.log(firstName);
// console.log(lastName);
console.log(`~~~`);
[firstName, lastName] = [lastName, firstName];
console.log(firstName); // Output: 'Doe'
console.log(lastName); // Output: 'John'
