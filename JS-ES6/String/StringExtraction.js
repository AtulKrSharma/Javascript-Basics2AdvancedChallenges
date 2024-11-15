const string1="My name is Dev is Atul IS"
const string2=" To"

console.log(string1.slice(0,4)); //My 

console.log(string1.slice(0,-1)); //My 

console.log(string1.concat(string2));

console.log(string2.repeat(3));

console.log(string1.replace('is', 'TTT'));
console.log(string1.replace(/is/i, 'TTT'));
console.log(string1.replace(/is/gi, 'TTT'));

