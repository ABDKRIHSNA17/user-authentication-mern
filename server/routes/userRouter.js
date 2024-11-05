const express = require("express");
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require("../controller/userController");
const { signupValidation, loginValidation } = require("../middleware/authValidation");
const ContactModel = require("../models/Contact");  

router.post("/signup", signupValidation, registerUser);
router.post("/login", loginValidation, loginUser);
router.post("/logout", logoutUser);
router.post('/contact', async (req, res) => {
  try {
    console.log(req.body);

    const newContact = new ContactModel({
      company: req.body.company,          
      designation: req.body.designation,  
      message: req.body.message           
    });

    await newContact.save();

    return    res.status(201).json({ message: "Message saved successfully!" });
  } catch (error) {
    console.error("Error saving message:", error);
    return res.status(500).json({ message: "An internal server error occurred." });
  }
});

module.exports = router;
