const path = require('path');
const { readdirSync } = require('fs');

const basename = path.basename(__filename);
const routes = {};

readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    console.log(path.join(__dirname, file));
    const fileName = file.split('.')[0];
    const route = require(path.join(__dirname, file));
    routes[fileName] = route;
  });

module.exports = routes;
