let DhaniClass = class {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(Newname) {
    if (Newname == '') {
      console.log(`name can't be empty`);
    } else {
      this._name = Newname.trim();
    }
  }
};

const dhani = new DhaniClass('Vaamika');
console.log(dhani.name); // it calls the getter

dhani.name = 'New Vaamika'; // it calls the setter
console.log(dhani.name);
