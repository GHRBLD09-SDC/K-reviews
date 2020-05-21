const faker = require('faker');
const { PerformanceObserver, performance } = require('perf_hooks');
const Product = require('../ProductSchema.js');

const seeder = () => {
  for (let i = 0; i < 100000; i += 1) {
    const product = new Product({
      product_id: '1',
      page: 0,
      count: 5,
      results: [{ //randomize how many results 5-10
        review_id: 1,
        rating: Math.floor(Math.random() * 5 + 1),
        summary: faker.fake('{{lorem.sentence}}'),
        recommend: 0,
        response: '',
        body: faker.fake('{{lorem.sentence}}'),
        date: 'today',
        reviewer_name: faker.fake('{{name.firstName}} {{name.lastName}}'),
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
    product.save();
    if (i % 1000 === 0) console.log(i);
  }
};

const wrapped = performance.timerify(seeder);

const obs = new PerformanceObserver((list) => {
  console.log(list.getEntries()[0].duration);
  obs.disconnect();
});
obs.observe({ entryTypes: ['function'] });
wrapped();
