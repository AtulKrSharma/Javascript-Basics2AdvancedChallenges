function nameRandomizer(name) {
  if (name) return name + Math.random();
  else return 'no args sent';
}

let blankName = nameRandomizer('');
console.log(blankName);

let finalName = nameRandomizer('atul');
console.log(finalName);
