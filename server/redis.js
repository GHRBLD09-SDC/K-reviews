const redis = require('redis');
const Review = require('../database/ReviewSchema.js');
const Characteristics = require('../database/CharacteristicsSchema.js');


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
  client.get(req.params.product_id, (err, result) => {
    if (!result) {
      console.log('not in redis')
      Review.find({ product_id: req.params.product_id })
        .then((data) => {
          Characteristics.findOne({ 1: { id: 1, value: '4.0000', name: 'size' } })
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
                if (id > 10) return;
                resObj.characteristics[chars[id.toString()].name] = chars[id.toString()];
              });
              client.set([req.params.product_id, JSON.stringify(resObj)]);
              client.expire(req.params.product_id, 5);
              res.status(200).send(resObj);
            })
            .catch((error) => {
              res.send(error);
            });
        });
    }
    else {
      console.log('in redis')
      res.status(200).send(JSON.parse(result));
    }
  });
};
