const express = require('express');
const path = require('path');
const app = express();

const port = process.env.REACT_APP_APP_CONTAINER_PORT;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Valor app looking on port ${port}`);
});