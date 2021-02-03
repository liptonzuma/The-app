const express = require("express");
const jwt = require("jsonwebtoken")
const keys = require("../config/keys")

const router = express.Router();

router.get("/", verifyToken, (req, res) => {

    res.render("index", {
        default_avatar: "/img/deliveries.svg",
    });

})

function verifyToken(req, res, next) {
    const bearerHeader = req.headers
    console.log(bearerHeader)
    next()
}

module.exports = router;