const express = require('express')
const authRoute = express.Router()

authRoute.route('/register').get((req, res) => {
    res.render('register', {
        "appName": "Fakomano"
    })
})

module.exports = authRoute