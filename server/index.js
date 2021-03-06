require('newrelic');
const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const {
  getAll,
  getMeta,
  addReview,
  helpfulReview,
  report,
} = require('./controllers.js');
const {
  redisGetAll,
  redisGetMeta,
} = require('./redis.js');

const app = express();
const port = 8154;


app.listen(port, () => console.log(`Listenting at port ${port}`));
app.use(cors());
app.use(bp.json());


/* Returns a list of reviews for a particular product.
 This list does not include any reported reviews. */
app.get('/reviews/:product_id/list', redisGetAll);

/* Returns review metadata for a given product */
app.get('/reviews/:product_id/meta', redisGetMeta);

/* Adds a review for the given product */
app.post('/reviews/:product_id', addReview);

/* Updates a review to show it was found helpful */
app.put('/reviews/helpful/:review_id', helpfulReview);

/* Updates a review to show it was reported. Note, this action does not delete the review,
 but the review will not be returned in the above GET request. */
app.put('/reviews/report/:review_id', report);
