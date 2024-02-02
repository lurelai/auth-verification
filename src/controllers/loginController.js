const jwt = require('jsonwebtoken')
const { verify } = require('../services/userService')

const loginController = async (req, res)=>{
    const { nameOrEmail, password } = req.body

    if(!nameOrEmail || !password)
        return res.send({message: 'bad requestion'})

    const info = verify(nameOrEmail, password)
    const authToken = await jwt.sign({nameOrEmail, password}, 'secretKey')

    res.set('Set-cookie', `token=${authToken}; HttpOnly; Secure`)
    return res.send(info)
}

module.exports = loginController

