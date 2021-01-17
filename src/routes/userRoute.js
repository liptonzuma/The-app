const express = require('express')
const userRouter = express.Router()

userRouter.route('/').get((req, res) => {
    res.render('index', {
        default_avatar: '/img/deliveries.svg'

    })
})

module.exports = userRouter