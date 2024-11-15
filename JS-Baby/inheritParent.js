class ParentClass {
  constructor(name, age) {
    console.log(`I'm in parent constructor `);
    this._name = name;
    this._age = age;
  }

  get nameAndAge() {
    console.log('I am getter and in the Parent class');
    return `${this._firstName} ${this.age}`;
  }

 static mammal() {
    console.log('I am Mammal and in Parent Class');
  }

  makeSound() {
    console.log('I can make sound and in Parent Class');
  }
}

export default ParentClass;
