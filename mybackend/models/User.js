var mongoose = require('mongoose');
const Schema = mongoose.Schema
const UserSchema = new Schema({
    name: { type: String, required: true, minlength: 3,unique:true },
    gender: { type: String, required: true, enum: ['M', 'F'] }
});


// eslint-disable-next-line no-undef
module.exports = mongoose.model('users', UserSchema);