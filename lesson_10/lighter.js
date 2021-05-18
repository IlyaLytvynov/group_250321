const createLighter = (lighter) => {
  const lights = lighter.querySelectorAll('.light');
  const toggleOff = () => {
    for (let i = 0; i < lights.length; i++) {
      lights[i].classList.remove('active');
    }
  };
  console.log(TEST);
  const switchOn = (light) => {
    toggleOff();
    light.classList.add('active');
    lighter.style.backgroundColor = getRandomColor();
  };

  for (let i = 0; i < lights.length; i++) {
    lights[i].addEventListener('click', () => {
      switchOn(lights[i]);
    });
  }
};

export { createLighter };
