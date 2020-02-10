const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let userShema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
  }
}, {
  collection: 'users'
});

userShema.plugin(uniqueValidator, { message: 'Email déjà utilisé.' });
module.exports = mongoose.model('User', userShema)