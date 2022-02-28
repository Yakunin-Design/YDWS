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

app.get('', (req, res) => { 
    res.render('index')
})

app.listen(port, () => { 
    console.log('Server is running...');
})


