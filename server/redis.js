const redis = require('redis');
const Review = require('../database/ReviewSchema.js');


const { getAll, getMeta } = require('./controllers.js');

const client = redis.createClient({ host: '127.0.0.1', port: 6379 });

client.on('error', (err) => console.log(err));

exports.redisGet = (req, res) => {
  // client.get(req.params.product_id, (err) => {
  //   if (err) {
  //     client.set(req.params.product_id)
  //     report(req, res);
  //   }
  // });
};

exports.redisGetAll = async (req, res) => {
  client.get(req.params.product_id, (err, result) => {
    if (!result) {
      Review.find({ product_id: req.params.product_id })
        .then((dbReturn) => {
          client.set([req.params.product_id, JSON.stringify(dbReturn)]);
          client.expire(req.params.product_id, 5);
          res.send(dbReturn);
        });
    } else {
      res.status(200).send(JSON.parse(result));
    }
  });
};

exports.redisGetMeta = (req, res) => {

}
