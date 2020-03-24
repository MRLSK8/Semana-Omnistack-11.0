const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ Hello: 'World!' });
});

app.listen(3333);
