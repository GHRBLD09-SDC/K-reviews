
const characteristicsGen = () => {
  const charArr = [];
  for (let i = 0; i < 4; i += 1) {
    charArr.push(Math.floor(Math.random() * 12));
  }
  return charArr;
};

module.exports = characteristicsGen;
