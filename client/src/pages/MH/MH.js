import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import medicationAPI from "../../utils/medicationAPI";
import doctorAPI from "../../utils/doctorAPI";
import patientAPI from "../../utils/patientAPI";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import moment from "moment";



class Books extends Component {
    state = {
    id: "5abbfd955d44324ef49b1bc8", // test id only

    patient: {},
    patientDetails: [],
    patientAppt: [],
    patientEpisodes: [],

    patientLastEpisode: [],
    patientLastEpisodeStart: "",
    patientLastEpisodeMeds: [],

    patientLastEpisodeRecords: [],
    patientLastEpisodeNumRecords: 0,

    };

    componentDidMount() {
        this.loadAllDoctors();
    }


    // -----------------------
    // Medications route tests
    // -----------------------

    // load all drugs
    loadAllDrugs = () => {
        medicationAPI.findAll({})
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    // add a new drug
    addNewDrug = event => {
        event.preventDefault();
        medicationAPI.newDrug({
            name: "Sinemet",
            type: "dopamine agonist",
            doses: {
                dose: "10/150mg",
                form: "tablet",
                route: "oral"
            }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    // delete a drug
    deleteDrug = event => {
        event.preventDefault();
        medicationAPI.deleteMedication(this.state.id)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    // add new dose to existing medication
    addNewDose = event => {
        event.preventDefault();
        medicationAPI.newDose(this.state.id, {
            dose: "100/10mg",
            form: "tablet",
            route: "oral"
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));

    };

    // delete a dose from existing medication
    // note dose object must exactly match the dose object to be deleted fromt the document
    deleteDose = event => {
        event.preventDefault();
        medicationAPI.deleteDose(this.state.id, {
            dose: "100/10mg",
            form: "tablet",
            route: "oral"
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };


    // --------------------
    // Doctor routes tests
    // --------------------

    // load all doctors
    loadAllDoctors = () => {
        doctorAPI.findAll({})
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    // find doctor by id
    findDoctor = event => {
        event.preventDefault();
        doctorAPI.findOne(this.state.id)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    // Delete doctor by id
    deleteDoctor = event => {
        event.preventDefault();
        doctorAPI.remove(this.state.id)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    // add a new doctor
    addNewDoctor = event => {
        event.preventDefault();
        doctorAPI.create({
            name: {
                first: "Peter",
                last: "Willis",
            },
            office: "Clevealnd Clinic, Downtown plaza 1",
            email: "peter@thegreat.com",
            phone: "254-456-8254"
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    // update a doctors details 
    updateDoctor = event => {
        event.preventDefault();
        doctorAPI.update(this.state.id, {
            name: {
                first: "General",
                last: "Mo",
            },
            office: "UH, Downtown  1",
            email: "Mo@mo.com",
            phone: "254-456-11111"
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };


    // ------------------------
    // Patient_data route tests
    // ------------------------


    // load personal details of all patients (alphabetical by last name) ^^
    loadAllPatients = () => {
        patientAPI.findAll({})
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    // find patient data by id for Admin ^^
    // findPatientInfoForAdmin = event => {
    //     event.preventDefault();
    //     patientAPI.findPatientInfoForAdmin(this.state.id)
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err));
    // };

    // find patient data by id for Patient use ^^
    findPatientInfoForPatient = event => {
        event.preventDefault();
        patientAPI.findPatientInfoForPatient(this.state.id)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    // fetch patient medications ^^
    findPatientMeds = event => {
        event.preventDefault();
        patientAPI.findPatientMeds(this.state.id)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    // make patient inactive (leaves care of doctor) ^^
    recordPatientInactive = event => {
        event.preventDefault();
        patientAPI.inactivatePatient(this.state.id)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    // update patient details (email and phone) ^^
    updatePatientContactDetails = event => {
        event.preventDefault();
        patientAPI.updateContact(this.state.id, {
            email: "patientemail@patient.com",
            phone: "123-456-7890"
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    // update next appointment
    updatePatientAppointment = event => {
        event.preventDefault();
        patientAPI.updateAppointment(this.state.id, {
            next_appt: Date(),
            comments: "dont be late"
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    // create a new patient record with data entered by patient
    createNewRecord = event => {
        event.preventDefault();
        patientAPI.createNewRecord(this.state.id, {

            date_time: Date,
            meds_taken: Boolean,
            // can add more detailed record of medications taken and notes here if required 
            
            emergencies: {
                falls: Boolean,
                freezing: Boolean,
                choking: Boolean,
                hallucination: Boolean,
            },

            symptoms: {
                kickin: Number,
                wearoff: Number,
                movement: Number,
                sleepy: Number,
                offtime: Number,
                tremor: Number,
                walking: Number,
                balance: Number,
            },

            side_effects: {
                sickness: Number,
                dizziness: Number,
                headaches: Number,
                drymouth: Number,
            },

            notes: String,
        })

            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    // create a new episode by doctor
    createNewEpisode = event => {
        event.preventDefault();
        patientAPI.createNewEpisode(this.state.id, {

            episode_id: "001",
            start_date: Date(),
            doctor: "my doctor",

            medications: [{
                medication: "Sinemet",
                dose: "100mg/10mg",
                form: "tablet",
                route: "oral",
                times: ["0800", "1600", "2000"]
            }],

            record: [{
                date_time: Date,
            meds_taken: Boolean,
            // can add more detailed record of medications taken and notes here if required 
            
            emergencies: {
                falls: Boolean,
                freezing: Boolean,
                choking: Boolean,
                hallucination: Boolean,
            },

            symptoms: {
                kickin: Number,
                wearoff: Number,
                movement: Number,
                sleepy: Number,
                offtime: Number,
                tremor: Number,
                walking: Number,
                balance: Number,
            },

            side_effects: {
                sickness: Number,
                dizziness: Number,
                headaches: Number,
                drymouth: Number,
            },

            notes: String,

            }],

        })

            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    // add a new patient
    addNewPatient = event => {
        event.preventDefault();
        patientAPI.createNewPatient ({

            date_created: Date(),
            active: true,
            //doctor: to be populated with _id from doctors collection,

            details: {
                patient_number: "hosp0017",
                first_name: "Billy", 
                last_name: "Thekid",
                dob:  "02/30/1965",
                email: "billytk@what.com",
                phone: "258-562-8765",
            },            
            
            appointment: {
                next_appt: Date(),
                comments: "next appt fixed",
                },

            episode: [{
                episode_id: "000",
                start_date: Date(),
                doctor: "my doctor",

                medications: [{
                    medication: "tbc",
                }],

                record: [{
                    date: Date(),
                    time: "1200",
                    meds_taken: true,
                    // can add more detailed record of medications taken and notes here if required
                }],

            }],
            // timestamps: {'created_at', 'updated_at' }
        })

        .then(res => console.log(res))
        .catch(err => console.log(err));
    };    
    
    
    // Form handlers
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
        [name]: value
        });
        console.log(event.target.value);
    };





    // find patient data by id for Admin ^^
    // findPatientInfoForAdmin = event => {
    //     event.preventDefault();
    //     patientAPI.findPatientInfoForAdmin("5ac7ae215a77e145a4d86145")
    //         .then(res => {

    //             this.setState({patient: res.data});
    //             this.setState({patientDetails: this.state.patient.details})
    //             this.setState({patientAppt: this.state.patient.appointment})
    //             this.setState({patientEpisodes: this.state.patient.episode})

    //             this.setState({patientLastEpisode: this.state.patientEpisodes[this.state.patientEpisodes.length-1] })
    //             this.setState({patientLastEpisodeStart: this.state.patientLastEpisode.start_date})
    //             this.setState({patientLastEpisodeMeds: this.state.patientLastEpisode.medications})

    //             this.setState({patientLastEpisodeRecords: this.state.patientLastEpisode.record})
    //             this.setState({patientLastEpisodeNumRecords: this.state.patientLastEpisodeRecords.length})

    //             let record = [];
    //             let currentRecordDate = "";
    //             let previousRecordDate = "";
    //             let recordTime = "";

    //             let kickin = [][]; //2d array
    //             let wearoff = [][]; 
    //             let movement = [][];
    //             let sleepy = [][];
    //             let offftime = [][];
    //             let tremor = [][];
    //             let walking = [][];
    //             let balance = [][];
    //             let sickness = [][];
    //             let dizziness = [][];
    //             let headache = [][];
    //             let drymouth = [][];
    //             TimePoint = [];

    //             let i=0, j=1, k=0;

                
                
    //             for (i=0; i<this.state.patientLastEpisodeNumRecords; i++) {
                    
    //                 record = this.state.patientLastEpisodeRecords[i];
    //                 currentRecordDate = moment(record.date_time).format().slice(0,10);
                    
    //                if (!i && currentRecordDate == previousRecordDate) {j++;} else {j=1;}

    //                     let recordTime = moment(record.date_time).format().slice(12,16);

    //                     timePoint[j] = recordTime;

    //                     kickin[j].push(record.symptoms.kickin);
    //                     wearoff[j].push(record.symptoms.wearoff);
    //                     movement[j].push(record.symptoms.movement);
    //                     sleepy[j].push(record.symptoms.sleepy);
    //                     offtime[j].push(record.symptoms.offtime);
    //                     tremor[j].push(record.symptoms.tremor);
    //                     walking[j].push(record.symptoms.walking;
    //                     balance[j].push(record.symptoms.balance);

    //                     sickness[j].push(record.symptoms.sickness);
    //                     dizziness[j].push(record.symptoms.dizziness);
    //                     headache[j].push(record.symptoms.headache);
    //                     drymouth[j].push(record.symptoms.drymouth);
                            

    //                     previousRecordDate = currentRecordDate;
    //             }

                // next step to average all values in each [j] array

                // then assemble an object from times and vaklues for graphing

            
            
            // })
            // .catch(err => console.log(err));
    //};

    



    // ------
    // Render
    // ------

    render() {
        return (

            <Container>
                <Form>
                    <br />
                    <Button onClick={this.findPatientInfoForAdmin}>loadall</Button>
                    {/* <Button onClick={this.createNewRecord}>record</Button>
                    <Button onClick={this.createNewEpisode}>episode</Button>
                    <Button onClick={this.addNewPatient}>add pt</Button>
                    <Button onClick={this.recordPatientInactive}>findOne</Button> */}


                </Form>

            </Container>
        )
    };
};

export default Books;
