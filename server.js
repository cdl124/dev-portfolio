'use strict';

const port = process.env.PORT || 3000;
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(`${__dirname}/build`));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server running on port: ${port}!`);
});
