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
        ratings: {},
        recommended: {},
        characteristics: {},
      };
      for (let i = 0; i < data.length; i += 1) {
        if (!resObj.ratings[data[i].rating]) {
          resObj.ratings[data[i].rating] = 1;
        } else {
          resObj.ratings[data[i].rating] += 1;
        }
      }
      res.send(resObj);
    });
};
