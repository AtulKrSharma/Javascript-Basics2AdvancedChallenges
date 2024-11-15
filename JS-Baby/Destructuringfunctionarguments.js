const vaamiObj = {
  name: 'Vaami',
  age: 1.5,
  location: {
    home: 'Mississauga',
    temp: 'Brampton',
  },
  cellNumbers: [123, 678],
  talkingSpeed: 15,
};

const personDetails = ({
  name,
  age,
  location: { home, temp },
  cellNumbers: [cell1, cell2],
  talkingSpeed: tSpeed,
}) =>
  console.log(
    `Here are the details of ${name}:- age is ${age}, ${home} ${temp} having ${cell1} & ${cell2} with talk Speed max at ${tSpeed}`
  );

personDetails(vaamiObj);
