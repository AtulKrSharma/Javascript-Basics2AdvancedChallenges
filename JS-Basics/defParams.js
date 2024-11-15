function callMe(salutation) {
  salutation = typeof salutation !== 'undefined' ? salutation : 'Hello';
  console.log(salutation);
}

callMe();
callMe('atul ji');

function callMeX(salutation) {
  if (typeof salutation === 'undefined') salutation = 'Hello';
  console.log(salutation);
}

callMeX();
callMeX('atul ji');

//default params

function dontCallMe(salute, location = 'Mississauga') {
  console.log(`Hello, ${salute} and welcome to ${location}`);
}

dontCallMe('atul');
dontCallMe('atul', 'Palam');

function dontCallMeX(salute = 'Hello', location) {
  console.log(`Hello, ${salute} and welcome to ${location}`);
}

dontCallMeX('Missis');
dontCallMeX('atul', 'Palam');
