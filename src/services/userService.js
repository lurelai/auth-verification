const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

const create = (body)=>{
    userModel.create = body; 
    console.log(userModel.getInfo)
}

const verify = (nameOrEmail, password)=>{
    return userModel.verify(nameOrEmail, password)
}

module.exports = { create, verify }

