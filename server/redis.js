const redis = require('redis');

const report = require('./controllers.js');

const client = redis.createClient({ host: '127.0.0.1', port: 6379 });

client.on('error', (err) => console.log(err));

exports.redisGet = (req, res) => {
  client.get(req.params.product_id, (err, res) => {
    console.log('here');
  });
};
