// npm run dev

const express = require('express')
const res = require('express/lib/response')
const hbs = require('hbs')
const path = require('path')

// Difine path for express config
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

const app = express()
const port = process.env.PORT || 6969
const lang = require('./middleware/check_language')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setting up static directory
app.use(express.static(publicDir))

app.get('/:lang/index', lang, (req, res) => {
    res.render('index', {lang: res.lang})
})

app.get('/gift', (req, res) => {
    const name = req.query.name

    if ((name == 'Tim') || (name == 'Dmitry')) { 
        return res.render('gift', {username:name})
    }
        
    res.render('404')
})

app.get('/:lang/coming-soon', lang, (req, res) => {
    res.render('coming_soon', {lang: res.lang})
})

app.get('/dont-click', (req, res) => {
    res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
})

app.get('/search', (req, res) => {
    res.render('search')
})

app.get('/:lang/*', (req, res) => { 
    res.render('404')
})

app.get('*/:req', (req, res) => {
    res.redirect('/en/' + req.params.req)
})

app.listen(port, () => { 
    console.log('Server is running ' + port)
})
