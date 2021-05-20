const createImage = (root, imageData) => {
  const div = document.createElement('div');
  div.classList.add('image');
  div.innerHTML = `
    <img class="image__item" src="${imageData.url}"/>
    <h3 class="image__author"><a href="${imageData.authorUrl}" target="blank">${imageData.author}</a></h3>
  `;

  root.append(div);
};

export const createImageFeed = (root, images, columnsCount = 3) => {
  const container = document.createElement('div');
  container.classList.add('image-feed');

  const columnWidth = `${100 / columnsCount}%`;
  const columns = [];

  for (let i = 0; i < columnsCount; i++) {
    const column = document.createElement('div');
    columns.push(column);
    column.style.width = columnWidth;
    column.classList.add('image-feed__column');
    container.append(column);
  }
  let j = 0;
  for (let i = 0; i < images.length; i++) {
    let columnToInsert;
    if (j + 1 <= columns.length) {
      columnToInsert = columns[j];
      j++;
    } else {
      columnToInsert = columns[0];
      j = 1;
    }

    createImage(columnToInsert, images[i]);
  }

  window.addEventListener('resize', () => {
    console.log('RESIZED!', window.innerWidth, window.innerHeight);
  });

  root.append(container);
};
