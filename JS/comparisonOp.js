let isBigger = true;
let isSmaller = true;
const apple = 20;
const pear = 30;

let idk = null;

// Update `isBigger` based on the comparison
isBigger = apple > pear;

console.log(isBigger);

// Check divisibility and `isBigger`
if ((apple + pear) % 50 === 0 && isSmaller) {
  console.log('perfect divisible');
} else {
  console.log('nopes');
}

// Check `isSmaller` value
if (isSmaller) {
  console.log("it's true by def");
} else {
  console.log("it's false");
}

let finalVal = idk ?? 10;

console.log(finalVal);
