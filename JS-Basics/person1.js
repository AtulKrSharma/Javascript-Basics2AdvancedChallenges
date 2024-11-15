let nameRandomizer = function (name) {
  if (name) return name + Math.random();
  else return 'no args sent';
};

let randomValue = function multi(val1, val2) {
  return val1 * val2;
};

export { nameRandomizer, randomValue };
