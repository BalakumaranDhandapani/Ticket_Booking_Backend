const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    pic: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    cbfc: {
        required: true,
        type: String
    },
    rating: {
        required: true,
        type: String
    },
    genre: {
        required: true,
        type: String
    },
    language: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('movies', dataSchema);