const API_URL = 'http://localhost:4000/feed';

const createPost = (
  root,
  post,
  onDeleteKeyClick,
  shoudInsertBefore = false
) => {
  const container = document.createElement('div');
  container.id = `item-${post.id}`;
  container.innerHTML = `
    <h2>${post.author}</h2>
    <p>${post.message}</p>
    ${(() => (post.imageURL ? `<img src="${post.imageURL}" alt="" />` : ''))()}
    <button>Likes: ${(() => (post.stats ? post.stats.likes : '0'))()}</button>
    <button>Dislikes: ${(() =>
      post.stats ? post.stats.dislikes : '0')()}</button>
    <h3>${new Date(post.createdAt)}</h3>
  `;
  const btn = document.createElement('button');
  btn.addEventListener('click', () => {
    console.log('DELETE');
    onDeleteKeyClick(post.id);
  });
  container.append(btn);
  if (shoudInsertBefore) {
    root.insertBefore(container, root.firstChild);
  } else {
    root.append(container);
  }
};

const createAddPostForm = (root, onSuccessSubmitCallback) => {
  const form = document.createElement('form');
  const template = `
    <input name="author" type="text" />
    <textarea name="message" id="" cols="30" rows="10"></textarea>
    <button type="submit">Add</button>
    <button type="reset">Reset</button>
  `;
  form.innerHTML = template;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    fetch(API_URL, {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        onSuccessSubmitCallback(data);
        form.reset();
      });
  });
  form.style.border = '1px solid red';

  root.append(form);
};

export const createNewsFeed = (root) => {
  const rootContainer = document.createElement('div');
  const itemsContainer = document.createElement('div');

  createAddPostForm(rootContainer, (post) => {
    const insertBefore = true;
    createPost(itemsContainer, post, deletePost, insertBefore);
  });

  const deletePost = (postId) => {
    fetch(`${API_URL}/${postId}`, {
      method: 'DELETE',
    }).then((res) => {
      const removedChild = itemsContainer.querySelector(`#item-${postId}`);
      itemsContainer.removeChild(removedChild);
    });
  };

  fetch(API_URL)
    .then((res) => {
      if (res.status < 400) {
        return res.json();
      } else if (res.status === 404) {
        document.body.innerHTML = '<h1>NOT FOUND</h1>';
      }
      throw Error(res.statusText);
    })
    .then((feedItems) => {
      const t = feedItems.sort(
        (item, itemNext) => itemNext.createdAt - item.createdAt
      );
      for (let i = 0; i < t.length; i++) {
        createPost(itemsContainer, t[i], deletePost);
      }
    })
    .catch((error) => {
      alert(error);
    });
  rootContainer.append(itemsContainer);
  root.append(rootContainer);
};
