/* ---- Dependencies ---- */
const express = require('express');
const logger = require('morgan');
const db = require('./pgp');

/* ---- Initial Setup ---- */
const app = express();

if (!process.env.DEVELOPMENT) {
  app.use(logger('dev')); // log every HTTP request to the console
}

/* ---- RESTful Endpoint ---- */

/*
 * `GET /api/car/:carid` endpoint. Returns the details
 * associated with a car's id.
*/
app.get('/api/car/:carid', (request, response) => {
  const carID = request.params.carid;

  db.one('SELECT * FROM car WHERE id=$1;', carID)
  .then((car) => { response.json(car); })
  .catch((error) => {
    console.error('ERROR:', error.message || error);
    response.status(500);
  });
});

/* ---- Set port and start server ---- */

const runServer = (callback) => {
  let port = process.env.PORT || 5000;
  if (process.env.DEVELOPMENT === 'testing') {
    port = 8000;
  }
  console.log(`port = ${port}`);
  const server = app.listen(port, () => {
    console.log('Node app is running on port', port);
    if (callback) {
      callback(server);
    }
  });
};

if (require.main === module) {
  runServer();
}

exports.app = app;
exports.runServer = runServer;
