const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const DoctorSchema = new Schema({

    name: { first: { type: String, required: true }, last: { type: String, required: true } },
    office: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true }

});

var Doctor = mongoose.model("Doctor", DoctorSchema);

module.exports = Doctor;