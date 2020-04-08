const express = require('express');
const router = express.Router();
const Product = require('./../Models/product');

router.post('/', function (req, res) {
    console.log(req.body);
    let product = new Product({
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock
    });
    product.save((err, prod) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(prod);
        }
    })
});
