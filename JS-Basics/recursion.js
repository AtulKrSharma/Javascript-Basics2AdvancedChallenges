function countDown(fromNumber) {
  console.log(fromNumber);
  if (fromNumber <= 0) return;
  countDown(fromNumber - 1);
}

countDown(3);
