let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    'firstname': String,
    'surname' : String,
    'address' : String,
    'mail' : String,
    'password' : String,
    'tel' : String,
    'cv_list' : [
        { 
            'titre': String,
            'type' : Boolean, //0 : standard, 1 : ESN
            'experiences' : [
                {
                    'organization' : String,
                    'title' : String,
                    'from' : String,
                    'to' : String,
                    'description' : String
                }
            ],
            'formations' : [
                {
                    'school' : String,
                    'name' : String,
                    'from' : String,
                    'to' : String,
                    'description' : String
                }
            ]
        }
    ],
    session: any
});

module.exports = mongoose.model('User', userSchema);
