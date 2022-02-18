require('dotenv').config();

const express = require('express');
const { resolve } = require('path');
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
