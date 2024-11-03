const mydummyObject = {
  firstName: 'Jack',
  lastName: 'Sparrow',
  rollNo: 32,
  address: {
    primary: '1713',
    secondary: '28',
  },
  present: (subject) => `Jack will present ${subject}`,
  nameAndRoll: function () {
    return this.firstName + ' ' + this.rollNo;
  },
};

// for (const iterator in mydummyObject) {
//   console.log(`${iterator}`);
//   console.log(mydummyObject.iterator);
// }

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
