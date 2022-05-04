let express = require('express');
let api = express.Router();

let User = require('../models/user');

api.post('/api/users/:id', function(req, res){
    res.send(req.params.id);
    //If authenticated res.redirect('/homepage');
});

module.exports = api;