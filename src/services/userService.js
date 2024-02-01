const userModel = require('../models/userModel')

const create = (body)=>{
    userModel.create = body; 
    console.log(userModel.getDatabase)
}

module.exports = create;

