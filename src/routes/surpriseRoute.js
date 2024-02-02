const router = require('express').Router()
const authMiddleware = require('../middlewares/authMiddleware')

const surpriseController = require('../controllers/surpriseController')

router.get('/', authMiddleware, surpriseController)

module.exports = app => app.use('/surprise', router)

