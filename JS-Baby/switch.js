const day = 'Saturday';

switch (day) {
  case 'Tuesday':
    console.log(`todays is tuesday`);
    break;

  case 'Friday':
    console.log(`todays is Fry day`);
    break;

  case 'Saturday':
  case 'Sunday':
    console.log(`todays is weekend`);
    break;

  default:
    console.log(`I'm defaults`);
    break;
}
