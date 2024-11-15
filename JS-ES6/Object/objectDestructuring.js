const strObject = {
  name: "neelu",
  model: 2018,
  address: { residential: "Misisi", commercial: "Texas" },
  contact: [123, 456],
  action: function () {
    console.log(`this is action function`);
  },
};

const { name, model, address, contact: connection, action } = strObject;
console.log(name);
console.log(model);
console.log(address);
console.log(connection);
console.log(action); //one can easily do the simple destructuring if there's no THIS
//but if you need this then
