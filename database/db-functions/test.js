const { assert, expect } = require('chai');
const Review = require('../ReviewSchema.js');

const productIds = [1, 10, 100, 1000, 10000, 100000, 1000000];
const resultsArr = [];
for (let i = 0; i < productIds.length; i += 1) {
  Review.find({ product_id: productIds[i] })
    .then((data) => {
      resultsArr.push(data);
    });
}

describe('Tests if each product has 1 to 7 reviews', () => {
  for (let i = 0; i < resultsArr.length; i += 1) {
    Review.find({ product_id: productIds[i] })
      .then((data) => {
        const reviewsArr = data.reviews;
        it('should be an array', () => {
          assert.isArray(reviewsArr);
        });
        it('should have 1-7 reviews', () => {
          expect(reviewsArr).to.have.lengthOf.at.least(1);
          expect(reviewsArr).to.have.lengthOf.at.most(7);
        });
      });
  }
});
