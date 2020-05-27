require('newrelic');
const express = require('express');
const bp = require('body-parser');
const {
  getAll,
  getMeta,
  addReview,
  helpfulReview,
  report,
} = require('./controllers.js');

const app = express();
const port = 8153;

app.listen(port, () => console.log(`Listenting at http://localhost:${port}`));
app.use(bp.json());


/* Returns a list of reviews for a particular product.
 This list does not include any reported reviews. */
app.get('/reviews/:product_id/list', getAll);

/* Returns review metadata for a given product */
app.get('/reviews/:product_id/meta', (req, res) => {
  getMeta(req.params.product_id, res);
});

/* Adds a review for the given product */
app.post('/reviews/:product_id', (req, res) => {
  addReview(req.body, res);
});

/* Updates a review to show it was found helpful */
app.put('/reviews/helpful/:review_id', (req, res) => {
  helpfulReview(req.params.review_id, res);
});

/* Updates a review to show it was reported. Note, this action does not delete the review,
 but the review will not be returned in the above GET request. */
app.put('/reviews/report/:review_id', (req, res) => {
  report(req.params.review_id, res);
});
