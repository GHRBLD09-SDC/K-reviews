const Review = require('../database/ReviewSchema.js');

exports.getAll = (req, res) => {
  Review.find({ product_id: req })
    .then((data) => {
      res.send(data);
    });
};

exports.getMeta = (req, res) => {
  Review.find({ product_id: req })
    .then((data) => {
      const resObj = {
        product_id: req.toString(),
        ratings: {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
        },
        recommended: {
          0: 0,
        },
        characteristics: {},
      };
      res.send(resObj);
    });
};
