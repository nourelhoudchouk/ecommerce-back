const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')

const productRoutes = require('./routes/productRoutes')

const app = express();
require('dotenv').config()

app.use(express.json());

app.use('/api/', cors(), productRoutes);
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
    .connect(MONGO_URL)
    .then(() => console.log('DB connection successfull!'))
    .catch((err) => console.log(err))

app.listen(PORT, (err) => {
    if (err) throw console.log(err);
    console.log(`listen to port ${PORT}`);
})