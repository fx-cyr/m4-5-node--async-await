// Exercise 1
// ------------

const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    array.every((word) => typeof word === 'string')
      ? resolve(array.map((word) => word.toUpperCase()))
      : reject('Error: Not all items in the array are strings!');
  });
};

const sortWords = (array) => {
  return new Promise((resolve, reject) => {
    array.every((word) => typeof word === 'string')
      ? resolve(array.sort())
      : reject('Error: Something went wrong with sorting words.');
  });
};

const textTransform = async (array) => {
  // here
  try {
    const capsFun = await makeAllCaps(array);
    const result = await sortWords(capsFun)
    console.log(result)
  }
  catch(error) {
    console.error(error)
  }

};

textTransform(['cucumber', 'tomatos', 'avocado']);
textTransform(['cucumber', 44, true]);
