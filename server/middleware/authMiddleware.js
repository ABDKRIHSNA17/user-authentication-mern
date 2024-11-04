const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1]; 
    
    if (!token) {
        return res.status(401).send({ status:false ,  message: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, "jwtSecretKey");
        req.userId = decoded.userId; 
        next();
    } catch (error) {
        return res.status(403).send({ status:false , message: "Invalid token" });
    }
};

module.exports = authMiddleware;
