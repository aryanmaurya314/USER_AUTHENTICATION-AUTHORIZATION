const app = require("./app");
const mongoose = require("mongoose");


// config dotenv file  //
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config();
}

// setup database connection  //
mongoose.connect(process.env.MONGO_URI).then((data) => {
    console.log(`Mongodb connected with server: ${data.connection.host}`);
}).catch((err) => {
    console.log(`Mongodb couldn't connect with server: ${err}`);
})



// setup server  // 
app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})

