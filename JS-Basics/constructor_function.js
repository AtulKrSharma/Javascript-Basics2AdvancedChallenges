function Barbidos(cityName, province) {
  (this.cityName = cityName), (this.province = province);
}

let t20 = new Barbidos('london', 'ontario');
console.log(t20);
