var mongoose = require('mongoose');
var esquema = mongoose.Schema;
var comunitario = new esquema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    primernombre: String,
    segundonombre: String,
    primerApellido: String,
    segundoApellido: String,
    direccion: String,
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    }, 

});
module.exports = mongoose.model('comunitario', comunitario);