const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const inventoryRoutes = require('./routes/inventory');
const billRoutes = require('./routes/bills');

const app = express();
app.use(bodyParser.json());

const dbURI = 'your_mongo_db_connection_string';
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.use('/inventory', inventoryRoutes);
app.use('/bills', billRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
