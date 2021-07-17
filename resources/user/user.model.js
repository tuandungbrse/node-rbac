const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'basic',
    enum: ['basic', 'supervisor', 'admin'],
  },
  accessToken: {
    type: String,
  },
})

module.exports = mongoose.model('user', User)
