const express = require('express');

const app = express();
const port = 8153;

app.listen(port, () => console.log(`Listenting at http://localhost:${port}`));


//Returns a list of reviews for a particular product. This list does not include any reported reviews.
app.get('/revies/:product_id/list', (req, res) => {

});

//Returns review metadata for a given product
app.get('/reviews/:product_id/meta', (req, res) => {

});

//Adds a review for the given product
app.post('.reviews/:product_id', (req, res) => {

});

//Updates a review to show it was found helpful
app.put('/reviews/helpful/:review_id', (req, res) => {

});

//Updates a review to show it was reported. Note, this action does not delete the review, but the review will not be returned in the above GET request.
app.put('/reviews/report/:review_id', (req, res) => {

});
