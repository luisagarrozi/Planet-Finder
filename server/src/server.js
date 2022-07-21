 const http = require('http');
 const app = require('./app');

 const PORT = process.env.PORT || 8000
 // Lets the server administrator specify the port for the backend and, if none is picked, it defaults to 8000

 const server = http.createServer(app);

 server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
 })
