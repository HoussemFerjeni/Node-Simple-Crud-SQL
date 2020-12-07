const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/create',(req, res, next) => {
    db.query(
        `INSERT INTO client (id,nom, nb, description, phone, pays, mf) VALUES (
        ${db.escape(req.body.id)},
        ${db.escape(req.body.nom)},
        ${db.escape(req.body.nb)},
        ${db.escape(req.body.description)},
        ${db.escape(req.body.phone)},
        ${db.escape(req.body.pays)},
        ${db.escape(req.body.mf)})`,
        
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



router.post('/show',(req, res, next) => {
 
    db.query(
      `SELECT * FROM client WHERE id = ${db.escape(req.body.id)};`,
      (err, result) => {
        // user does not exists
        if (err) {
          throw err;
          return res.status(400).send({
            msg: err
          });
        }else{
         res.send(result);
        }
  });
    });

router.post('/showall',(req, res, next) => {
 
  db.query(
    `SELECT * FROM client `,
    (err, result) => {
      // user does not exists
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err
        });
      }else{
       res.send(result);
      }
})
});

router.post('/delete',(req, res, next) => {
 
  db.query(
    `DELETE FROM client WHERE id = ${db.escape(req.body.id)};`,
    (err, result) => {
      // user does not exists
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err
        });
      }else{
       res.send({message : "profile supprimer"});
      }
});
  });




module.exports = router;