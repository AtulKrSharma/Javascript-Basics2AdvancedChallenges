try {
    let result = add(10, 20);
    console.log(result);
  } catch (e) {
    console.log({ name: e.name, message: e.message });
  }
  finally{
  console.log('Bye');}