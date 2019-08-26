const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phonenr: {
        type: String
    },
    plc_datebirth: {
        type: String
    },
    gender: {
        type: String
    },
    street_nr: {
        type: String
    },
    postcode: {
        type: String
    },
    city: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})



module.exports = User = mongoose.model('users', UserSchema)