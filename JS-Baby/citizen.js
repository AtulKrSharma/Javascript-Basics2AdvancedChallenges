//JavaScript Functions are First-Class Citizens

//Storing functions in variables
const funcVal = function myCube(param1) {
  console.log(`execution is in myCube function`);
  console.log(param1 * param1 * param1);
};

//console.log(funcVal(4));

//Passing a function to another function
function comparer(param1, param2 = 20) {
  if (param1 > param2) {
    console.log('param1 is the boss');
    funcVal(param1);
  } else if (param1 == param2) {
    console.log('param1 and param2 are kings');
    funcVal(param1);
  } else {
    console.log('param2 is the boss');
    funcVal(param2);
  }
}

//comparer(10, 10);
 comparer(10, 50);
// comparer(30, 10);
// comparer(10);
