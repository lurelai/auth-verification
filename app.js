const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.send('Okay')
})

app.listen(8080, ()=>{
    console.log('server on')
})

