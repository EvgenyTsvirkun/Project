require('@babel/register');
require('dotenv').config();

const path = require('path');

const express = require('express');
const morgan = require('morgan');

const session = require('express-session')
const FileStore = require('session-file-store')(session)

const indexRouter = require('./routes/index.router');
const regRouter = require('./routes/reg.router')

const app = express();

const { PORT } = process.env;

const sessionConfig = {
  name: 'RaccoonsCookie',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Секретное слово',
  resave: false, // * если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // * если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 9999999, // * время жизни в мс (ms)
    httpOnly: true,
  },
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(process.cwd(), 'public')));

app.use(session(sessionConfig))

app.use('/', indexRouter);
app.use('/registration', regRouter);

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
