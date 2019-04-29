// CRUD operations

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'api-database'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database.');
    }
    
    const db = client.db(databaseName)

    db.collection('users').insertOne({
        username: 'onurata',
        userType: 'Passenger'
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user');
        }
        console.log(result.ops);
        
    })
})