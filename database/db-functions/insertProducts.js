const faker = require('faker');
const fs = require('fs');
const { PerformanceObserver, performance } = require('perf_hooks');

const seeder = () => {
  for (let i = 0; i < 1000000; i += 1) {
    const review = {
      review_id: 1,
      product_id: i,
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
      characteristics: [1, 2, 5],
    };
    fs.writeFileSync('database/data.json', JSON.stringify(review), { flag: 'as' });
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
