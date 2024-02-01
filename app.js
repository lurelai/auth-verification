const express = require('express')
const path = require('path')
const authMiddlewares = require('./src/middlewares/authMiddleware')

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
require('./src/routes/surpiseRoute')(app)


// default route
app.get('/', authMiddlewares, (req, res)=>{
    return res.sendFile(path.join(__dirname, '/public/views/index.html'))
})


// init server
app.listen(8080, ()=>{
    console.log('server on')
})

