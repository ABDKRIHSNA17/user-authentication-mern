const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/dont-know")
  .then(() => console.log("connection sucessfull with database "))
  .catch((err) => console.log("database connection error ", err.message));
