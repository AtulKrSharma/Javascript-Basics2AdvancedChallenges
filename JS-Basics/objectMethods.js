objLoc = {
  cityName: 'Mississauga',
  province: 'ON',
  country: 'Canada',
  greetings: (city = 'Delhi', prov = 'Delhi') =>
    console.log(`Hello, ${city}!! welcome to ${prov}`),
  print() {
    console.log("I'm in the printer function=>" + this.country);
  },
};

objLoc.greetings();
objLoc.greetings(objLoc.cityName, objLoc.province);
objLoc.print();
