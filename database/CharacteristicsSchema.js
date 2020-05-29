const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/greenfield', { autoIndex: false, useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error: '));
// db.once('open', () => console.log('connection established to Greenfield Reviews'));

const CharacteristicsSchema = {
  size: {
    id: Number,
    value: String,
  },
  width: {
    id: Number,
    value: String,
  },
  comfort: {
    id: Number,
    value: String,
  },
  height: {
    id: Number,
    value: String,
  },
  opactiy: {
    id: Number,
    value: String,
  },
  teeth: {
    id: Number,
    value: String,
  },
  goldness: {
    id: Number,
    value: String,
  },
  squish: {
    id: Number,
    value: String,
  },
  dryness: {
    id: Number,
    value: String,
  },
  authenticity: {
    id: Number,
    value: String,
  },
};

const Characteristics = mongoose.model('Characteristics', CharacteristicsSchema);

module.exports = Characteristics;
