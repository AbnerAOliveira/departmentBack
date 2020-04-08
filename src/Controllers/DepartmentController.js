const express = require('express');
const router = express.Router();
const Department = require('./../Models/department');

router.post('/', function (req, res) {
    console.log(req.body);
    let department = new Department({name: req.body.name});
    department.save((err, dep) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(dep);
        }
    });
});

router.get('/', function (req, res) {
    Department.find().exec((err, dep) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(dep);
        }
    })
});
