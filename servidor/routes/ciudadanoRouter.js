var express = require('express');
var router = express.Router();
var ciudadano=require('../models/ciudadno');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* POST users listing. */
router.post('/registro', function(req, res, next) {
  ciudadano.create(req.body,(err,ciudadano)=>{
    if(err) {next(err)}
     else{
       var ok={
         id:ciudadano._id
           } 
   
  res.json(ciudadano);
}
})
});

module.exports = router;