const express = require('express');
var cors = require('cors');

const app = express();
app.use(cors());

const data  = require('./data.json');
app.get('/products', (req, res) => {
  res.send(data);
});

app.listen(8080, () =>
  console.log('Example app listening on port 8080!'),
);
