const obj = {
  name: 'atul',
  sclass: 5,
  dept: 'IT',
  address: {
    perm: '1713',
    temp: '28',
  },
  income: 20000,
};


//destructing and rest parameters combination
let { name, sclass, dept: depart, ...addIncome } = obj;
console.log(name);
console.log(sclass);
console.log(depart);
console.log(addIncome);
