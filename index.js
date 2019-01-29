const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes/')

const app = express()
const urlencodedBodyParser = bodyParser.urlencoded({
	extended: true
})

app.use(bodyParser.json())
app.use(urlencodedBodyParser)
app.use('/api', routes)

mongoose
	.connect('mongodb://chii:Brain.box8@ds213832.mlab.com:13832/nodeish')
	.then(() => console.log('DB Connected'))
	.catch(err => console.log('DB Error: ' + err))

app.use('/', (req, res) => res.send('Incorrect Route'))

app.listen(process.env.PORT || 8000, () => {
	console.log('Yay!!! App is running because Chibuokem is awesome')
})

module.exports = app
