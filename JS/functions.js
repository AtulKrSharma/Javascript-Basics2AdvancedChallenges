function myCube(param1) {
  console.log(`execution is in myCube function`);
  return param1 * param1 * param1;
}

function comparer(param1, param2 = 20) {
  if (param1 > param2) console.log('param1 is the boss');
  else if (param1 == param2) console.log('param1 and param2 are kings');
  else console.log('param2 is the boss');
}

// console.log(myCube(3));
comparer(10, 10);
comparer(10, 50);
comparer(30, 10);
comparer(10);
