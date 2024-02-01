const loginController = (req, res)=>{
    const { nameOrEmail, password } = req.body

    if(!nameOrEmail || !password)
        return res.send({message: 'bad requestion'})

    res.send({massage: 'okay'})
}

module.exports = loginController

