const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const Patient_dataSchema = new Schema({

        date_created: Date, 
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at' },
        active: { type: boolean, default: true },

        doctor: {
            type: Schema.Types.ObjectId,
            ref: "Doctor"
        },

        details: {
            patient_number: {type: Number, required: true },
            first_name: { type: String, required: true }, 
            last_name: { type: String, required: true },
            dob:  {type: Date, required: true },
            email: { type: String, required: true },
            phone: { type: String, required: true }
        },            
        
        appointment: {
            next_appt: Date,
            comments: String,
            },

        episode: [{
            timestamps: {createdAt: 'created_at', updatedAt: 'updated_at' },
            episode_id: { type: String, required: true},
            start_date: { type: Date, required: true},
            doctor: String,

            medications: [{
                medication: {type: String, required: true},
                dose: String,
                form: String,
                route: String,
            }],

            record: [{
                date: { type: Date, required: true},
                time: { type: String, required: true},
                meds_taken: Boolean,
                // can add more detailed record of medications taken and notes here if required
                symptoms: [{
                    on: Number,
                    off: Number,
                    tremor: Number,
                    dexterity: Number,
                    stiffness: Number,
                    moving: Number,
                    speaking: Number,
                    walking: Number,
                    balance: Number,
                    drooling: Number,
                    tired: Number,
                }],

                emergencies: [{
                    falls: Number,
                    choking: Number,
                    hallucination: Number,
                }],

                side_effects: [{
                    sickness: Number,
                    dizziness: Number,
                    headaches: Number,
                    drymouth: Number,
                    urinating: Number,
                    indegestion: Number,
                }],

                notes: String,

            }],

        }]              

});

var Patient_data = mongoose.model("Patient_data", Patient_dataSchema);

module.exports = Patient_data;