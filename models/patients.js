const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const PatientsSchema = new Schema({

    patient_number: Number,

    name: { 
        first: { type: String, required: true }, 
        last: { type: String, required: true } 
        },
    Address: { 
        street1: { type: String, required: true }, 
        street2: { type: String, required: true }, 
        city: { type: String, required: true }, 
        state: { type: String, required: true }, 
        zip: { type: String, required: true },
        },    
    email: { type: String, required: true },
    phone: { type: String, required: true },

    dob:  {type: Date, required: true },


});

var Doctor = mongoose.model("Doctor", DoctorSchema);

module.exports = Doctor;