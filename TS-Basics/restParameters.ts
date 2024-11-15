var myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arrayRoder(...restu: number[]): number {
  let total = 0;

  restu.forEach((num) => (total = total + num));
  return total;
}

console.log(arrayRoder(...myarr));
