let myObj = {
  name: 'atul',
  dept: 'tech',
  age: 30,
  city: 'Mississauga',
};

for (const key in myObj) {
  console.log(`${key}::${myObj[key]}`);
}
