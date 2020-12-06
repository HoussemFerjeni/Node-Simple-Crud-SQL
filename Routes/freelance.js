const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/create',(req, res, next) => {
    db.query(
        `INSERT INTO freelance (id,nom, prenom, linkedin, description, github, age,phone) VALUES (
        ${db.escape(req.body.id)},
        ${db.escape(req.body.nom)},
        ${db.escape(req.body.prenom)},
        ${db.escape(req.body.linkedin)},
        ${db.escape(req.body.description)},
        ${db.escape(req.body.github)},
        ${db.escape(req.body.age)},
        ${db.escape(req.body.phone)})`,
        
          (err, result) => {
            if (err) {
              throw err;
              return res.status(400).send({
                msg: err
              });
            }else {
                res.send(req.body);
            }
          });
});









module.exports = router;