class HomePage {
  add(params) {
    return params * 2;
  }

  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
}

let homepage = new HomePage('atul', 'canada');
console.log(homepage);

console.log(homepage.add(2));
