const car = {
  name: 'mazda',
  model: 2013,
  color: 'red',
  start: function () {
    console.log('car started');
  },

  stop() {
    console.log('car stopped');
  },

  fullName() {
    return this.color + '===' + this.weight;
  },
};

car.start();
car.stop();
car.weight = 100;

console.log(typeof car);
console.log(car);

console.log(car.fullName());
