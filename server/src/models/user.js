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
                },
                {
                    'school' : String,
                    'name' : String,
                    'from' : String,
                    'to' : String,
                    'description' : String
                }
            ]
        }
    ]
});

let User = module.exports = mongoose.model('User', userSchema);

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}