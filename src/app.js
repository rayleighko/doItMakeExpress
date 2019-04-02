const App = require('./Application');
const debug = require('../utils/debug')('app');
const app = App();

debug('app is initiated');

module.exports = app;
