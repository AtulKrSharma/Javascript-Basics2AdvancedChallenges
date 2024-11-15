function getNamesasArray() {
  // get names from the database or API
  let firstName = 'John';
  let lastName = 'Doe';
  let age = 18;
  let visaStatus = 'PR';

  // return as an array
  return [firstName, lastName, age, visaStatus];
}

function getNamesasObject() {
  let firstName = 'John';
  let lastName = 'Doe';
  let age = 18;
  let visaStatus = 'PR';

  //return as object
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    visaStatus: visaStatus,
  };
}

//logging the values
console.log(getNamesasArray());
console.log(getNamesasObject());
//destructuring
const [fName, lName, ...restValues] = getNamesasArray(); // no name changing allowed as there's index
console.log(`array:${fName}-${lName}--${restValues}`);

const { firstName, lastName: lastNAME, ...restObjvalues } = getNamesasObject();
console.log(
  `object:${firstName}-${lastNAME}--> ${restObjvalues.age}--> ${restObjvalues.visaStatus}`
);
