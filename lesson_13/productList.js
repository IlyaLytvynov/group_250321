export const createProductList = (root) => {
  const container = document.createElement('div');
  container.classList.add('product-list');

  fetch('https://boring-fe.herokuapp.com/shop')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for (let i = 0; i < data.products.length; i++) {
        const productItem = document.createElement('div');
        productItem.classList.add('test');
        let itemContent = `
        <div>
          <h2 class="hello">${data.products[i].title}</h2>
          <img src="${data.products[i].media[0].fullUrl}"/>
          <h3>${data.products[i].price}${data.products[i].currency}</h3>
          <p>${data.products[i].description}</p>
          <h3>${data.products[i].additionalInfo.inStock} left</h3>
          <button style="background: ${data.products[i].additionalInfo.colors[0].value}">1</button>
        `;
        if (data.products[i].additionalInfo.sale) {
          itemContent += '<h3 style="color: red">SALE</h3>';
        }
        productItem.innerHTML = itemContent;

        container.append(productItem);
      }
    });
  root.append(container);
};
