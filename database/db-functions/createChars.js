const fs = require('fs');

const characteristics = ['size', 'width', 'comfort', 'height', 'opacity', 'teeth', 'goldness', 'squish', 'dryness', 'authenticity'];
const characteristic = {
  size: {
    id: 1,
    value: '4.0000',
  },
  width: {
    id: 2,
    value: '4.0000',
  },
  comfort: {
    id: 3,
    value: '4.0000',
  },
  height: {
    id: 4,
    value: '4.0000',
  },
  opacity: {
    id: 5,
    value: '4.0000',
  },
  teeth: {
    id: 6,
    value: '4.0000',
  },
  goldness: {
    id: 7,
    value: '4.0000',
  },
  squish: {
    id: 8,
    value: '4.0000',
  },
  dryness: {
    id: 9,
    value: '4.0000',
  },
  authenticity: {
    id: 10,
    value: '4.0000',
  },
};

for (let i = 0; i < 1; i += 1) {
  const name = characteristics[i];
  fs.writeFileSync('database/characteristics.json', JSON.stringify(characteristic), { flag: 'as' });
}
