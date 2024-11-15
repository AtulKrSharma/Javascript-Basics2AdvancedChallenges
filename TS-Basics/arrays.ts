const carArray: string[] = ['Subaru', 'Mazda', 'Tesla', 'Camry'];

function arrayReadConcat(arr: string[]): string {
  let concat: string = '';

  for (const iterator of arr) {
    concat = concat+ `-` + iterator;
  }
  return concat;
}

console.log(arrayReadConcat(carArray));
