const jwt = require("jsonwebtoken");

const isLoggedIn = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
      res.redirect("/login");
    return res.status(401).send({ message: "Access denied. Please log in." });
  }
  try {
    const decoded = jwt.verify(token, "jwtSecretKey");
    req.user = decoded; // Store user info in request
    next();
  } catch (error) {
    res.status(400).send({ message: "Invalid token." });
  }
};

module.exports = isLoggedIn;
