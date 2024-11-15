const day = 'FrTuiday';
let days;

day == 'Friday' ? (days = 'Monday') : (days = 'Saturday');

switch (days) {
  case 'Monday':
    console.log('this is monday');
    break;
  case 'Tuesday':
    console.log('this is tues');

  case 'Friday':
  case 'Saturday':
    console.log('this is weekend');
    break;

  default:
    console.log(day);
}
