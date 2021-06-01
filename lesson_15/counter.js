export class Counter {
  constructor() {
    this.count = 0;
    this.intervalId = null;
    this.isEnable = false;
  }

  toggleOn() {
    this.isEnable = true;
    this.intervalId = setInterval(() => {
      console.log(this.count);
      this.count++;
    }, 1000);
  }

  toggleOff() {
    this.isEnable = false;
    clearInterval(this.intervalId);
  }

  toggle() {
    if (this.isEnable) {
      this.toggleOff();
    } else {
      this.toggleOn();
    }
  }
}
