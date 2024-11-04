const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.cookies.token; 
    if (!token) {
        return res.redirect("/login");
    }

    try {
        const decoded = jwt.verify(token, "jwtSecretKey");
        req.userId = decoded.id; 
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid token." });
    }
};

module.exports = verifyToken;
