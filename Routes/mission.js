const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/create',async(req, res, next) => {
   await db.query(
        `INSERT INTO mission (userid, nomposte, datedeb, datefin, description, tjm) VALUES (
       
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

  router.post('/showbyclient',async(req, res) => {
 
   await db.query(
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


    router.post('/postule',(req, res, next) => {
 
      db.query(
        `INSERT INTO postule (userid, nomposte,clientid) VALUES (
        ${db.escape(req.body.userid)},
        ${db.escape(req.body.nomposte)},
        ${db.escape(req.body.clientid)})`,
        
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