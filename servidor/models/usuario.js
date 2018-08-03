var mongoose = require('mongoose');
var Esquema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var usuario = new Esquema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false},

    primernombre: String,
    segundonombre: String,
    correo: {
        type: String,
        required: false,
        validate: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    admin: {
        type: Boolean,
        default: false
    }
});
usuario.plugin(passportLocalMongoose);
module.exports = mongoose.model('Usuario', usuario);
