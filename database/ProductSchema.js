const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Greenfield Reviews', { autoIndex: false });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('connection established to Greenfield Reviews'));

const reviewSchema = new mongoose.Schema({});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
