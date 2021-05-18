function randomNumber(limit = 100) {
  const number = Math.round(Math.random() * limit);
  return number;
}

const TEST = 'HELLO WORLD';

function getRandomColor() {
  const red = randomNumber(255);
  const green = randomNumber(255);
  const blue = randomNumber(255);
  return `rgb(${red}, ${green}, ${blue})`;
}
