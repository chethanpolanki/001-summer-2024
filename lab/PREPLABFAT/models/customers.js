var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = mongoose.model('customers',new Schema({
name: String,
age: Number,
place: String,
}))
