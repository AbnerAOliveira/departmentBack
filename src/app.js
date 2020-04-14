const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const DepartmentContoller = require('./Controllers/DepartmentController');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

mongoose.connect(
    'mongodb://localhost:27017/http_app',
    {useNewUrlParser: true, useUnifiedTopology: true}
);

app.use('/departments', DepartmentContoller);
// app.use('/products', product_controller);

app.listen(3000);
