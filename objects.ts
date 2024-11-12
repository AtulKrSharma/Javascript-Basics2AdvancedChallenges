const myObj = {
  firstName: 'Jack',
  lastName: 'Sparrow',
  rollNo: 32,
  yearOfBirth: 1984,
  address: {
    primary: '1713',
    secondary: '28',
  },
};

function objReader(objecto: any): string {
  let objConcater: string = '';

  for (const key in objecto) {
    const value = objecto[key];

    if (typeof value === 'object' && value !== null) {
      console.log('hey, found an object');
      objConcater += `-${objReader(value)}`;
    } else {
      objConcater += `-${value}`;
    }
  }

  // Remove the leading dash
  return objConcater.startsWith('-') ? objConcater.substring(1) : objConcater;
}

console.log(objReader(myObj));
