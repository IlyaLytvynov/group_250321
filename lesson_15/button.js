export class Button {
  constructor(root, somethingToToggle) {
    this.root = root;
    this.somethingToToggle = somethingToToggle;

    this.btn = document.createElement('button');
    this.btn.textContent = 'Click ME';
    this.btn.addEventListener('click', () => {
      somethingToToggle.toggle();
    });

    this.root.append(this.btn);
  }
}
