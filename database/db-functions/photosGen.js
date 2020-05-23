const faker = require('faker');

const photosGen = () => {
  const count = Math.floor(Math.random() * 3);
  const photoArr = [];
  for (let i = 0; i < count; i += 1) {
    photoArr.push({ id: i, url: faker.fake('{{image.image}}') });
  }
  return photoArr;
};

module.exports = photosGen;
