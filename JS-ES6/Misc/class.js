class Nation {
  constructor(num1, num2) {
    (this._num1 = num1), (this._num2 = num2);
  }

  action() {
    console.log("action");
  }
}

const newNation = new Nation(10, 10);
console.log(newNation);
