const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



// api for register user logic //
const registerUser = async (req, res) => {
    if (req.body.password) {
        req.body.password = bcrypt.hashSync(req.body.password, 8);
    }
    try {
        const user = await User.create(req.body);
        const { password, ...others } = user._doc;

        res.status(201).json(others);
    }
    catch (err) {
        res.status(500).json({
            message: `Some internal error: ${err}`
        })
    }

}

// api for login user logic //
const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        // create access token using jsonwebtoken  //
        const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SEC, { expiresIn: "1h" });
        const { password, ...others } = user._doc;

        res.status(200).json({ ...others, accessToken });
    }
    catch (err) {
        res.status(500).json({
            message: `Some internal error: ${err}`
        })
    }
}



module.exports = { registerUser, loginUser };