const jwt = require('jsonwebtoken')

const generateToken = (id,role) =>{
    console.log('env',process.env.JWT_SECRET);
    
    return jwt.sign({id,role},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
}

module.exports = generateToken;