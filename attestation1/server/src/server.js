const app = require('./app');
//const {host, port} = require('../config/serverConfig');

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, () => console.log(`Server started...`));
