try {
  const myarr = [1, 2];
  myarr = [3, 4];
  console.log(myarr);
} catch (err) {
  console.log({ name: err.name, message: err.message });
} finally {
  console.log('yay!');
}
