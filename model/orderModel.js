const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.DB_LINK).then(function () {
    console.log("database is connected");
}).catch(function (err) {
    console.log(err);
})

const orderSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
    },

    orderId: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    }

})

const orderModel = mongoose.model("order", orderSchema);
module.exports = orderModel;