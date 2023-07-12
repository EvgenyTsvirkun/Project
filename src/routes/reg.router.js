const express = require('express');
const Registration = require('../../public/Views/Registration');
const renderTemplate = require('../lib/renderTemplate');
const { User } = require('../../db/models');

const regRouter = express.Router();

regRouter.get('/', (req, res) => {
  renderTemplate(Registration, {}, res);
  res.end();
});

regRouter.post('/', async (req, res) => {
  try {
    const { fullname, login, email, password } = req.body;
    const newUser = await User.create({
      fullname,
      login,
      email,
      password,
    });
    console.log(`New user ${newUser}`);
    res.json(newUser);
  } catch (err) {
    res.send(`Can't create user ${err}`);
  }
});

module.exports = regRouter;
