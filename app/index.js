const express = require('express');
const fs = require('fs');
const gm = require('gm').subClass({imageMagick: true});

const app = express();

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.get('/info', function(req, res) {
  res.send('Created by Nancy - HIRE ME!');
});

app.get('/healthcheck', function(req, res) {
  res.send('server online');
});

app.get('/imageData', function(req, res) {
  gm('./weCode.png')
  .size(function (err, size) {
    if (!err) {
      res.send(size);
    } else {
      res.send(err)
    }
  });
});

app.listen(3000);