const express = require('express');
const bodyParser = require('body-parser');
var authenticate = require('../authenticate');
const estudianteRouter = express.Router();
var Estudiante = require('../models/estudiante');
estudianteRouter.use(bodyParser.json());

estudianteRouter.route('/')
    .get((req, res, next) => {
        Estudiante.find({})
            .populate('conmentarios.author')
            .then((estudiantes) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(estudiantes);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post(authenticate.verifyUser, (req, res, next) => {
        Estudiante.create(req.body)
            .then((estudiante) => {
            res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.json({ id: estudiante._id });
            })

            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('el metodo PUT no es soportado en  /estudiantes');
    })
    .delete((req, res, next) => {
        res.end('Eliminando todos los estudiantes');
    });

estudianteRouter.route('/:estudiantesId')
    .get(authenticate.verifyUser,(req, res, next) => {
        Estudiante.findById(req.params.estudiantesId)
            .populate('conmentarios.author')
            .then((estudiantes) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(estudiantes);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

estudianteRouter.route('/:estudiantesId/comments')
    .get(authenticate.verifyUser,(req, res, next) => {
        console.log("----S")
        Estudiante.findById(req.params.estudiantesId)
            .populate('conmentarios.author')
            .then((estudiantes) => {
                if (estudiantes != null) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(estudiantes);
                }
                else {
                    err = new Error('Lo siento :(  ' + req.params.estudiantesId + ' NO existe');
                    err.status = 404;
                    return next(err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post(authenticate.verifyUser, (req, res, next) => {
        console.log("---->>>")
        Estudiante.findById(req.params.estudiantesId)
            .then((estudiantes) => {
                console.log("----><>")
                if (estudiantes != null) {
                    console.log(estudiantes);
                    req.body.author = req.user._id;
                    console.log(req.body);
                    estudiantes.conmentarios.push(req.body);
                    estudiantes.save()
                        .then((estudiantes) => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(estudiantes);
                        }, (err) => next(err));
                }
                else {
                    err = new Error('Lo siento :( ' + req.params.estudiantesId + ' no existe');
                    err.status = 404;
                    return next(err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    })

estudianteRouter.route('/:estudiantesId/comments/:commentId')
    .get((req, res, next) => {
        estudiantes.findById(req.params.estudiantesId)
            .populate('comments.author')
            .then((estudiantes) => {
                if (estudiantes != null && estudiantes.comments.id(req.params.commentId) != null) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(estudiantes.comments.id(req.params.commentId));
                }
                else if (estudiantes == null) {
                    err = new Error('Lo siento :( este estudiantes  ' + req.params.estudiantesId + ' no existe');
                    err.status = 404;
                    return next(err);
                }
                else {
                    err = new Error('Lo siento :( no hay comentarios con id:  ' + req.params.commentId + ' ');
                    err.status = 404;
                    return next(err);
                }
            }, (err) => next(err))
            .catch((err) => next(err));
    })

module.exports = estudianteRouter;