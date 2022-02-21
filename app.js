require('dotenv').config();

const express = require('express');
const { resolve } = require('path');
const cors = require('cors');
const helmet = require('helmet');

const routes = require('./src/routes');

const whitelist = [
  process.env.DOMAIN_URL,
];

const corsOptions = {
  origin(origin, cb) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      cb(null, true);
    } else {
      cb(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', routes.home);
    this.app.use('/students/', routes.student);
    this.app.use('/users/', routes.user);
    this.app.use('/tokens/', routes.token);
    this.app.use('/photos/', routes.photo);
  }
}

module.exports = new App().app;
