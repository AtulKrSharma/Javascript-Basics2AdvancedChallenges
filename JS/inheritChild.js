import ParentClass from './inheritParent.js';

class ChildClass extends ParentClass {
  constructor(name, age, country) {
    console.log(`I'm in child constructor`);
    // this._name = name;
    // this._age = age;
    super(name, age);
    this._country = country;
  }

  get nameAndAge() {
    console.log('I am getter and in the child class');
    return `${this._firstName} ${this.age}`;
  }

  makeBark() {
    console.log('I am barking dog and in the child class');
  }
}

const dogObj = new ChildClass('Chase', 2, 'Canada');
console.log(dogObj);

console.log(dogObj.makeSound());

console.log(dogObj.nameAndAge());
console.log(ParentClass.mammal());
