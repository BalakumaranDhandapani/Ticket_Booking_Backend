const mongoose = require("mongoose");

const profileDataSchema = new mongoose.Schema({
    Movie_Name: {
        required: true,
        type: String
    },
    Movie_Date: {
        required: true,
        type: String
    },
    Price_Per_Ticket: {
        required: false,
        type: Number
    },
    Tickets: {
        required: true,
        type: Number
    },
    Total_Amount: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('profile', profileDataSchema);