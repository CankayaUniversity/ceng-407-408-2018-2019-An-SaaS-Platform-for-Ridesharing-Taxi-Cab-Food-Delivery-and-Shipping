const express = require('express')
const path = require('path')
const app = express()
// for dynamic pages with templating, this project uses handlebars.js
const hbs = require('hbs')

// specify the port or use a development port
const port = process.env.port || 3000

// define mongoose.js for mongodb connection
require('./db/mongoose')

// define routers for better structuring of the code
const pagesRouter = require('./routers/pages')
const apiRouter = require('./routers/api')

// set view engine as hbs
app.set('view engine', 'hbs')

// define paths for express.js config
const publicDirectoryPath = path.join(__dirname, '/public')

// define partials directory for handlebars.js use
const partialsPath = path.join(__dirname, '/views/partials')
hbs.registerPartials(partialsPath)

// Setup static dir to serve
app.use(express.static(publicDirectoryPath)) 

// Setup json handler with express for json data parsing from request data
app.use(express.json())

// serve pages from routers
app.use(apiRouter)
app.use(pagesRouter)

//specifying the port for the server to listen
app.listen(port, () => {
    console.log('Server is up on port', port);
    
})