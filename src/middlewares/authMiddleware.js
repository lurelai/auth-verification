const authMiddlewares = [
    // verify if there's an token
    (req, res, next)=>{
        next()
    },

    // verify if the token is valid
    (req, res, next)=>{
        next()
    }
]

module.exports = authMiddlewares

