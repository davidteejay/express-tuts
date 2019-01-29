const express = require('express')
const router = express.Router()
const { ObjectID } = require('mongoose').mongo

const User = require('../models/User')

router.get('/', (req, res) => res.send('This is the api. Query is ' + req.query.username))

// router.get('/:username/:email', (req, res) => {
// 	const { username, email } = req.params

// 	res.send(`The username is ${username} and the email is ${email}`)
// })

// router.post('/login', (req, res) => {
// 	const { username, password } = req.body

// 	User.findOne({ username, password }, (err, data) => {
// 		if (err) res.send(err)

// 		if (data === null) res.send('Incorrect Username or Password')
// 		else res.send(data)
// 	})
// })

router.post('/signup', (req, res) => {
	new User({ ...req.body })
		.save()
		.then(() => res.send('Signup Successful'))
		.catch(err => res.send(err))
})

router.get('/users', (req, res) => {
	User.find({ username: 'Chi' }, (err, data) => {
		if (err) res.send(err)

		res.send(data)
	})
})

router.post('/update/:id', (req, res) => {
	const _id = ObjectID(req.params.id)

	User.findByIdAndUpdate({ _id }, { name: 'Chibs' }, (err, data) => {
		if (err) res.send(err)

		data.name = 'Chibs'
		res.send(data)
	})
})

router.post('/delete/:id', (req, res) => {
	const _id = ObjectID(req.params.id)

	User.findByIdAndDelete({ _id }, (err, data) => {
		if (err) res.send(err)

		res.send('Deleted')
	})
})

router.get('/user/:id', (req, res) => {
	const _id = ObjectID(req.params.id)

	User.findOne({ _id }, (err, data) => {
		if (err) res.send(err)

		if (data === null) res.send('User not found')
		else res.send(data)
	})
})

module.exports = router
