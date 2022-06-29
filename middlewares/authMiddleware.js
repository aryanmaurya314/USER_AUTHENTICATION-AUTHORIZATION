const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");


// middleware to check user is valid  //
const isValidUser = async (req, res, next) => {
    try {
        var user = await User.findOne({ username: req.body.username });
    } catch (err) {
        res.status(500).json({
            message: `Some internal error: ${err}`
        })
    }
    if (!user) {
        return res.status(401).json({
            message: "Username or password is incorrect."
        })
    }
    const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Username or password is incorrect."
        })
    }
    next();
}

// middleware to check user is authenticated  //
const isUserAuthenticated = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        return res.status(400).json({
            message: "Please provide access token."
        })
    }

    // verify access token //
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
        if (err) {
            return res.status(401).json({
                message: "Please provide valid access token."
            })
        }

        req.user = user;
        next();
    })
}

// middleware to check user is admin  //
const isUserAdmin = (req, res, next) => {
    isUserAuthenticated(req, res, () => {
        if (req.user.isAdmin) {
            next();
        }
        else {
            return res.status(401).json({
                message: "Authorized to admin user only."
            })
        }
    })
}

// middleware to check user is owner or admin  //
const isOwnerOrAdmin = (req, res, next) => {
    isUserAuthenticated(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        }
        else {
            return res.status(401).json({
                message: "Authorized to admin or owner only."
            })
        }
    })
}

// middleware to check params id  //
const isMongooseIdValid = async (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(401).json({
            message: "Please enter valid id."
        })
    }
    next();
}

// check id is prensent in user resource //
const isUser_idValid = (req, res, next) => {
    isMongooseIdValid(req, res, async () => {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(401).json({
                message: "Please enter valid id."
            })
        }
        next();
    })
}




module.exports = { isValidUser, isUserAuthenticated, isUserAdmin, isOwnerOrAdmin, isMongooseIdValid, isUser_idValid };