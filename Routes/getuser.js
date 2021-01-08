const express = require('express');
const router = express.Router();

router.post('/getid',(req, res, next) => {
   k = req.body.user.user.id;
    const ide = {
      k
       }
       console.log(k)

res.send(ide);

});







module.exports = router;