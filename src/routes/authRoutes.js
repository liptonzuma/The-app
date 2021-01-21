const express = require('express')
const authRoute = express.Router()

authRoute.route('/register').get((req, res) => {
    res.render('register')
})

module.exports = authRoute