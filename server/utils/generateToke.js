const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const token = jwt.sign(
        {userId : user._id , email : user.email} , "jwtSecretKey"
    )
    return token;
}

module.exports.generateToken = generateToken;