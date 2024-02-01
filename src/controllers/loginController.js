const { verify } = require('../services/userService')

const loginController = (req, res)=>{
    const { nameOrEmail, password } = req.body

    if(!nameOrEmail || !password)
        return res.send({message: 'bad requestion'})

    verify(nameOrEmail, password)
    return res.send({massage: 'okay'})
}

module.exports = loginController

