const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },

    patient_data: {
        type: Schema.Types.ObjectId,
        ref: "Patient_data"
    },

    doctor: {
        type: Schema.Types.ObjectId,
        ref: "Doctor"
    }

});

var User = mongoose.model("User", UserSchema);

module.exports = User;