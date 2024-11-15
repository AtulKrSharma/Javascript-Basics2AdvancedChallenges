const stringUsed='Canada is THE the best country in the world and THE universe'

console.log(stringUsed.indexOf("a"));
console.log(stringUsed.indexOf("is")); //first occurance
console.log(stringUsed.lastIndexOf("a"));
console.log(stringUsed.search(/the/))

//Matching
let text = "The rain in SPAIN stays mainly in the plain";

console.log("$$$$$$$$$$$$")
console.log(text.match('ain'));
console.log(text.includes("rain"));
console.log(text.includes("atul"));


let text2 = "Hello World, welcome to the universe.";
console.log(text2.startsWith("World", 6));