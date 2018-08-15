var express = require('express');
var router = express.Router();
var comunitario=require('../models/comunitario');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource comunitario');
});


/* POST users listing. */
router.post('/registro', function(req, res, next) {
    comunitario.create(req.body,(err,comunitario)=>{
    if(err) {next(err)}
     else{
       var ok={
         id:comunitario._id
           } 
   
  res.json(comunitario);
  
}
})
});

/* POST users update. */
router.post('/update', function(req, res, next) {
    comunitario.update(req.body,(err,comunitario)=>{
    if(err) {next(err)}
     else{
       var ok={
         id:comunitario._id
           } 
   
  res.json(comunitario);
}
})
});
module.exports = router;