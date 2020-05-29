const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/greenfield', { autoIndex: false, useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error: '));
// db.once('open', () => console.log('connection established to Greenfield Reviews'));

const CharacteristicsSchema = {
  1: {
    id: Number,
    value: String,
    name: String,
  },
  2: {
    id: Number,
    value: String,
    name: String,
  },
  3: {
    id: Number,
    value: String,
    name: String,
  },
  4: {
    id: Number,
    value: String,
    name: String,
  },
  5: {
    id: Number,
    value: String,
    name: String,
  },
  6: {
    id: Number,
    value: String,
    name: String,
  },
  7: {
    id: Number,
    value: String,
    name: String,
  },
  8: {
    id: Number,
    value: String,
    name: String,
  },
  9: {
    id: Number,
    value: String,
    name: String,
  },
  10: {
    id: Number,
    value: String,
    name: String,
  },
};

const Characteristics = mongoose.model('Characteristics', CharacteristicsSchema);

module.exports = Characteristics;
