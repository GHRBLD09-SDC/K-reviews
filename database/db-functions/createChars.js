const fs = require('fs');

const characteristics = ['size', 'width', 'comfort', 'height', 'opacity', 'teeth', 'goldness', 'squish', 'dryness', 'authenticity'];
const characteristic = {
  1: {
    id: 1,
    value: '4.0000',
    name: 'size',
  },
  2: {
    id: 2,
    value: '4.0000',
    name: 'width',
  },
  3: {
    id: 3,
    value: '4.0000',
    name: 'comfort',
  },
  4: {
    id: 4,
    value: '4.0000',
    name: 'height',
  },
  5: {
    id: 5,
    value: '4.0000',
    name: 'opacity',
  },
  6: {
    id: 6,
    value: '4.0000',
    name: 'teeth',
  },
  7: {
    id: 7,
    value: '4.0000',
    name: 'goldness',
  },
  8: {
    id: 8,
    value: '4.0000',
    name: 'squish',
  },
  9: {
    id: 9,
    value: '4.0000',
    name: 'dryness',
  },
  10: {
    id: 10,
    value: '4.0000',
    name: 'authenticity',
  },
  11: {
    id: 10,
    value: '4.0000',
    name: 'def not copying',
  },
  12: {
    id: 10,
    value: '4.0000',
    name: 'yarp',
  },
};

for (let i = 0; i < 1; i += 1) {
  const name = characteristics[i];
  fs.writeFileSync('database/characteristics.json', JSON.stringify(characteristic), { flag: 'as' });
}
