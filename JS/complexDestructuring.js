const vaamiArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [var1, var2, ...var3] = vaamiArr;

// console.log(var1);
// console.log(var2);
// console.log(var3);

const vaamiObj = {
  name: 'Vaami',
  age: 1.5,
  location: {
    home: 'Mississauga',
    temp: 'Brampton',
  },
  cellNumbers: [123, 345, 456, 678],
  talkingSpeed: 15,
};

const {
  name,
  age,
  location: { home, temp },
  cellNumbers: [cell1, ...restCell],
  talkingSpeed: tSpeed,
} = vaamiObj;

// const { name, location, talkingSpeed: tS } = vaamiObj;

console.log(name);
console.log(tSpeed);
console.log(home);
console.log(temp);
console.log(cell1);
console.log(restCell);
