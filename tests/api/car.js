const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/api/server').app;
const exec = require('child_process').exec;
const db = require('../../src/api/pgp');

const should = chai.should();
chai.use(chaiHttp);

const API_ENDPOINT = '/api/car';

describe('/car endpoint', () => {
  afterEach((done) => {
    // Clear the database after tests
    exec('psql test_webtask < src/api/webtask_schema.sql', (error) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      done(error);
    });
  });

  it('Should return details about car', () => {
    const car = {
      item_number: '1395P',
      vin: '3GNDA13D96S631406',
      car_name: 'Ford Focus',
      release_year: 2012,
      min_price: '$8,500.00',
      max_price: '$9,000.00',
      mileage: '200000',
      cylinders: 'L4',
      city_mpg: 20,
      highway_mpg: 25,
      engine: '1.3',
      views: 37,
      saves: 20,
      shares: 15,
    };

    return db.none(`INSERT INTO car(item_number, vin, car_name, release_year,
                    min_price, max_price, mileage, cylinders, city_mpg, highway_mpg,
                    engine, views, saves, shares)
                  VALUES ($[item_number], $[vin], $[car_name], $[release_year],
                    $[min_price], $[max_price], $[mileage], $[cylinders], $[city_mpg],
                    $[highway_mpg], $[engine], $[views], $[saves], $[shares]);`, car).then(() => {
      return chai.request(app).get(API_ENDPOINT + '/1').then((res) => {
        res.should.have.status(200);
        res.type.should.equal('application/json');
        res.charset.should.equal('utf-8');

        const carRes = res.body;
        carRes.should.be.an('object');
        carRes.should.have.property('id');
        carRes.id.should.be.a('number');
        carRes.id.should.equal(1);
        carRes.should.have.property('item_number');
        carRes.item_number.should.be.a('string');
        carRes.item_number.should.equal(car.item_number);
        carRes.should.have.property('vin');
        carRes.vin.should.be.a('string');
        carRes.vin.should.equal(car.vin);
        carRes.should.have.property('car_name');
        carRes.car_name.should.be.a('string');
        carRes.car_name.should.equal(car.car_name);
        carRes.should.have.property('release_year');
        carRes.release_year.should.be.a('number');
        carRes.release_year.should.equal(car.release_year);
        carRes.should.have.property('min_price');
        carRes.min_price.should.be.a('string');
        carRes.min_price.should.equal(car.min_price);
        carRes.should.have.property('max_price');
        carRes.max_price.should.be.an('string');
        carRes.max_price.should.equal(car.max_price);
        carRes.should.have.property('mileage');
        carRes.mileage.should.be.an('string');
        carRes.mileage.should.equal(car.mileage);
        carRes.should.have.property('cylinders');
        carRes.cylinders.should.be.an('string');
        carRes.cylinders.should.equal(car.cylinders);
        carRes.should.have.property('city_mpg');
        carRes.city_mpg.should.be.an('number');
        carRes.city_mpg.should.equal(car.city_mpg);
        carRes.should.have.property('highway_mpg');
        carRes.highway_mpg.should.be.an('number');
        carRes.highway_mpg.should.equal(car.highway_mpg);
        carRes.should.have.property('engine');
        carRes.engine.should.be.an('string');
        carRes.engine.should.equal(car.engine);
        carRes.should.have.property('saves');
        carRes.saves.should.be.an('number');
        carRes.saves.should.equal(car.saves);
        carRes.should.have.property('views');
        carRes.views.should.be.an('number');
        carRes.views.should.equal(car.views);
        carRes.should.have.property('shares');
        carRes.shares.should.be.an('number');
        carRes.shares.should.equal(car.shares);
      });
    });
  });
});
