function sum(param1: number, param2?: number): number {
  //optional and default params
  console.log(typeof param2);
  return param1 + (param2 ?? 0);
}

console.log(sum(20, 20));
console.log(sum(20));

let dummer: number | boolean = 10; //union type
dummer = true;
console.log(dummer);
