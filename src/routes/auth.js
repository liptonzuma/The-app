const express = require("express");
const { MongoClient } = require("mongodb")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const keys = require("../config/keys")
const { LocalStorage } = require("node-localstorage")
const localstorage = new LocalStorage("/scratch")

const router = express.Router();

router.get("/register", (req, res) => {
    res.render("register", {
        "appName": "Fakomano"
    });
})
router.get("/login", (req, res) => {
        res.render('login', {
            appName: "Fakomano"
        })
    })
    //add the item owner to database
router.post("/deliver-for-me", (req, res) => {
        req.body.status = "item-owner"
        const { username, email, phone, password, password_confirm, status } = req.body


        if (password === password_confirm && password !== "") {
            (async function addUser() {

                const hashpassword = await bcrypt.hash(password, 10)
                console.log(hashpassword)
                const user = { username, email, phone, hashpassword, status }
                const url = "mongodb://localhost:27017/fakomano";
                const dbName = "Fakomano"
                let client;
                try {
                    client = await MongoClient.connect(url); // connecting to the database
                    console.log('Connected successfully')

                    // creating the database
                    const db = client.db(dbName)
                        //creating the collection
                    const col = await db.collection('users').insertOne(user)
                    console.log(col)
                    res.redirect('/user')

                } catch (err) {
                    console.log(err)
                }
            }())


        } else {
            res.redirect("/join/register")
        }
    })
    //Adding the Courier to the database
router.post('/register/courier', (req, res) => {
    req.body.status = "courier"
    const { username, email, phone, password, password_confirm, status } = req.body

    if (password === password_confirm && password !== "") {
        (async function addUser() {
            const hashpassword = await bcrypt.hash(password, 10)

            const user = { username, email, phone, hashpassword, status }
            const url = "mongodb://localhost:27017/fakomano";
            const dbName = "Fakomano"
            let client;
            try {
                client = await MongoClient.connect(url); // connecting to the database
                console.log('Connected successfully')

                // creating the database
                const db = client.db(dbName)
                    //creating the collection
                const col = await db.collection('couriers').insertOne(user)
                console.log('user added')
                res.redirect('/user')

            } catch (err) {
                console.log(err)
            }
        }())


    } else {
        res.redirect("/join/register")
    }

})


//Handling login post request for item owner

router.post('/login', (req, res) => {
    const url = "mongodb://localhost:27017"
    const dbName = "Fakomano"
    const { username, password } = req.body;
    (async function findUser() {
        let client;


        try {
            client = await MongoClient.connect(url)
            console.log('Connected successfully')
            const db = await client.db(dbName)
            const col = await db.collection('users')
            const user = await col.findOne({ username })
            const verified = await bcrypt.compare(password, user.hashpassword)
            console.log(verified)
                //will do later
            if (verified) {
                jwt.sign({ user }, keys.secret, (err, token) => {
                    console.log(token)

                    res.redirect('/user')
                })


            }
        } catch (err) {
            console.log(err)
        }
    }())
})


module.exports = router;