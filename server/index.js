const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');
const userRouter = require("./routes/userRouter");

require("./db-connection/db");

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("server is running");
});

app.use("/", userRouter);

app.listen(3000, () => console.log("listening on", 3000));
