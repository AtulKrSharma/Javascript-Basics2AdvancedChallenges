const strObject = {
  name: "neelu",
  model: 2018,
  address: { residential: "Misisi", commercial: "Texas" },
  contact: [123, 456],
  action: function () {
    console.log(`this is action function`);
  },
  break() {
    console.log(`this is break function`);
  },
  get fullName() {
    return this.name + " " + this.model;
  },

  set fullName({ name, model }) {
    if (
      typeof name !== "undefined" &&
      typeof model !== "undefined" &&
      model >= 1998
    ) {
      this.name = name;
      this.model = model;
    } else {
      console.log("Please try again!!");
      this.fullName;
    }
  },
};

// Usage examples
strObject.action(); // this is action function
strObject.break(); // this is break function
console.log(strObject.fullName); // neelu2018

strObject.fullName = { name: "Shalu", model: 2020 };
console.log(strObject.fullName); // John2020

strObject.fullName = { name: "Lali", model: 1997 };
console.log(strObject.fullName); // John2020
