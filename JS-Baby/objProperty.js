const mydummyObject = {
  firstName: 'Jack',
  lastName: 'Sparrow',
};

const newObject = mydummyObject;

console.log(newObject);
console.log('^^^^^^');

newObject.class = '1st year';

console.log(newObject);
console.log('#####');
console.log(newObject);

for (let ele in newObject) {
  console.log(`${ele}: ${newObject[ele]}`);
}
