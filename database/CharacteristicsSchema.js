const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Greenfield-Reviews', { autoIndex: false, useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('connection established to Greenfield Reviews'));

const CharacteristicsSchema = {
  
}