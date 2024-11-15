function square(param1: number, param2: number): number {
  return param1 * param2;
}

const cuber = (param3: number): number => param3 * param3 * param3;

function optional(
  name: string,
  passport: number | string,
  home: string = 'India'
): string {
  if (typeof home === 'undefined') return `${name}-${passport}`;
  else return `${name}-${passport}-${home}`;
}

console.log(optional('Atul', 'ATUL420'));
console.log(optional('Dhani', 123, 'Canada'));

// console.log(square(10, 20));
// console.log(cuber(4));
