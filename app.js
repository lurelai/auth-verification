const express = require('express')
const path = require('path')
const Database = require('./src/database/memoryDatabase')

// Import routes
const app = express()

// uses
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// Statics
app.use('/public', express.static(path.join(__dirname, '/public')))


// set routes
require('./src/routes/registerRoute')(app)
require('./src/routes/loginRoute')(app)

const db = new Database;

// default route
app.get('/', (req, res)=>{
    return res.sendFile(path.join(__dirname, '/public/views/index.html'))
})


// init server
app.listen(8080, ()=>{
    console.log('server on')
})

