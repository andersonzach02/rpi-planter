const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
