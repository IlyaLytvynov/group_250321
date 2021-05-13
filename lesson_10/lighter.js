const lights = document.querySelectorAll('.light');
const toggleOff = () => {
  for (let i = 0; i < lights.length; i++) {
    lights[i].classList.remove('active');
  }
};

const switchOn = (light) => {
  toggleOff();
  light.classList.add('active');
};

for (let i = 0; i < lights.length; i++) {
  lights[i].onclick = () => {
    switchOn(lights[i]);
  };
}
