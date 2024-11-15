const PLANET = 'Earth';

PLANET = 'Mars';

const location = () => console.log(`My location is ${PLANET}`);

try {
  location();
} catch (error) {
  console.log({ name: error.name, message: error.message, stack: error.stack });
} finally {
  console.log(`Hey, you can't skip me!!`);
}
