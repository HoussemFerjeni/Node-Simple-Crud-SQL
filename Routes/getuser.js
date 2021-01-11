const express = require('express');
const router = express.Router();

router.post('/getid', async (req, res) => {
   k =  await req.body.user.user.id;
   console.log(req.body);
    const ide = {
      k
       }
       console.log(k)

await res.send(ide);

});

module.exports = router;