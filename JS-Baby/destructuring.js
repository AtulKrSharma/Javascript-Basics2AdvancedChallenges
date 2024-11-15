const mydummyObject = {
  firstName: 'Jack',
  lastName: 'Sparrow',
  rollNo: 32,
  class: 4,
  yearOfBirth: 1984,
  address: {
    primary: '1713',
    secondary: '28',
  },
};

let {
  firstName: fname,
  lastName,
  yearOfBirth,
  address,
  ...restProp
} = mydummyObject;

console.log(fname);
console.log(lastName);
console.log(address);
console.log(restProp);

// const fruits = ['Bananas', 'Oranges', 'Apples', 'Mangos'];
// let [fruit1, fruit2] = fruits;

// console.log(fruit1);
// console.log(fruit2);
