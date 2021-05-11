// ARROW FUNCTION
const sum = (a, b) => {
  console.log(errorMessage);
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw Error(errorMessage);
  }
  return a + b;
};

const errorMessage = 'TEST';
console.log(errorMessage);
const total = sum(10, 20);
console.log(total);
