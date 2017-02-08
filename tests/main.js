process.env.DEVELOPMENT = 'testing';
const runServer = require('../src/api/server').runServer;

before((done) => {
  runServer(() => {
    done();
  });
});
