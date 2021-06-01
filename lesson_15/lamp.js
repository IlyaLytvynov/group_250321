export class Lamp {
  constructor(root, color = 'yellow') {
    this.root = root;
    this.color = color;
    this.isEnable = false;
    this.lamp = document.createElement('div');
    this.lamp.style.borderRadius = '50%';
    this.lamp.style.border = '1px solid black';
    this.lamp.style.width = '50px';
    this.lamp.style.height = '50px';

    this.root.append(this.lamp);
  }

  toggleOn() {
    this.lamp.style.background = this.color;
    this.isEnable = true;
  }

  toggleOff() {
    this.lamp.style.background = 'transparent';
    this.isEnable = false;
  }

  toggle() {
    if (this.isEnable) {
      this.toggleOff();
    } else {
      this.toggleOn();
    }
  }
}
