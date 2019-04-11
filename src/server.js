const express = require('express')
const path = require('path')

const app = express()

//include public folder to default route
const publicDirectoryPath = path.join(__dirname, '/public')
console.log(publicDirectoryPath);

//default route of the server
app.use(express.static(publicDirectoryPath)) 


app.get('/api', (req,res) => {
    res.send('API');
})

//specifying the port for the server to listen
app.listen(3000, () => {
    console.log('Server is up on port 3000');
    
})