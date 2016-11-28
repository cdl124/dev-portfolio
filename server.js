'use strict';

const port = process.env.PORT || 8080;

const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/build`));

let server = app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server running on port: ${port}!`);
});
