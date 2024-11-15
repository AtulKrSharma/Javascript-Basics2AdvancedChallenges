//anonymous function
let waitFor = function (seconds) {
  console.log('I"m in the function for ' + seconds);
};

waitFor(20);

let XwaitFor = (seconds) =>
  console.log('I"m in the Xwait function for ' + seconds);

XwaitFor(20);
