const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Greenfield Reviews', { autoIndex: false });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('connection established to Greenfield Reviews'));

const reviewSchema = new mongoose.Schema({
  product_id: String,
  page: Number,
  count: Number,
  results: [{
    review_id: Number,
    rating: Number,
    summary: String,
    recommend: Number,
    response: String,
    body: String,
    date: String,
    reviewer_name: String,
    helpfullness: Number,
    photos: [{
      id: Number,
      url: String,
    }],
  }],
  characteristics: {
    size: {
      id: Number,
      value: String,
    },
    width: {
      id: Number,
      value: String,
    },
    confort: {
      id: Number,
      value: String,
    },
  },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
