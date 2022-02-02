require('dotenv').config();

const express = require('express');
const routes = require('./src/routes');

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', routes.home);
    this.app.use('/students/', routes.student);
    this.app.use('/users/', routes.user);
    this.app.use('/tokens/', routes.token);
  }
}

module.exports = new App().app;
