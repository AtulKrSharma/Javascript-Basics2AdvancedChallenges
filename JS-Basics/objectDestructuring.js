let person = {
  name: 'atul',
  location: 'Palam',
  country: 'India',
};

let { name, location: l, country = 'Canada' } = person;
console.log(name);
console.log(l);
console.log(country);

function objEater() {

  return ['atul', 'sharma']
}


let dsObjEater = objEater()
console.log(dsObjEater);
console.log("####");

let [fname, lname] = objEater()
console.log(fname);
console.log(lname);

