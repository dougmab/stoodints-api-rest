const app = require('./app');
const { port } = require('./src/config/appConfig');

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
