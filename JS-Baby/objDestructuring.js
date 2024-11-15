const obj = {
  name: 'atul',
  sclass: 5,
  dept: 'IT',
  address: {
    perm: '1713',
    temp: '28',
  },
  cellPhone: [12345, 68790],
  income: 20000,
};

//destructing and rest parameters combination
//let { name, sclass, dept: depart, ...addIncome } = obj;
// console.log(name);
// console.log(sclass);
// console.log(depart);
// console.log(addIncome);

console.log(`~~~~~`);
//full destructuring of object
let {
  name,
  sclass,
  dept: depart,
  address: { perm, temp },
  cellPhone: [cell1, cell2],
  income,
} = obj;

console.log(name); // 'atul'
console.log(sclass); // 5
console.log(depart); // 'IT'
console.log(income); // 20000
console.log(perm); // '1713'
console.log(temp); // '28'
console.log(cell1); // '1713'
console.log(cell2); // '28'
