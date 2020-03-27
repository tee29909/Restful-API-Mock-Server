var mongoose = require('mongoose');
const Schema = mongoose.Schema
const UserSchema = new Schema({
    name: String,
    gender: String
});


module.exports = mongoose.model('users', UserSchema);