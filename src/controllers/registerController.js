const { create } = require('../services/userService')

const registerController = (req, res)=>{
    const { name, email, password } = req.body

    if(!name || !email || !password )
        return res.send({message: 'Bad requestion'})

    create(req.body)
    return res.send({message: 'user created'})
}

module.exports = registerController

