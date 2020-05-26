const Review = require('../database/ReviewSchema.js');

exports.getAll = (req, res) => {
  Review.find({ product_id: req })
    .then((data) => {
      res.status(200).send(data);
    });
};

exports.getMeta = (req, res) => {
  Review.find({ product_id: req })
    .then((data) => {
      const resObj = {
        product_id: req.toString(),
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
      res.status(200).send(resObj);
    });
};

exports.addReview = (req, res) => {
  const newReview = new Review(req);
  newReview.save();
  res.status(201).send();
};
