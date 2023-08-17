const express = require('express');
const product = require('../product')

const router = express.Router();

router.get('/',(req,res)=>{

    console.log("hi post")

    res.json(product);

})


module.exports = router;