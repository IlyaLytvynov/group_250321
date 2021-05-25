// AJAX Asynchronous Javascript and XML

fetch('https://boring-fe.herokuapp.com/movies')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      console.log('>>>>', data[i]);
    }
  });

const sendData = () => {
  fetch('https://boring-fe.herokuapp.com/movies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // JSON '{"title": "description", "img": "http://asd.asd.asd"}'
    body: JSON.stringify({
      title: 'TEST',
      description:
        'Fantastic Beasts and Where to Find Them is a 2016 fantasy film directed by David Yates. A joint British and American production, it is a spin-off and prequel to the Harry Potter film series, and is produced and written by J. K. Rowling in her screenwriting debut, inspired by her 2001 guide book of the same name. The film features an ensemble cast that includes Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Ezra Miller, Samantha Morton, Jon Voight, Carmen Ejogo, and Colin Farrell. It is the first installment in the Fantastic Beasts film series, and ninth overall in the Wizarding World franchise, that began with the Harry Potter films.',
      rating: '5.7',
      preview:
        'https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199507/movies/bitmap_2x_qt5gqd.jpg',
      genre: 'fantasy',
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};

const removeData = (id) => {
  fetch('https://boring-fe.herokuapp.com/movies/' + id, {
    method: 'DELETE',
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};

window.sendData = sendData;
window.removeData = removeData;
