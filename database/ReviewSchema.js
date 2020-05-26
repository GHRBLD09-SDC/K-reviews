const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/greenfield', { autoIndex: false, useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('connection established to Greenfield Reviews'));

const reviewSchema = new mongoose.Schema({
  review_id: { type: Number, index: true },
  product_id: { type: Number, index: true },
  rating: Number,
  summary: String,
  recommend: Number,
  response: String,
  body: String,
  date: String,
  reviewer_name: String,
  email: String,
  helpfullness: Number,
  photos: [{
    id: Number,
    url: String,
  }],
  characteristics: [{}],
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
