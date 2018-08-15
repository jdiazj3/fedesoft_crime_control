var express = require('express');
var router = express.Router();
var agente=require('../models/agente');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource agente');
});


/* POST users listing. */
router.post('/registro', function(req, res, next) {
    agente.create(req.body,(err,agente)=>{
    if(err) {next(err)}
     else{
       var ok={
         id:agente._id
           } 
   
  res.json(agente);
  
}
})
});

/* POST users update. */
router.post('/update', function(req, res, next) {
    agente.update(req.body,(err,agente)=>{
    if(err) {next(err)}
     else{
       var ok={
         id:agente._id
           } 
   
  res.json(agente);
}
})
});
module.exports = router;