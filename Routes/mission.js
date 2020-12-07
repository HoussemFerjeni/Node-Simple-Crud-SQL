const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/create',(req, res, next) => {
    db.query(
        `INSERT INTO mission (id,userid, nomposte, datedeb, datefin, description, tjm) VALUES (
        ${db.escape(req.body.id)},
        ${db.escape(req.body.userid)},
        ${db.escape(req.body.nomposte)},
        ${db.escape(req.body.datedeb)},
        ${db.escape(req.body.datefin)},
        ${db.escape(req.body.description)},
        ${db.escape(req.body.tjm)})`,
        
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
      `SELECT * FROM mission WHERE id = ${db.escape(req.body.id)};`,
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
    `SELECT * FROM mission `,
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
    `DELETE FROM mission WHERE id = ${db.escape(req.body.id)};`,
    (err, result) => {
      // user does not exists
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err
        });
      }else{
       res.send({message : "mission supprimer"});
      }
});
  });

  router.post('/showbyclient',(req, res, next) => {
 
    db.query(
      `SELECT * FROM mission WHERE userid = ${db.escape(req.body.userid)};`,
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




module.exports = router;