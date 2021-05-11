function bodyColorSwitch() {
  console.log('BODY COLOR INVOKED!');
  // DOCUMENT OBJECT MODEL
  const body = document.querySelector('#root');
  body.style.backgroundColor = getRandomColor();

  const btn = document.querySelector('#colorToggle');
  function setColor() {
    console.log('HELLOW');
    body.style.backgroundColor = getRandomColor();
  }
  btn.onclick = setColor;
}

function toggleLight() {
  const lamp = document.querySelector('.lamp');

  lamp.onclick = function () {
    if (lamp.style.backgroundColor === 'green') {
      lamp.style.backgroundColor = 'transparent';
    } else {
      lamp.style.backgroundColor = 'green';
    }
  };
}

toggleLight();
bodyColorSwitch();
