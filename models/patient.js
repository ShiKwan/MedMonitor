const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const PatientSchema = new Schema({

    patient: {
        patient: {
            type: Schema.Types.ObjectId,
            ref: "Patient"
        },

        Episode: [{
            episode_id: { type: String, required: true},
            start_date: { type: Date, required: true},
            doctor: {
                type: Schema.Types.ObjectId,
                ref: "Doctor"
            },
            end_date: Date,
            next_appt: Date,
            comments: String,

            medications: [{
                medication: {type: String, required: true},
                dose: String,
                form: String,
                route: String,
            }],

            patient_data: [{
                day: [{
                    time: [{
                        meds_taken: Boolean,
                        // can add more detailed record of medications taken and notes here 
                        symptoms: [{
                            on: { type: Number, notes: String},
                            off: { type: Number, notes: String},
                            tremor: { type: Number, notes: String},
                            dexterity: { type: Number, notes: String},
                            stiffness: { type: Number, notes: String},
                            moving: { type: Number, notes: String},
                            speaking: { type: Number, notes: String},
                            walking: { type: Number, notes: String},
                            balance: { type: Number, notes: String},
                            falls: { type: Number, notes: String},
                            drooling: { type: Number, notes: String},
                            choking: { type: Number, notes: String},
                            nocturnal: { type: Number, notes: String},
                            constipation: { type: Number, notes: String},
                            Mood: { type: Number, notes: String},
                            tired: { type: Number, notes: String}
                        }],

                        side_effects: [{
                            sickness: { type: Number, notes: String},
                            dizziness: { type: Number, notes: String},
                            fainting: { type: Number, notes: String},
                            confusion: { type: Number, notes: String},
                            headaches: { type: Number, notes: String},
                            drymouth: { type: Number, notes: String},
                            urinating: { type: Number, notes: String},
                            indegestion: { type: Number, notes: String}
                        }],

                        comments: String,

                    }],

                }]
                
            }]

        }]

    }

});

var Patient = mongoose.model("Patient", PatientSchema);

module.exports = Patient;