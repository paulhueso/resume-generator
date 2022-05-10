const { ObjectId } = require('mongodb');
let mongoose = require('mongoose');

let cvSchema = mongoose.Schema({
    _id: { type: ObjectId },
    titre: String,
    type : Boolean, //false : standard, true : ESN
    experiences : { type : Array, default : []},
    formations : { type : Array, default : []}
})

const Cv = mongoose.model('Cv', cvSchema);

module.exports = Cv;
