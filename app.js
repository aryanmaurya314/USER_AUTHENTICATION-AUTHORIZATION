const express = require("express");
const app = express();
app.use(express.json());


// import routes //
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");



// use routes //
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);



module.exports = app;
