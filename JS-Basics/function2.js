myObj = {
  name: 'John',
  age: 30,
  myCars: {
    car1: 'Ford',
    car2: 'BMW',
    car3: 'Fiat',
  },
};

console.log(JSON.stringify(myObj));

//for in
for (let key in myObj) {
  if (typeof myObj[key] !== 'object')
    console.log(`${key} & value is ${myObj[key]}`);
  else {
    for (let key1 in myObj[key]) {
      console.log(`${key1} & value ${myObj[key][key1]}`);
    }
  }
}
