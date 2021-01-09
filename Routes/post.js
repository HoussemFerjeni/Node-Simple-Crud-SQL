const express = require('express');
const router = express.Router();
const db = require('../config/db');
const uuid = require('uuid');
router.post('/create',(req, res, next) => {
    db.query(
        `INSERT INTO post (id,titre, userid, description) VALUES (
          '${uuid.v4()}', 
        ${db.escape(req.body.titre)},
        ${db.escape(req.body.userid)},
        ${db.escape(req.body.description)})`,
        
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

router.post('/comment',(req, res, next) => {
  db.query(
      `INSERT INTO comment (postid, userid, message) VALUES (

      ${db.escape(req.body.postid)},
      ${db.escape(req.body.userid)},
      ${db.escape(req.body.message)})`,
      
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
      `SELECT * FROM post WHERE id = ${db.escape(req.body.id)};`,
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
    `SELECT * FROM post `,
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
    `DELETE FROM post WHERE id = ${db.escape(req.body.id)};`,
    (err, result) => {
      // user does not exists
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err
        });
      }else{
       res.send({message : "post supprimer"});
      }
});
  });

  router.post('/showbyfreelance',(req, res, next) => {
 
    db.query(
      `SELECT * FROM post WHERE userid = ${db.escape(req.body.userid)};`,
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