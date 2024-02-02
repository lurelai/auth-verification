const jwt = require('jsonwebtoken')
const { create } = require('../services/userService')

// set dotenv
require('dotenv').config()

const registerController = (req, res)=>{
    const { name, email, password } = req.body

    if(!name || !email || !password )
        return res.send({message: 'Bad requestion'})

    // if okay
    const token = jwt.sign({nameOrEmail: name, password}, process.env.SECRET_KEY)
    res.set('Set-cookie', `token=${token}; HttpOnly; Secure`)

    create(req.body)

    return res.redirect('/surprise')
}

module.exports = registerController

