const express = require('express');
const products = require('./products');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.use(cors('*'));
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => res.send('voila! you found the backend url for the remix workshop'));

app.get('/products', (req, res) => {
  res.json(products.getAll());
});

app.post('/products', (req, res) => {
  const { title, description } = req.body;

  products.add(title, description);

  res.sendStatus(201);
});

app.get('/products/:id', (req, res) => {
  const productId = req.params.id;

  res.json(products.get(productId));
});

app.delete('/products/:id', (req, res) => {
  const productId = req.params.id;

  products.delete(productId);

  res.sendStatus(200);
});

app.listen(8000, (req, res) => {
  console.log(`Server running in port 8000`);
});
