const faker = require('faker');
const Product = require('../ProductSchema.js');

const product = new Product({
  product_id: '1',
  page: 1,
  count: 5,
  results: [{ //randomize how many results 5-10
    review_id: 1,
    rating: Math.floor(Math.random() * 5 + 1),
    summary: faker.fake('{{lorem.sentence}}'),
    recommend: 0,
    response: '',
    body: faker.fake('{{lorem.sentence}}'),
    date: 'today',
    reviewer_name: faker.fake('{{lorem.firstName}} {{lorem.lastName}}'),
    helpfullness: Math.floor(Math.random() * 5 + 1),
    photos: [{ //randomize how many photos
      id: 1,
      url: faker.fake('{{image.image}}'),
    }],
    characteristics: {
      size: {
        id: 1,
        value: Math.floor(Math.random() * 5 + 1),
      },
      width: {
        id: 1,
        value: Math.floor(Math.random() * 5 + 1),
      },
      confort: {
        id: 1,
        value: Math.floor(Math.random() * 5 + 1),
      },
      quality: {
        id: 1,
        value: Math.floor(Math.random() * 5 + 1),
      },
    },
  }],
});

product.svae();
