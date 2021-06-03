const formChildrenTemplate = `
  <div class="add-comment-form__field">
    <input
      type="text"
      name="author"
      class="add-comment-form__native-input"
      placeholder="Name"
    />
  </div>
  <div class="add-comment-form__field">
    <input
      type="text"
      name="title"
      class="add-comment-form__native-input"
      placeholder="Title"
    />
  </div>
  <div class="add-comment-form__field">
    <textarea
      name="text"
      class="add-comment-form__native-input"
      placeholder="Your comment"
    ></textarea>
  </div>
  <div class="add-comment-form__field">
    <input
      type="file"
      name="image"
      class="add-comment-form__btn add-comment-form__btn_upload"
    />
    <img src="" alt="" class="add-comment-form__preview">
  </div>
  <div class="add-comment-form__field">
    <button class="add-comment-form__btn add-comment-form__btn_submit" type="submit">
      Add
    </button>
    <button class="add-comment-form__btn add-comment-form__btn_clear" type="reset">
      Clear
    </button>
  </div>
`;

export class AddCommentForm {
  constructor(root, url, onSuccess) {
    this.url = url;
    this.root = root;
    this.onSuccess = onSuccess;
    this.render();
    this.attachEvents();
  }

  render() {
    this.form = document.createElement('form');
    this.form.classList.add('add-comment-form');
    this.form.innerHTML = formChildrenTemplate;
    this.root.append(this.form);
    this.previewImg = this.form.querySelector('.add-comment-form__preview');
    this.fileUploadBtn = this.form.querySelector(
      '.add-comment-form__btn_upload'
    );
  }

  attachEvents() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const requestData = new FormData(this.form);
      fetch(this.url, {
        method: 'POST',
        body: requestData,
      })
        .then((res) => res.json())
        .then((data) => {
          this.onSuccess(data);
        });
    });

    this.fileUploadBtn.addEventListener('change', () => {
      console.log('HELLO', this.fileUploadBtn.files);
      if (this.fileUploadBtn.value) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          this.previewImg.src = fileReader.result;
        };

        fileReader.readAsDataURL(this.fileUploadBtn.files[0]);
      }
    });
  }

  sendData() {}
}
