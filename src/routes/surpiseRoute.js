const router = require('express').Router()
const surpriseController = require('../controllers/surpriseController')

router.get('/', surpriseController)

module.exports = app => app.use('/surprise', router)

