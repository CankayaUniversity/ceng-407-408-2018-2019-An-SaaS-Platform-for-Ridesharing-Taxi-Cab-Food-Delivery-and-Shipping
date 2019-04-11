const express = require('express')
const path = require('path')
//for dynamic pages with templating, this project uses handlebars.js
const hbs = require('hbs')

const app = express()
app.set('view engine', 'hbs')
//define paths for Express.js config
const publicDirectoryPath = path.join(__dirname, '/public')
const partialsPath = path.join(__dirname, '/views/partials')

hbs.registerPartials(partialsPath)
// Setup static dir to serve
app.use(express.static(publicDirectoryPath)) 

//main route
app.get('', (req,res) => {
    res.render('index', {
        title: 'API Mainpage',
        description: 'Some description',
        name: 'Onur Ata Saritas'
    })
})

//about route
app.get('/about', (req,res) => {
    res.render('about', {
        title: 'About Us',
        name: 'Onur Ata Saritas'
    })
})

//help route
app.get('/help', (req,res) => {
    res.render('help', {
        title: 'Help Page',
        description: '',
        name: 'Onur Ata Saritas'
    })
})

//api route
app.get('/docs', (req,res) => {
    res.render('docs', {
        title: 'Documentation',
        description: '',
        name: 'Onur Ata Saritas'
    })
})

// error route
app.get('*', (req, res) => {
    res.render('404', {
        title: 'Sorry! We couldn\'t find that',
        description: 'That page has been removed or no longer exists.',
        name: 'Onur Ata Saritas'

    })
})

//specifying the port for the server to listen
app.listen(3000, () => {
    console.log('Server is up on port 3000');
    
})