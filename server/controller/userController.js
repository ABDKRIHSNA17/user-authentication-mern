const UserModel = require("../models/User");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/generateToke");
const ContactModel = require("../models/Contact")


module.exports.registerUser = async (req, res) => {
  
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      return res.status(400).send({ message: "All fields are required." });
    }
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser)
      return res.status(500).send({
        status: false,
        message: "User already registered ! Try to Login",
      });
    else {
      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = await UserModel.create({
        userName,
        email,
        password: hashedPassword,
      });

      await newUser.save();
      return res
        .status(200)
        .send({ status: true, message: "Registration Successful" });
    }
  } catch (err) {
    console.log(`Error comes from /register and error is ${err.message}`);
    return res.send({ status: false, message: "Registration Failed" });
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (!user)
      res
        .status(400)
        .send({ status: false, message: "Don't have an account " });
    const isMatchPassword = await bcrypt.compare(password, user.password);
    if (!isMatchPassword) {
      return res
        .status(400)
        .send({ status: false, message: "Incorrect password" });
    } else {
      let token = generateToken(user);
      res.cookie("token", token);
      res.status(200).send({ status: true, message: "Login Successful", user });
    }
  } catch (err) {
    console.log(`Error comes from /login and error is ${err.message}`);
  }
};

module.exports.logoutUser = async (req, res) => {
  res.clearCookie("token"); 
  res.status(200).send({ status: true, message: "Logout Successful" });
};

// module.exports.hiredMe = async (req , res) => {
//   try {
//     const {companyName , email , message} = req.body;
//     const newCompany = await ContactModel.findOne({ companyName})
    
//     if(newCompany) {
//       const newMessage = await ContactModel.create({ email , companyName , message });
//       await newMessage.save();
//       return res.status(400).send({ status: true, message: "I already get mail from your comapny ! I will connect with you" });
//     }
//     const newMessage = await ContactModel.create({ email , companyName , message });
//       await newMessage.save();
//       res.status(200).send({status : true , message:"I will connect with you shortly"})
//   }
//   catch(err) {
//     console.log(`Error comes from /hiredMe and error is ${err.message}`);
//     return res.status(500).send({ status: false, message: "Error while hiring you" });
//   }
// }
