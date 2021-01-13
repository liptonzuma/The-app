const express = require('express');
const path = require('path')
const app = express();
const port = process.env.PORT || 3000


//All use statements goes here
app.use(express.static(path.join(__dirname, '/public/')))
app.use('/css', express.static(path.join(__dirname, '/node_modules/font-awesome/css/')))
app.use('/css', express.static(path.join(__dirname, '/public/css/')))
app.use('/js', express.static(path.join(__dirname, '/public/js/')))
app.use('/img', express.static(path.join(__dirname, '/public/img/')))

//All set statements goes here
app.set('view engine', 'ejs')
app.set('views', './src/views')

//All Routes statements goes here
app.get('/', (req, res) => {
    res.render('index', {
        title: 'App'
    })
})

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})