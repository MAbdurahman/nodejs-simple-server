/***************************** imports *****************************/
const colors = require('colors');
const http = require('http');
const {loggerMiddleware} = require('./middlewares/loggerMiddleware.js');

/************************* configure setup *************************/
colors.enabled = true;

/*********************************** variables ***********************************/
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const ADDENDUM = `\t\t...press Ctrl+C to terminate.\n`.white;
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost';


/*********************************** create server ***********************************/
const server = http.createServer((req, res) => {
   res.writeHead(200, { 'Content-Type': 'text/plain' });
   loggerMiddleware();
   res.end('Hello, World!\n');
})
/********************************** server listening *********************************/
server.listen(PORT, () => {
   console.log(`  ➔  Server:  Listening at ${BACKEND_URL}:${PORT} in ${NODE_ENV} mode!`.yellow);
   console.log(ADDENDUM);
});