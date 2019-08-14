const express = require('express');
const router = express.Router();


//Sending to FRONT =>>

//@route  GET api/profile 
//@desc   Test route
//acess   Public
router.get('/', (req, res)=> res.send('Profile route'));

module.exports = router