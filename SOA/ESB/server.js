const app = require('./app')
const http = require('http');

const port = 4001;
 
 const server = http.createServer(app);
 
 // listen for requests
 server.listen(port, () => {
   console.log("server starting on port : " + port)
 });


