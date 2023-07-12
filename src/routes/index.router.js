const express = require('express');
const Home = require('../../public/Views/Home');
const renderTemplate = require('../lib/renderTemplate');

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  renderTemplate(Home, {}, res);
  res.end();
});

module.exports = indexRouter;
