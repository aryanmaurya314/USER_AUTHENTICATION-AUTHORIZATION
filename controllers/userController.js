const User = require("../models/userModel");
const bcrypt = require("bcryptjs");




// api to delete user logic //
const updateUser = async (req, res) => {
    try {
        if (req.body.password) {
            req.body.password = bcrypt.hashSync(req.body.password, 8);
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        const { password, ...others } = updatedUser._doc;

        res.status(200).json(others);
    } catch (err) {
        console.log(`Some internal error: ${err}`);
    }
}

// api to delete user logic //
const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "User deleted successfully."
        })
    } catch (err) {
        console.log(`Some internal error: ${err}`);
    }
}

// api to get one user logic //
const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        
        const { password, ...others } = user._doc;

        res.status(200).json(others);
    }
    catch (err) {
        console.log(`Some internal error: ${err}`);
    }
}

// api to get all users logic //
const getAllUsers = async (req, res) => {
    try {
        let users;
        if (req.query.new) {
            users = await User.find().sort({ createdAt: -1 }).limit(5);
        }
        else if (req.body.name) {
            users = await User.find({ name: { $regex: req.body.name, $options: "i" } });
        }
        else if (req.body.city) {
            users = await User.find({ "address.city": { $regex: req.body.city, $options: "i" } });
        }
        else {
            users = await User.find().sort({ createdAt: -1 });
        }

        res.status(200).json(users);
    }
    catch (err) {
        console.log(`Some internal error: ${err}`);
    }
}



module.exports = { updateUser, deleteUser, getUser, getAllUsers };