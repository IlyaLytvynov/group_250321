export class CommentItem {
  constructor(data) {
    this.data = data;

    this.render();
  }

  render() {
    this.container = document.createElement('div');
    this.container.classList.add('comment');
    this.container.id = this.data.id;
    this.container.innerHTML = `
      <h2 class="comment__title">${this.data.title}</h2>
      <p class="comment__text">${this.data.text}</p>
      <div class="comment__author">${this.data.author}</div>
      <img width='150' src="${this.data.avatarUrl}" class="comment__avatar"/>
    `;
    const button = document.createElement('button');
    this.container.append(button);
    return this.container;
  }
}
