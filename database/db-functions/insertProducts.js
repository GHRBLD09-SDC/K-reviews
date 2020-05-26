const faker = require('faker');
const fs = require('fs');
const moment = require('moment');
const { PerformanceObserver, performance } = require('perf_hooks');
const photosGen = require('./photosGen.js');
const characteristicsGen = require('./characteristicsGen');

const n = 10000;
const seeder = () => {
  for (let i = 0; i < n; i += 1) {
    const review = {
      review_id: i,
      product_id: Math.floor(Math.random() * (n / 4) + 1),
      rating: Math.floor(Math.random() * 5 + 1),
      summary: faker.fake('{{lorem.sentence}}'),
      recommend: 0,
      response: '',
      body: faker.fake('{{lorem.sentence}}'),
      date: moment().format(),
      reviewer_name: faker.fake('{{name.firstName}} {{name.lastName}}'),
      helpfullness: Math.floor(Math.random() * 5 + 1),
      photos: photosGen(),
      characteristics: characteristicsGen(),
    };
    fs.writeFileSync('database/data.json', JSON.stringify(review), { flag: 'as' });
    if (i % 10000 === 0) console.log(`${i / 100000}%`);
  }
};

const wrapped = performance.timerify(seeder);

const obs = new PerformanceObserver((list) => {
  console.log(list.getEntries()[0].duration);
  obs.disconnect();
});
obs.observe({ entryTypes: ['function'] });
wrapped();
