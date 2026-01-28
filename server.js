/***************************** imports *****************************/
const colors = require('colors');
const http = require('http');
const fs = require('fs');
const path = require('path');
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
   if (req.method === 'GET' && req.url === '/') {
      // Reads the content of your HTML file asynchronously
      const filePath = path.join(__dirname, './pages/index.html');
      fs.readFile(filePath, 'utf8', (err, data) => {
         if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('500 Internal Server Error'.red);
            return;
         }
         res.statusCode = 200;
         // Set the content type of the response
         res.setHeader('Content-Type', 'text/html');
         // End the response
         res.end(data);
         // Send the loggerMiddleware response
         return loggerMiddleware('Home page requested.'.green.bold.italic)

      });
   } else if (req.method === 'GET' && req.url === '/about') {
      // Reads the content of your HTML file asynchronously
      const filePath = path.join(__dirname, './pages/about.html');
      fs.readFile(filePath, 'utf8', (err, data) => {
         if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('500 Internal Server Error.'.red.bold);
            return;
         }
         res.statusCode = 200;
         // Set the content type of the response
         res.setHeader('Content-Type', 'text/html');
         // End the response
         res.end(data);
         // Send the loggerMiddleware response
         loggerMiddleware('About page requested.'.green.bold.italic);

      });
   } else if (req.method === 'GET' && req.url === '/contact') {
      // Reads the content of your HTML file asynchronously
      const filePath = path.join(__dirname, './pages/contact.html');
      fs.readFile(filePath, 'utf8', (err, data) => {
         if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('500 Internal Server Error'.red);
            return;
         }
         res.statusCode = 200;
         // Set the content type of the response
         res.setHeader('Content-Type', 'text/html');
         // End the response
         res.end(data);
         // Send the loggerMiddleware response
        loggerMiddleware('Contact page requested.'.green.bold.italic);

      });
   } else {
         // Reads the content of your HTML file asynchronously
         const filePath = path.join(__dirname, './pages/notFound.html');
         fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
               res.statusCode = 500;
               res.setHeader('Content-Type', 'text/plain');
               res.end('500 Internal Server Error'.red.bold);
               return;
            }
            res.statusCode = 200;
            // Set the content type of the response
            res.setHeader('Content-Type', 'text/html');
            // End the response
            res.end(data);
            // Send the loggerMiddleware response
            loggerMiddleware('Not found page'.red.bold.italic);

         });
      }
});
/********************************** server listening *********************************/
server.listen(PORT, () => {
   console.log(`  ➔  Server:  Listening at ${BACKEND_URL}:${PORT} in ${NODE_ENV} mode!`.yellow.bold);
   console.log(ADDENDUM);
});