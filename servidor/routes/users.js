var express = require('express');
var router = express.Router();
var Usuario=require('../models/usuario');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource para javi');
});

router.post('/registro',(req,res,next)=>{
  Usuario.create(req.body,(err,usuario)=>{
    if(err){ next(err)}
    else{
      var ok={
        estado:"ok",
        id:usuario._id
      }
      res.json(ok)
    }
  })
});

router.post('/update',(req,res,next)=>{
  Usuario.update(req.body,(err,usuario)=>{
    if(err){ next(err)}
    else{
      var ok={
        estado:"ok",
        id:usuario._id
      }
      res.json(ok)
    }
  })
});

module.exports = router;
