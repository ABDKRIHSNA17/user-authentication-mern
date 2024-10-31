const UserModel = require("../models/User");
const bcrypt = require("bcryptjs");

module.exports.registerUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser)
      return res.status(200).send({
        status: false,
        message: "User already registered ! Try to Login",
      });
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await UserModel.create({
      userName,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return res.status(400).send({status:true  , message : "Registration Successful"});
  } catch (err) {
    console.log(`Error comes from /register and error is ${err.message}`);
  }
};


