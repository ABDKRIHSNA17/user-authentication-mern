const express = require("express");
const router = express.Router();
const { registerUser, loginUser , logoutUser   } = require("../controller/userController");
const {signupValidation , loginValidation} = require("../middleware/authValidation");

router.post("/signup", signupValidation,  registerUser);
router.post("/login", loginValidation,  loginUser);
router.post("/logout" , logoutUser);


module.exports = router;
