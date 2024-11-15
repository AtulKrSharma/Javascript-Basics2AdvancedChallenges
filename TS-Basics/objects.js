var myObj = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    rollNo: 32,
    yearOfBirth: 1984,
    address: {
        primary: '1713',
        secondary: '28',
    },
};
function objReader(objecto) {
    var objConcater = '';
    for (var iterator in myObj) {
        if (typeof myObj[iterator] === 'object') {
            console.log('hey, found an object');
            objConcater = objConcater + objReader(myObj[iterator]);
        }
        else {
            objConcater = objConcater + "-" + myObj[iterator];
        }
    }
    return objConcater.substring(1);
}
console.log(objReader(myObj));
