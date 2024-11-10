const arrAtul = [
  {
    name: 'Vaami',
    age: 1.5,
    location: {
      home: 'Missi',
      temp: 'Brampu',
    },
    cellNumbers: [123, 345],
    talkingSpeed: 15,
  },
  {
    name: 'Dhani',
    age: 10,
    location: {
      home: 'Mississauga',
      temp: 'Brampton',
    },
    cellNumbers: [456, 678],
    talkingSpeed: 1,
  },
];

for (const {
  name,
  age,
  location: { home, temp },
  cellNumbers: [cell1, cell2],
  talkingSpeed: tSpeed,
} of arrAtul) {
  console.log(`name is ${name}`);
  console.log(`age is ${age}`);
  console.log(`Location home is ${home}`);
  console.log(`Location temp is ${temp}`);
  console.log(`cell1 is ${cell1}`);
  console.log(`cell2 is ${cell2}`);
  console.log(`talkingSpeed is ${tSpeed}`);
  console.log(`###############`);
}
