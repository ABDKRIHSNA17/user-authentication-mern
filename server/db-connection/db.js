const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://only4abdkrishna:sXjtFTUS8TcihKRI@mern-app.qsdcc.mongodb.net/"
  )
  .then(() => console.log("Connected to MongoDB Atlas!"))
  .catch((err) => console.error("MongoDB connection error:", err.message));
