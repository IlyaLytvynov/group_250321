const red = document.querySelector('.light_red');
const yellow = document.querySelector('.light_yellow');
const green = document.querySelector('.light_green');

const switchRed = () => {
  red.style.backgroundColor = 'red';
  yellow.style.backgroundColor = 'transparent';
  green.style.backgroundColor = 'transparent';
};

const switchYellow = () => {
  red.style.backgroundColor = 'transparent';
  yellow.style.backgroundColor = 'yellow';
  green.style.backgroundColor = 'transparent';
};

const switchGreen = () => {
  red.style.backgroundColor = 'transparent';
  yellow.style.backgroundColor = 'transparent';
  green.style.backgroundColor = 'green';
};

red.addEventListener('click', switchRed);
yellow.addEventListener('click', switchYellow);
green.addEventListener('click', switchGreen);
