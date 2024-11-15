const obj = {
  ID: 123,
  name: 'luta',
  Dept: 'ID',
  value: function () {
    console.log(`Hi, I'm ${this.name}`);
  },
  square: (num) => num * num,
};

obj.value();
console.log(obj.square(9));
