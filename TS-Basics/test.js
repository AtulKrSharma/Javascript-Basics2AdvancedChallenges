var tempArr = ['apple', 'grapes', 'orange'];
var tempObj = {
    name: 'Vaamika',
    age: 20,
    role: 'Child',
};
for (var _i = 0, tempArr_1 = tempArr; _i < tempArr_1.length; _i++) {
    var iterator = tempArr_1[_i];
    console.log(iterator);
}
for (var itru in tempObj) {
    console.log("".concat(tempObj[itru]));
}
// type Objects = {
//   name: string;
//   age: number;
//   role: string;
// };
var arrayOfObjects = [
    {
        name: 'Atul',
        age: 40,
        role: 'IT',
    },
    {
        name: 'Dhani',
        age: 10,
        role: 'HRD',
    },
];
for (var _a = 0, arrayOfObjects_1 = arrayOfObjects; _a < arrayOfObjects_1.length; _a++) {
    var iterator = arrayOfObjects_1[_a];
    console.log(iterator);
    if (typeof iterator === 'object') {
        for (var itru in iterator) {
            console.log("".concat(iterator[itru]));
        }
    }
}
