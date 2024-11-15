let student = {
  name: 'atul',
  college: 'aset',
  friends: {
    mech4: 'deswal',
    mech3: 'dada',
    mech2: 'babbal',
  },
};

for (let key in student) {
  if (typeof student[key] === 'object') {
    console.log(`${key}:`);
    for (let friend in student[key]) {
      console.log(`${friend}::${student[key][friend]}`);
    }
  } else console.log(`${key}::${student[key]}`);
}
