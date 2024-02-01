const router = require('express').Router()
const loginController = require('../controllers/loginController')

router.post('/', loginController)

module.exports = app => app.use('/login', router)

