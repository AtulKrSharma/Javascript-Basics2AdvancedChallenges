export default class ParentClass {
  ParentCountry = 'Canada';

  constructor(defName, defCountry, defAge = 18) {
    (this.name = defName),
      (this.country = defCountry ?? this.ParentCountry), // if defCountry is not passed, take value as Canada
      (this.age = defAge);
  }

  static greetings(name) {
    console.log(`hi ${name}! how are you?`);
  }

  myName() {
    console.log(
      `PARENT:my details are ${this.name}- ${this.age} & from ${this.country}`
    );
  }
}

// const person1 = new ParentClass('Lucky', 'India');
// const person2 = new ParentClass('Atul', undefined, 18);
// console.log(person1);
// person1.myName();
// person2.myName();
