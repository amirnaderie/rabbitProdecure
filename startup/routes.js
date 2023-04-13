const express = require('express');
//const menus = require('../routes/menus');
const send = require('../routes/send');
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/send', send);
  app.use(error);
}