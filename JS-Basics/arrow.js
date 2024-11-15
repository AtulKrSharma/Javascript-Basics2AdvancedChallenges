let adder = function add(num1, num2) {
    if (typeof num1 == 'number' && typeof num2 == 'number') { return num1 + num2 }
    else { return 'try again with Number' }
}


let arrowAdder = (number1, number2) => {
    if (typeof number1 == 'number' && typeof number2 == 'number') { return number1 + number2 }
    else { return 'try again with Number' }
}

console.log(arrowAdder(10, 30))
console.log(arrowAdder('atul', 30))

