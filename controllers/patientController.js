const db = require("../models");

// Methods for Medication collection controller (using Medication model from medication.js)


module.exports = {

    // Fetch personal details of all patients in Patient_data collection (to populate listmenu for doctor use)
    // include their doctor (populate)
    // Returns json list of patients details only (sorted alphabeltically by last_name)

    findAll: function(req, res) {
        db.Patient_data
        .find( {}, {details: 1} )
        .populate("doctor")
        .sort( {"details.last_name": 1} )
        .then(doctorList=> res.json(doctorList))
        .catch(err => {
            console.log('CONTROLLER ERROR: ${err}');
            res.status(422).json(err);
            })
    },   

    // NOTE CAN ADD MORE FETCH ROUTES SORTED IN DIFFERENT WAYS SO DOCTOR CAN SELECT HOW TO FIND PATIENT
    // EG. SORTED BY DATE LAST SEEN, SORTED BY PATIENT EMERGENCIES, SORTED BY NEXT APPT DATE ETC, ETC


    // Fetch patient data by id (for doctor use)
    // To be sent req.params.id with _id of patient to be fetched
    // Returns json of patient data 
    findByIdForAdmin: function(req, res) {
        db.Patient_data
        .findById(req.params.id)
        .populate("doctor")
        .then(patient => res.json(patient))
        .catch(err => {
            console.log('CONTROLLER ERROR: ${err}');
            res.status(422).json(err);
        })
    },


    // Fetch patient details (for patient use)
    // To be sent req.params.id of patient
    // return json of appointment & details field as well as their  doctor details (via a populate)
    findByIdForPatient: function(req, res) {
        db.Patient_data
        .findById(req.params.id, {appointment: 1, details: 1})
        .populate("doctor")
        .then(patient => res.json(patient))
        .catch(err => {
            console.log('CONTROLLER ERROR: ${err}');
            res.status(422).json(err);
        })
    },

    // Fetch episode medication details (for patient use)
    // To be sent req.params.id of patient
    // return json of medications
    patientMeds: function(req, res) {
        db.Patient_data
        .findById(req.params.id, {"episode.medications": 1})
        .populate("doctor")
        .then(patient => res.json(patient))
        .catch(err => {
            console.log('CONTROLLER ERROR: ${err}');
            res.status(422).json(err);
        })
    },



    // Add new episode (for doctor use)
    // To be sent req.params.id with _id of patient and req.body with new episode object {see model}
    // $push pushes new element (in this case a episode object) into array (episode array)
    // Returns ?
    updateEpisode: function(req, res) {
        console.log("req :" + req.params.id + "|" + req.body.time)
        db.Patient_data
            .findOneAndUpdate(
                { _id: req.params.id },
                { $push: {episode: req.body} }
            )
            .then(episode => res.json(episode))
            .catch(err => {
                console.log('CONTROLLER ERROR: ${err}');
                res.status(422).json(err);
            })
    },


    // Add new record to episode (for patient use)
    // To be sent req.params.id with _id of patient and req.body with new record object {see model}
    // Note application frontend will need to deal with setting date and time of the record
    // $push pushes new element (in this case a record object) into array (episode.record array)
    // Returns ?
    // updateRecord: function(req, res) {
    //     db.Patient_data
    //         .findOneAndUpdate(
    //             { _id: req.params.id },
    //             { "episode.$.record": {$push: req.body} } 
    //         )
    //         .then(record => res.json(record))
    //         .catch(err => {
    //             console.log('CONTROLLER ERROR: ${err}');
    //             res.status(422).json(err);
    //         })
    // },

    addRecord: function(req,res) {
        db.Patient_data
            .findOne({
                _id: req.params.id}, {"episode": 1}
            )
            .then(result => {
                    let lastEpisode = result.episode[result.episode.length-1]
                    let rec = lastEpisode.record;
                        //console.log(rec);
                    rec.push(req.body);
                        //console.log(rec);
                    lastEpisode.record = rec;
                        //console.log(lastEpisode)

                     db.Patient_data
                     .findOneAndUpdate(
                        { _id: req.params.id},
                        { $pop: {"episode": 1} } 
                    )
                    .then(result => 

                        db.Patient_data
                        .findOneAndUpdate(
                            { _id: req.params.id },
                            { $push: {"episode": lastEpisode} }
                        )
                        .then(result => res.json(result))
                    )
            })
            .catch(err => {
                console.log('CONTROLLER ERROR: ${err}');
                res.status(422).json(err);
            })
    },  
 //console.log(req.params.id + "|" + lastEpisode)

    // Update patient email or phone number (other details are generally immutable) (for doctor or patient use)
    // To be sent req.params.id of patient to be updated and req.body with patint email and phone
    // returns ?
    updateContact: function(req, res) {
        db.Patient_data
            .findOneAndUpdate(
                { _id: req.params.id },
                { $set: {"details.email": req.body.email} },
                { $set: {"details.phone": req.body.phone} }
            )
            .then(episode => res.json(episode))
            .catch(err => {
                console.log('CONTROLLER ERROR: ${err}');
                res.status(422).json(err);
            })
    },


    // Make patient inactive (i.e. if patient leaves programme but want to delete their data) (doctor use only)
    // To be sent req.params.id of patient to be made inactive
    // returns ?
    updateInactivate: function(req, res) {
        db.Patient_data
            .findOneAndUpdate(
                { _id: req.params.id },
                { $set: {active: false} }
            )
            .then(episode => res.json(episode))
            .catch(err => {
                console.log('CONTROLLER ERROR: ${err}');
                res.status(422).json(err);
            })
    },


    // Update next appointment
    // To be sent req.params.id of patient to be updated and req.body with patient appointment details (for doctor use)
    // returns ?
    updateAppointment: function(req, res) {
        db.Patient_data
            .findOneAndUpdate(
                { _id: req.params.id },
                { $set: {"appointment": req.body} }
            )
            .then(episode => res.json(episode))
            .catch(err => {
                console.log('CONTROLLER ERROR: ${err}');
                res.status(422).json(err);
            })
    },

};