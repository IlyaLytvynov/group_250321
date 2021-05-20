import { createImageFeed } from './createImageFeed.js';
// createCircle(header, 70, 2, undefined, 'red');
const main = document.querySelector('main');
const images = [
  {
    url: 'https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    author: 'Jon Doe',
    authorUrl: 'https://unsplash.com/@xps',
  },
  {
    url: 'https://images.unsplash.com/photo-1621481415887-001fcaddd4de?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    author: 'Jane Doe',
    authorUrl: 'https://unsplash.com/@jeremy0',
  },
  {
    url: 'https://images.unsplash.com/photo-1616794809986-09e7d44b8159?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    author: 'Jane Doe',
    authorUrl: 'https://unsplash.com/@akramhuseyn',
  },
  {
    url: 'https://images.unsplash.com/photo-1621478646877-f97589ac80d1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    author: 'Jack Doe',
    authorUrl: 'https://unsplash.com/@kyryliukigor',
  },
  {
    url: 'https://images.unsplash.com/photo-1621472469898-549961cdda07?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    author: 'Jack Doe',
    authorUrl: 'https://unsplash.com/@zerotake',
  },
  {
    url: 'https://images.unsplash.com/photo-1611095786283-c2f965646ef1?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    author: 'Jack Doe',
    authorUrl: 'https://unsplash.com/@docusign',
  },
  {
    url: 'https://images.unsplash.com/photo-1621468953754-babbc5812282?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    author: 'Jack Doe',
    authorUrl: 'https://unsplash.com/@jupp',
  },
  {
    url: 'https://images.unsplash.com/photo-1621460245907-8b291dd52dfc?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    author: 'Jack Doe',
    authorUrl: 'https://unsplash.com/@majestical_jasmin',
  },
  {
    url: 'https://images.unsplash.com/photo-1621454804914-f197f2acfeb7?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    author: 'Jack Doe',
    authorUrl: 'https://unsplash.com/@imleedhali',
  },
];
createImageFeed(main, images, 3);
