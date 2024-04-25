
const http = require('http');

const webServer = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Web Server is running!\n');
});

webServer.listen(3000, () => {
  console.log('Web server listening on port 3000...');
});

const fs = require('fs');
const fileServer = http.createServer((req, res) => {
  if (req.method === 'GET') {
    fs.readFile('example.txt', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found!');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    });
  } else if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      fs.writeFile('example.txt', body, err => {
        if (err) {
          res.writeHead(500);
          res.end('Internal server error');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('File updated successfully');
      });
    });
  }
});

fileServer.listen(4000, () => {
  console.log('File server listening on port 4000...');
});

const express = require("express");
const app = express();


app.use((req, res, next) => {
  console.log('Middleware executed!');
  next();
});


app.get('/', (req, res) => {
  res.send('this is the express server');
});

app.listen(5000, () => {
  console.log('Express app listening on port 5000...');
});


const EventEmitter = require('events');
const myEmitter = new EventEmitter();


const myModule = require('./myModule');

myEmitter.on('event', myModule.eventHandler);

myEmitter.emit('event', 'executed when event is called');
