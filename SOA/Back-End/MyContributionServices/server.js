const app = require('./app')
const http = require('http');
const db = require("./models");

//db.sequelize.sync({force : true});

const port = 5004;
 
 const server = http.createServer(app);
 
 // listen for requests
 server.listen(port, () => {
   console.log("server starting on port : " + port)
 });


