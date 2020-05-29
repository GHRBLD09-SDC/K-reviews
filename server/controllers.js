const Review = require('../database/ReviewSchema.js');
const Characteristics = require('../database/CharacteristicsSchema.js');

exports.getAll = (req, res) => {
  Review.find({ product_id: req.params.product_id })
    .then((data) => {
      res.status(200).send(data);
    });
};

exports.getMeta = (req, res) => {
  console.log('1/4  beginning of meta')
  Review.find({ product_id: req.params.product_id })
    .then((data) => {
      Characteristics.findOne({ 1: { id: 1, value: '4.0000', name: 'size' } })
        .then((chars) => {
          console.log('2/4  after chars is set')
          const resObj = {
            product_id: req.params.product_id.toString(),
            ratings: {},
            recommended: {},
            characteristics: {},
          };
          console.log('3/4  before resObj is set')
          for (let i = 0; i < data.length; i += 1) {
            const { rating } = data[i];
            if (!resObj.ratings[rating]) {
              resObj.ratings[rating] = 1;
            } else {
              resObj.ratings[rating] += 1;
            }
          }
          console.log('4/4  before characteristics are set')
          const charsArr = data[0].characteristics;
          charsArr.forEach((id) => {
            resObj.characteristics[chars[id].name] = chars[id];
          });
          res.status(200).send(resObj);
        });
    });
};

exports.addReview = (req, res) => {
  const newReview = new Review(req.body);
  newReview.save();
  res.status(201).send();
};

exports.helpfulReview = (req, res) => {
  Review.updateOne({ review_id: req.params.review_id }, { $inc: { helpfullness: 1 } })
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      throw err;
    });
};

exports.report = (req, res) => {
  Review.updateOne({ review_id: req.params.review_id }, { $set: { report: true } })
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      throw err;
    });
};
