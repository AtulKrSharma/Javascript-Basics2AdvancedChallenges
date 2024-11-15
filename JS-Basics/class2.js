class Fan {
  price = 1200;

  adder(params) {
    return params * 10;
  }

  constructor(params1 = 11, params2 = 22) {
    (this._param1 = params1), (this._param2 = params2);
  }
}

const fan1 = new Fan();
console.log(fan1);
