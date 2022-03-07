// npm run dev

const express = require('express')
const hbs = require('hbs')
const path = require('path')

// Difine path for express config
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

const app = express()
const port = process.env.PORT || 6969

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setting up static directory
app.use(express.static(publicDir))

app.get('test/:id', (req, res) => {
    const custom_string = req.params.id
    res.render('index', {cs: custom_string})
})

app.get('/gift', (req, res) => {
    const name = req.query.name

    if ((name == 'Tim') || (name == 'Dmitry')) { 
        return res.render('gift', {username:name})
    }
        
    res.render('404')
})

app.get('/coming-soon', (req, res) => {
    res.render('coming_soon')
})

app.get('/dont-click', (req, res) => {
    res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/search', (req, res) => {
    res.render('search')
})

app.get('*', (req, res) => {
    res.render('404')
})

app.listen(port, () => { 
    console.log('Server is running ' + port)
})
