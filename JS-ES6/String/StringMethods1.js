let strValue1="We are the north are ARE";

// console.log(typeof strValue1);
// console.log(`value of strValue is ${strValue1.toLowerCase()}`);
// console.log(`value of strValue is ${strValue1.toUpperCase()}`);

// console.log(`value of strValue is ${strValue1.charAt(0)}`);
// console.log(`value of strValue is ${strValue1.charAt(-1)}`);

console.log(`value is ${strValue1.concat('    ATul')}`);
console.log(`value is ${strValue1.slice(0,8)}`);
console.log(`value is ${strValue1.substring(0,8)}`);

console.log(`value is ${strValue1.repeat(3)}`)

console.log(`value is ${strValue1.replace(/are/gi, "will")}`)
console.log(`value is ${strValue1.replaceAll(/are/gi, "will")}`)


const newString="Thank you"
console.log(newString.split(" "));

