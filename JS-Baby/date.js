const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const month = new Date().getMonth();
const day = new Date().getDay();
const year = new Date().getFullYear();
console.log(months[month]);
console.log(days[day]);
console.log(year);

console.log(`${months[month]}, ${days[day]} ${year}`);
