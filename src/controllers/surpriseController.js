const path = require('path')

const surpriseController = (req, res)=>{
    res.sendFile(path.join(__dirname, '../../public/views/surprise.html'))
}

module.exports = surpriseController

