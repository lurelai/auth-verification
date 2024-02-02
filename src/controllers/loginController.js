const jwt = require('jsonwebtoken')
const { verify } = require('../services/userService')

require('dotenv').config()

const loginController = async (req, res)=>{
    const { nameOrEmail, password } = req.body
    const info = verify(nameOrEmail, password)

    if(!nameOrEmail || !password)
        return res.send({message: 'bad requestion'})

    if(info.message === 'logged'){
        const authToken = await jwt.sign({nameOrEmail, password}, process.env.SECRET_KEY)
        res.set('Set-cookie', `token=${authToken}; HttpOnly; Secure`)

        return res.redirect('/surprise')
    }

    return res.send(info)
}

module.exports = loginController

