import ParentClass from './inheritanceParent.js';

class ChildClass extends ParentClass {
  defDept = 'Others';
  constructor(defName, defCountry, defAge, defDept) {
    super(defName, defCountry, defAge);
    this.dept = defDept ?? this.defDept;
  }

  myName() {
    console.log(
      `CHILD: my details are ${this.name}- ${this.age} & from ${this.country} & dept is ${this.dept}`
    );
  }
}

const child1 = new ChildClass('Lucky', undefined, 8);
//const child2 = new ChildClass('Atul', ,undefined, 18);
//console.log(child1);
child1.myName();
//super.myName();
ParentClass.greetings('Vaami');

// console.log('~~');
// console.log(child2);
// console.log('~~');
// person1.myName();
// console.log('~~');
// person2.myName();
