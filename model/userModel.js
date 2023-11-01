const mongoose = require("mongoose");
require('dotenv').config();
const validator = require("email-validator");

mongoose.connect(process.env.DB_LINK).then(function () {
    console.log("database is connected");
}).catch(function (err) {
    console.log(err);
})

const userSchema = new mongoose.Schema({
    userImage: String,

    name: {
        type: String,
        min: 4,
    },
    email: {
        type: String,
        // validate: function () {
        //     return validator.validate(this.email);
        // }
    },
    password: {
        type: String,
        min: 8
    },
    confirmPassword: {
        type: String,
        min: 8,
        validate: function () {
            return this.confirmPassword == this.password;
        }
    },
    token: String,

    cart: {
        type: [mongoose.Schema.ObjectId],
        ref: "foodModel",
    }

})

const userModel = mongoose.model("userModel", userSchema);
module.exports = userModel;