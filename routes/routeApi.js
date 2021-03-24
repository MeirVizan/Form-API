var express = require('express');
var router = express.Router();
var jsonCountry = require('../countries.json');


router.post('/create', (req, res, next) => {    
    var obj = req.body
    if(obj.firstname && obj.lastname && obj.country && obj.email && obj.phone){
        res.send({status:200});
    }
})

router.get('/getCountry', (req, res, next) => {   
    res.send(jsonCountry.countries)
})


module.exports = router;