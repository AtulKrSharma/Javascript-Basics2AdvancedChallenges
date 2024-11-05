const mydummyObject = {
  firstName: 'Dhani',
  lastName: 'Sharma',
  rollNo: 20,
  address: {
    primary: '1713',
    secondary: '28',
  },
  present: (subject) => `${this.firstName} will present ${subject}`,
  nameAndRoll: function () {
    return this.firstName + ' ' + this.rollNo;
  },
};

// for (const iterator in mydummyObject) {
//   console.log(`${iterator}`);
//   console.log(mydummyObject.iterator);
// }

for (const property in mydummyObject) {
  console.log(`${property}: ${mydummyObject[property]}`);
}
