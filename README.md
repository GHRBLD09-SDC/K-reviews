# K-reviews
This is the repo for the 'reviews' module. The 'reviews' module will be found in this repo.

## Scripts to run
#### npm run server
- runs the server by running node on index.js in the server file


## CRUD Routes
#### List Reviews
- Returns a list of reviews for a particular product. This list *does not* include any reported reviews
- > GET /reviews/:product_id/list

#### Get Review Metadata
- Returns review metadata for a given product
- > GET /reviews/:product/id/meta

#### Add a Review
- Adds a review for the given product
- > POST /reviews/:product_id

#### Mark Review as Helpful
- Updates a review to show it was found helpful
- > PUT /reviews/helpful/:review_id

#### Report Review
- Updates a review to show it was reported. Note, this action does not delete the review, but the review will not be returned in the above GET request
- > PUT /reviews/report/:review_id