'use strict';

const port = process.env.PORT || 3000;
const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/app`));

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server running on port: ${port}!`);
});
