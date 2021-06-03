import { AddCommentForm } from './addCommentForm.js';
import { CommentItem } from './commentItem.js';

const template = `
  <div class="comments-page__form"></div>
  <div class="comments-page__list"></div>
`;
const API_URL = 'https://boring-fe.herokuapp.com';
const SUB_DOMAIN = '/comments';

export class CommentsPage {
  constructor(root) {
    this.root = root;
    this.filter = {
      page: 1,
      limit: 4,
      order: 'desc',
    };
    this.render();
    this.fetchData();
  }

  fetchData() {
    fetch(
      `${API_URL}${SUB_DOMAIN}?_page=${this.filter.page}&_limit=${this.filter.limit}&_sort=createdAt&_order=${this.filter.order}`
    )
      .then((res) => res.json())
      .then((responseData) => {
        this.data = [];
        for (let i = 0; i < responseData.length; i++) {
          responseData[i].avatarUrl = `${API_URL}/${responseData[i].avatarUrl}`;
          this.data.push(responseData[i]);
        }
        this.renderList();
      });
  }

  render() {
    this.renderTemplate();
    this.renderForm();
    this.renderPagination();
  }

  renderTemplate() {
    this.container = document.createElement('div');
    this.container.innerHTML = template;
    this.container.classList.add('comments-page');
    this.root.append(this.container);
    this.commentsPageList = this.root.querySelector('.comments-page__list');
  }

  renderForm() {
    this.formContainer = this.container.querySelector('.comments-page__form');
    this.form = new AddCommentForm(
      this.formContainer,
      `${API_URL}${SUB_DOMAIN}`,
      (newComment) => {
        newComment.avatarUrl = `${API_URL}/${newComment.avatarUrl}`;
        const item = new CommentItem(newComment);
        this.commentsPageList.insertBefore(
          item.render(),
          this.commentsPageList.firstChild
        );
      }
    );
  }

  renderList() {
    this.commentsPageList.innerHTML = '';
    for (let i = 0; i < this.data.length; i++) {
      const item = new CommentItem(this.data[i]);
      this.commentsPageList.append(item.render());
    }
  }

  renderPagination() {
    this.nextPageBtn = document.createElement('button');
    this.nextPageBtn.textContent = 'NEXT PAGE';
    this.nextPageBtn.addEventListener('click', () => {
      this.filter.page++;
      this.fetchData();
    });

    this.formContainer.append(this.nextPageBtn);
  }
}
