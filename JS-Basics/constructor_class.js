class myClass {
  constructor(city = 'Missi', state = 'Ontario') {
    (this.city = city), (this.state = state);
  }

  callMe(phoneNumber) {
    console.log('I am in callMe for' + phoneNumber);
  }
}

const myObject1 = new myClass();
console.log(myObject1);

const myObject = new myClass('new delhi', 'Delhi');
console.log(myObject.callMe('123'));
