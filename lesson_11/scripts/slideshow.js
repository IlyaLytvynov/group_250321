export const startSlideshow = (root, speed = 3000) => {
  const slides = root.querySelectorAll('.slideshow__slide');
  const controls = root.querySelectorAll('.slideshow__control');
  const dots = root.querySelectorAll('.slideshow__dot');
  let lastSlideIndex = slides.length - 1;
  let activeSlideIndex = null;
  let intervalId = null;

  initSlides();
  initPager();
  activateSlide();
  initControls();
  initInterval();

  root.addEventListener('mouseenter', () => {
    console.log('ENTER');
    stopInterval();
  });

  root.addEventListener('mouseleave', () => {
    console.log('Leave');
    initInterval();
  });

  function initSlides() {
    for (let i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains('active')) {
        activeSlideIndex = i;
      }
    }
    if (activeSlideIndex === null) {
      activeSlideIndex = 0;
    }
  }

  function initInterval() {
    intervalId = setInterval(() => {
      changeSlide(true);
    }, speed);
  }

  function stopInterval() {
    clearInterval(intervalId);
  }

  function increaseIndex() {
    if (activeSlideIndex + 1 <= lastSlideIndex) {
      activeSlideIndex++;
    } else {
      activeSlideIndex = 0;
    }
  }

  function decreaseIndex() {
    if (activeSlideIndex - 1 >= 0) {
      activeSlideIndex--;
    } else {
      activeSlideIndex = lastSlideIndex;
    }
  }

  function deactivateSlide() {
    slides[activeSlideIndex].classList.remove('active');
  }

  function activateSlide() {
    slides[activeSlideIndex].classList.add('active');
  }

  function changeSlide(isNext) {
    // let changeSlideFunction = isNext ? increaseIndex : decreaseIndex;

    deactivateSlide();
    deactivateDot();
    if (isNext) {
      increaseIndex();
    } else {
      decreaseIndex();
    }
    activateSlide();
    activateDot();
  }

  function initControls() {
    const [prevControl, nextControl] = controls;

    prevControl.addEventListener('click', () => {
      changeSlide(false);
    });

    nextControl.addEventListener('click', () => {
      changeSlide(true);
    });
  }

  function initPager() {
    if (dots[activeSlideIndex].classList.contains('active')) {
      return;
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener('click', () => {
        deactivateSlide();
        deactivateDot();
        activeSlideIndex = i;
        activateSlide();
        activateDot();
      });
    }
    activateDot();
  }

  function activateDot() {
    dots[activeSlideIndex].classList.add('active');
  }

  function deactivateDot() {
    dots[activeSlideIndex].classList.remove('active');
  }

  console.log(slides, activeSlideIndex, controls);
};
