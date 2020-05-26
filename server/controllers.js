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

exports.helpfulReview = (req, res) => {
  Review.findOne({ review_id: req })
    .then((data) => {
      data.helpfullness += 1;
      return data;
    })
    .then((replacer) => {
      console.log(replacer)
      Review.updateOne({ review_id: req }, replacer);
    })
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      throw err;
    });
};

exports.report = (req, res) => {
  Review.findOne({ review_id: req })
    .then((data) => {
      data.reported = true;
      return data;
    })
    .then((replacer) => {
      Review.updateOne({ review_id: req }, replacer);
    })
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      throw err;
    });
};
