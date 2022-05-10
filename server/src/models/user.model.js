let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    firstname: String,
    surname : String,
    address : String,
    mail : String,
    password : String,
    tel : String,
    cv_list : { type : Array, "default" : []}

});

const User = mongoose.model('User', userSchema);

module.exports = User;
