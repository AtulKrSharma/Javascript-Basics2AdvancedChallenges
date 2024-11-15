const myObj = {
  name: 'Atul',
  age: 30,
  phones: ['123', '456', '678'],
  cars: [
    { name: 'Ford', models: ['Fiesta', 'Focus', 'Mustang'] },
    { name: 'BMW', models: ['320', 'X3', 'X5'] },
  ],
  friends: {
    mech2: 'babbal',
    mech1: 'kuberi',
  },
};

// Iterate over myObj using for...in loop
for (let key in myObj) {
  // Check if the property is an array
  if (Array.isArray(myObj[key])) {
    console.log(`${key}:`);
    // Iterate over the array elements
    for (let element of myObj[key]) {
      console.log(`- ${element}`);
    }
  }
  // Check if the property is an object
  else if (typeof myObj[key] === 'object' && myObj[key] !== null) {
    console.log(`${key}:`);
    // Iterate over the object properties
    for (let nestedKey in myObj[key]) {
      console.log(`- ${nestedKey}: ${myObj[key][nestedKey]}`);
    }
  }
  // For non-array and non-object properties
  else {
    console.log(`${key}: ${myObj[key]}`);
  }
}
