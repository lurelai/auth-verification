const userModel = require('../models/userModel')

const create = (body)=>{
    userModel.create = body; 
    console.log(userModel.getInfo)
}

const verify = (nameOrEmail, password)=>{
    console.log(userModel.verify(nameOrEmail, password))
}

module.exports = { create, verify }

