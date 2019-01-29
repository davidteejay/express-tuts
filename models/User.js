const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema({
	name: String,
	username: String,
	password: String,
	dateOfBirth: Date,
	phone: String
})

module.exports = mongoose.model('Users', user)
