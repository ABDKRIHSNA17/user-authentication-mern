const UserModel = require("../models/User");
const bcrypt = require("bcryptjs");
const {generateToken}  = require("../utils/generateToke")

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


module.exports.loginUser = async (req , res) => {
  try {
    const {email , password} = req.body;
    const user = await UserModel.findOne({email: email});
    if(!user) res.status(404).send({status:false  , message:"Don't have an account "});
    const isMatchPassword = await bcrypt.compare(password, user.password);
    if(!isMatchPassword) {
      return res.status(400).send({status:false  , message:"Incorrect password"});
    }
    else{
      let token = generateToken(user);
      res.cookie("token", token);
      res.status(200).send({status:true  , message:"Login Successful", user});
    }

  }catch(err){
    console.log(`Error comes from /login and error is ${err.message}`);
  }
}

