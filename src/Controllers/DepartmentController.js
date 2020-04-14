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
    });
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    Department.deleteOne({_id: id}, (error) => {
        if (error){
            res.status(500).send(error);
        }else{
            res.status(200).send({});
        }
    });
});

router.patch('/:id', (req, res) => {
   Department.findById(req.params.id, (error, dep) => {
      if (error){
          res.status(500).send(error)
      }else if(!dep){
          res.status(404).send({})
      }else{
          dep.name = req.body.name;
          dep.save()
              .then((d)=> res.status(200).send(d))
              .catch((e)=> res.status(500).send(e));
      }
   });
});

module.exports = router;
