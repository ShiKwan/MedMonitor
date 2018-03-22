const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const Patient_listSchema = new Schema({

patient_number: {type: Number, required: true },

    name: { 
        first: { type: String, required: true }, 
        middle: String,
        last: { type: String, required: true } 
        },
    Address: { 
        street1: String, 
        street2: String,
        city: String, 
        state: String, 
        zip: String,
        },    
    email: { type: String, required: true },
    phone: { type: String, required: true },

    dob:  {type: Date, required: true },


});

var Patient_list = mongoose.model("Patient_list", Patient_listSchema);

module.exports = Patient_list;