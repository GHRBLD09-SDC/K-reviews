const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Greenfield-Reviews', { autoIndex: false, useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('connection established to Greenfield Reviews'));

const reviewSchema = new mongoose.Schema({
  review_id: Number,
  product_id: String,
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
  characteristics: [Number],
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
