const router = require('express').Router()
const registerController = require('../controllers/registerController')

router.post('/', registerController)

module.exports = app => app.use('/register', router)

