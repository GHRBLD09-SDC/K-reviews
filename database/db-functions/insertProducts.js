const faker = require('faker');
const { PerformanceObserver, performance } = require('perf_hooks');
const Review = require('../ReviewSchema.js');

const seeder = () => {
  for (let i = 0; i < 100; i += 1) {
    const review = new Review({
      review_id: 1,
      product_id: 1,
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
      characteristics: [1, 2],
    });
    review.save();
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
