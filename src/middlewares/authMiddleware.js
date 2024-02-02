const path = require('path')
const jwt = require('jsonwebtoken')

const authMiddlewares = [
    // verify if there's an token
    (req, res, next)=>{
        const cookies = req.headers['cookie'].split('; ')

        for(let i of cookies){
            if(i.includes('token')){
                return next();
            }
        }

        return res.sendFile(path.join(__dirname, '../../public/views/index.html'))
    },

    // verify if the token is valid
    async (req, res, next)=>{
        const cookies = req.headers['cookie'].split('; ')

        for(let i of cookies){
            if(i.includes('token')){
                const token = i.replace('token=', '')

                const verifyResult = await jwt.verify(token, 'secretKey', (err, decoded)=>{
                    if(err)
                        return 'invalid token'

                    return 'token founded'
                })

                if(verifyResult === 'invalid token')
                    return next()

                return res.sendFile(path.join(__dirname, '../../public/views/surprise.html'))
            }
        }

        return next();
    }
]

module.exports = authMiddlewares

