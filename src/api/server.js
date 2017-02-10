/* ---- Dependencies ---- */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const db = require('./pgp');

/* ---- Initial Setup ---- */
const app = express();

if (!process.env.DEVELOPMENT) {
  app.use(logger('dev')); // log every HTTP request to the console
}

// Serves the frontend code at the root
app.use('/', express.static(path.join(__dirname, '/../public/build/')));

/* ---- RESTful Endpoint ---- */

/*
 * `GET /api/car/:carid` endpoint. Returns the details
 * associated with a car's id.
*/
app.get('/api/car/:carid', (request, response) => {
  const carID = request.params.carid;

  db.one(`SELECT id, car_name AS carName, city_mpg AS cityMpg, cylinders,
            engine, highway_mpg AS highwayMpg, item_number AS itemNumber,
            max_price AS maxPrice, mileage, min_price AS minPrice,
            release_year AS releaseYear, saves, shares, views, vin
          FROM car WHERE id=$1;`, carID)
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
