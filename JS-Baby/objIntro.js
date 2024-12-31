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
  present: (subject) => `Jack will present ${subject}`,
  nameAndRoll: function () {
    return this.firstName + ' ' + this.rollNo;
  },
  fullName: function fullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

console.log(mydummyObject);
console.log(typeof mydummyObject);

console.log(mydummyObject.firstName);
console.log(mydummyObject['yearOfBirth']);
console.log(mydummyObject.address.primary);
console.log(mydummyObject['address']['secondary']);
console.log(mydummyObject.present('Maths'));
console.log(mydummyObject.nameAndRoll());
console.log(mydummyObject.fullName);
console.log(mydummyObject.fullName());
