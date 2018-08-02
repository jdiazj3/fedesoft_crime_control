var express = require('express');
var router = express.Router();
var Usuario=require('../models/usuario');
var passport = require('passport');
var authenticate= require('../authenticate')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource para javigit add .');
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

<<<<<<< HEAD
router.post('/signup', (req, res, next) => {
  console.log(req.body)
  Usuario.register(new Usuario({username: req.body.username}), 
    req.body.password, (err, Usuario) => {
    if(err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    }
    else {
      passport.authenticate('local')(req, res, () => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true, status: 'Registration Successful!'});
      });
    }
  });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  console.log(req.body)
  console.log(req.user)
  var token= authenticate.getToken({_id:req.user._id})
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({success: true,token:token ,status: 'You are successfully logged in!'});
});
=======
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

>>>>>>> 10a17d1f0af44455da61d56263a64b41d7a0f008
module.exports = router;
