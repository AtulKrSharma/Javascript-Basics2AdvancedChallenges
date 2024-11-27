const tempArr: string[] = ['apple', 'grapes', 'orange'];

const tempObj: {
  name: string;
  age: number;
  role: string;
} = {
  name: 'Vaamika',
  age: 20,
  role: 'Child',
};

for (const iterator of tempArr) {
  console.log(iterator);
}

for (const itru in tempObj) {
  console.log(`${tempObj[itru as keyof typeof tempObj]}`);
}
// type Objects = {
//   name: string;
//   age: number;
//   role: string;
// };

const arrayOfObjects: {
  name: string;
  age: number;
  role: string;
}[] = [
  {
    name: 'Atul',
    age: 40,
    role: 'IT',
  },
  {
    name: 'Dhani',
    age: 10,
    role: 'HRD',
  },
];

for (const iterator of arrayOfObjects) {
  console.log(iterator);
  if (typeof iterator === 'object') {
    for (const itru in iterator) {
      console.log(`${iterator[itru as keyof typeof iterator]}`);
    }
  }
}
