let x = function myObjectArray() {
    console.log('I am in myArray function');
    return { fullName: 'Atul Kumar Sharma', subject: 'EMFT', college: 'ASET' }
}

let { fullName, subject, college } = myObjectArray()
console.log(fullName);
console.log(subject);
console.log(college);
console.log("####");

let { fullName: fName, subject: sbjt, college: clg } = myObjectArray()
console.log(fName);
console.log(sbjt);
console.log(clg);

