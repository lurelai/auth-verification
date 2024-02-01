const { verify } = require('../services/userService')

const loginController = (req, res)=>{
    const { nameOrEmail, password } = req.body

    if(!nameOrEmail || !password)
        return res.send({message: 'bad requestion'})

    const info = verify(nameOrEmail, password)
    return res.send(info)
}

module.exports = loginController

