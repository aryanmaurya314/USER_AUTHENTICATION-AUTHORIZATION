const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        uppercase: true,
        required: [true, "Please enter name."]
    },
    username: {
        type: String,
        unique: true,
        trim: true,
        required: [true, "Please enter username."],
        match: [/^[a-zA-Z0-9]+$/, 'Username contains alphabets and numbers only.']
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please enter email."],
        match: [/\S+@\S+\.\S+/, 'Please enter valid email.'],
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Please enter password."]
    },
    age: {
        type: Number,
        required: [true, "Please enter age."]
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    address: {
        city: {
            type: String,
            uppercase: true
        },
        pincode: {
            type: Number
        }
    }

}, { timestamps: true });



userSchema.plugin(uniqueValidator, { message: "already taken." });
module.exports = mongoose.model("User", userSchema);