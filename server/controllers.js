const Review = require('../database/ReviewSchema.js');
const Characteristics = require('../database/CharacteristicsSchema.js');

exports.getAll = (req, res) => {
  Review.find({ product_id: req.params.product_id })
    .then((data) => {
      res.status(200).send(data);
    });
};

exports.getMeta = (req, res) => {
  console.log('here')
  Review.find({ product_id: req.params.product_id })
    .then((data) => {
      Characteristics.findOne({ _id: '5ed172e0ad2baf650271fd2e' })
        .then((chars) => {
          const resObj = {
            product_id: req.params.product_id.toString(),
            ratings: {},
            recommended: {},
            characteristics: {},
          };
          for (let i = 0; i < data.length; i += 1) {
            const { rating } = data[i];
            if (!resObj.ratings[rating]) {
              resObj.ratings[rating] = 1;
            } else {
              resObj.ratings[rating] += 1;
            }
          }
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
