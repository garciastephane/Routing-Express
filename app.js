const express = require('express')
const app = express()

const users = require ('./users.js')

app.use('/users', users);

app.listen(3000, () => {
	console.log("OK 3000")
})
