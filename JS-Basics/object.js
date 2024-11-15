let myObj = {
  name: 'atul',
  dept: 'tech',
  age: 30,
  city: 'Mississauga',
};

for (let key in myObj) {
  if (key == 'age') {
    console.log('this char is ' + key + '\n');
    console.log('this char is ' + myObj[key] + '\n');

    break;
  }
}
