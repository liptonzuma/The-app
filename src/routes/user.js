const express = require("express");
const jwt = require("jsonwebtoken")
const keys = require("../config/keys")
const { LocalStorage } = require("node-localstorage")
const localstorage = new LocalStorage("/scratch")
const router = express.Router();

router.get("/", verifyToken, (req, res) => {
    jwt.verify(req.token, keys.secret, (err, userData) => {
        if (err) {
            res.sendStatus(403)
        } else {
            const user = userData.user
            res.render("index", {
                default_avatar: "/img/deliveries.svg",
                name: user.username
            });
        }
    })


})

function verifyToken(req, res, next) {
    //Get the auth header value 
    const bearerHeader = req.headers["authorization"]
    console.log(req.headers)
    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ")
        const bearerToken = bearer[1]

        req.token = bearerToken
        next()
    } else {
        res.sendStatus(403)
    }
}


module.exports = router;