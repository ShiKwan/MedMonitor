import React, { Component } from "react";
import './Admin.css';
import patientAPI from "../../utils/patientAPI";
import doctorAPI from "../../utils/doctorAPI";
import userAPI from "../../utils/userAPI";

import MenuCard from "../../components/Admin/MenuCard";
import DataMenuCard from "../../components/Admin/DataMenuCard";
import NotificationCard from "../../components/Admin/NotificationCard";

import ConfirmPatientCard from "../../components/Admin/ConfirmPatientCard";
import SelectPatientCard from "../../components/Admin/SelectPatientCard";
import AddPatientCard from "../../components/Admin/AddPatientCard";
import RegisterPatientCard from "../../components/Admin/RegisterPatientCard";
import AddPatientsDrCard from "../../components/Admin/AddPatientsDrCard";
import SuccessPatientCard from "../../components/Admin/SuccessPatientCard";
import UpdatePatientCard from "../../components/Admin/UpdatePatientCard";
import SuccessUpdatePatientCard from "../../components/Admin/SuccessUpdatePatientCard";
import ChangeAppointmentCard from "../../components/Admin/ChangeAppointmentCard";
import SuccessChangeAppointmentCard from "../../components/Admin/SuccessChangeAppointmentCard";

import SelectPhysicianCard from "../../components/Admin/SelectPhysicianCard";
import ConfirmPhysicianCard from "../../components/Admin/ConfirmPhysicianCard";
import AddPhysicianCard from "../../components/Admin/AddPhysicianCard";
import RegisterPhysicianCard from "../../components/Admin/RegisterPhysicianCard";
import SuccessPhysicianCard from "../../components/Admin/SuccessPhysicianCard";
import UpdatePhysicianCard from "../../components/Admin/UpdatePhysicianCard";
import SuccessUpdatePhysicianCard from "../../components/Admin/SuccessUpdatePhysicianCard";
import RemovePhysicianCard from "../../components/Admin/RemovePhysicianCard"
import SuccessRemovePhysicianCard from "../../components/Admin/SuccessRemovePhysicianCard"

import {  
    Container, 
    Row, 
    Col, 
    CardText, 
    Alert
} from 'reactstrap';


class Admin extends Component {
    constructor(props){
        super(props)
        this.getBackAlertIncident = this.getBackAlertIncident.bind(this);

    }
    state = {
        menuCard: true,
        dataMiningCard: false,
        notificationCard: true,
        
        confirmPatientCard: false,
        selectPatientCard: false,
        addPatientCard: false,
        registerPatientCard: false,
        addPatientsDrCard: false,
        successPatientCard: false,
        updatePatientCard: false,
        successUpdatePatientCard: false,
        changeAppointmentCard: false,
        successChangeAppointmentCard: false, 

        selectPhysicianCard: false,
        confirmPhysicianCard: false,
        addPhysicianCard: false,
        registerPhysicianCard: false,
        successPhysicianCard: false,
        updatePhysicianCard: false,
        successUpdatePhysicianCard: false,
        removePhysicianCard: false,
        successRemovePhysicianCard: false,

        selectMedicationCard: false,
        addMedicationtCard: false,
        
        patients: [],
        patient: {},
        patientDetails: [],
        patientAppointment: [],
        patientEpisodes: [],
        patientEpisodesStart: [],
        recordsLastPatientEpisode: [],

        physicians: [],
        physician: [],
        physicianName: [],

        apptsList: [],
        numPatients: 0,
        patientsWeekList: [],
        patientsweekListLength: 0,

        pt_firstname: "",
        pt_lastname: "",
        pt_hospnum: "",
        pt_dob: "",
        pt_active: "",
        pt_appt: "",
        pt_newApptTime: "",
        pt_newApptDate: "",
        pt_email: "",
        pt_phone: "",   
        pt_username: "",
        pt_password: "", 
        pt_id: "",
        patient_name: "",
        patient_email: "",

        dr_firstname: "",
        dr_lastname: "",
        dr_idnum: "",
        dr_office: "",
        dr_dob: "",
        dr_email: "",
        dr_phone: "",
        dr_username: "",
        dr_password: "", 
        dr_id: "",
        physician_name: "",
        physician_email: "",
        alertIncident : this.props.alertIncident
    };

    getBackAlertIncident(alertIncident){
        console.log("getting back alert incident");
        this.setState({
            alertIncident : alertIncident
        })
        console.log("Alert incident : " , this.state.alertIncident);
    }

    // Call function to fetch data required for admin page when Admin component mounts
    componentDidMount() {
        this.loadData(); 
    };


    menuSelect = (menuItem) => {
        menuItem == "dash board" ? this.setState({notificationCard: true}): this.setState({notificationCard: false});
        menuItem == "select patient" ? this.setState({selectPatientCard: true}): this.setState({selectPatientCard: false});
        menuItem == "add patient" ? this.setState({addPatientCard: true}) : this.setState({addPatientCard: false});
        menuItem == "select physician" ? this.setState({selectPhysicianCard: true}) : this.setState({selectPhysicianCard: false});
        menuItem == "add physician" ? this.setState({addPhysicianCard: true}) : this.setState({addPhysicianCard: false});
        menuItem == "select medication" ? this.setState({selectMedicationCard: true}) : this.setState({selectMedicationCard: false});
        menuItem == "add medication" ? this.setState({addMedicationCard: true}) : this.setState({addMedicationtCard: false});
        this.setState({confirmPatientCard: false});
        this.setState({addPatientsDrCard: false});
        this.setState({registerPatientCard: false});
        this.setState({successPatientCard: false});
        this.setState({updatePatientCard: false});
        this.setState({successUpdatePatientCard: false});
        this.setState({changeAppointmentCard: false});
        this.setState({successChangeAppointmentCard: false});
        this.setState({confirmPhysicianCard: false});
        this.setState({registerPhysicianCard: false});
        this.setState({successPhysicianCard: false});
        this.setState({updatePhysicianCard: false});
        this.setState({successUpdatePhysicianCard: false});
        this.setState({removePhysicianCard: false});
        this.setState({successRemovePhysicianCard: false});
    };


    loadData = () => {

        this.setState({ patients: [] });
        this.setState({ patient: {} });
        this.setState({ patientDetails: [] });
        this.setState({ patientAppointment: [] });
        this.setState({ patientEpisodes: [] });
        this.setState({ patientEpisodesStart: [] });
        this.setState({ recordsLastPatientEpisode: [] });

        this.setState({ physicians: [] });
        this.setState({ physician: [] });
        this.setState({ physicianName: [] });

        this.setState({ apptsList: [] });
        this.setState({ numPatients: 0 });
        this.setState({ patientsWeekList: [] });
        this.setState({ patientsweekListLength: 0 });

        this.setState({ pt_firstname: "" });
        this.setState({ pt_lastname: "" });
        this.setState({ pt_hospnum: "" });
        this.setState({ pt_dob: "" });
        this.setState({ pt_active: "" });
        this.setState({ pt_appt: "" });
        this.setState({ pt_email: "" });
        this.setState({ pt_phone: "" });   
        this.setState({ pt_username: "" });
        this.setState({ pt_password: "" }); 
        this.setState({ pt_id: "" });
        this.setState({ pt_newApptTime: ""})
        this.setState({ pt_newApptDate: ""})
        this.setState({ patient_name: "" });
        this.setState({ patient_email: "" });

        this.setState({ dr_firstname: "" });
        this.setState({ dr_lastname: "" });
        this.setState({ dr_idnum: "" });
        this.setState({ dr_office: "" });
        this.setState({ dr_dob: "" });
        this.setState({ dr_email: "" });
        this.setState({ dr_phone: "" });
        this.setState({ dr_username: "" });
        this.setState({ dr_password: "" }); 
        this.setState({ dr_id: "" });
        this.setState({ physician_name: "" });
        this.setState({ physician_email: "" });

        patientAPI.findAll({})
            .then(res => { 
                this.setState({patients: res.data.patientsList}); 
                this.setState({apptsList: res.data.apptsList}); 
                this.setState({numPatients: this.state.patients.length});
                this.setState({patientsWeekList: res.data.patientsWeekList})
                this.setState({patientsWeekListLength: this.state.patientsWeekList.length})

                doctorAPI.findAll({})
                .then(res => {
                    this.setState({ physicians: res.data});
                })
        })
        .catch(err => console.log(err));
    };
    

    confirmPatient = (id) => {
       
        patientAPI.findPatientInfoForAdmin(id)
            .then(res => {
                this.setState({confirmPatientCard: true});
                this.setState({selectPatientCard: false});
                this.setState({notificationCard: false});
                this.setState({patient: res.data});
                this.setState({patientDetails: this.state.patient.details})
                this.setState({patientAppointment: this.state.patient.appointment})
                this.setState({patientEpisodes: this.state.patient.episode})
                this.setState({patientEpisodesStart: this.state.patientEpisodes[this.state.patientEpisodes.length-1].start_date})
                this.setState({recordsLastPatientEpisode: this.state.patientEpisodes[this.state.patientEpisodes.length-1].record.length})
                this.setState({pt_id : res.data._id})
            })
            .catch(err => console.log(err));
    };


    enrollPatient = event => {
        event.preventDefault();
        patientAPI.createNewPatient ({

            date_created: new Date(),
            active: true,

            //doctor: to be populated with _id from doctors collection,

            details: {
                patient_number: this.state.pt_hospnum,
                first_name: this.state.pt_firstname, 
                last_name: this.state.pt_lastname,
                dob:  this.state.pt_dob,
                email: this.state.pt_email,
                phone: this.state.pt_phone,
            },            
            appointment: {
                next_appt: Date(),
                comments: "tba",
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
        .then(res => {
            console.log(res.data.insertedIds[0]);
            this.setState({addPatientCard: false});
            this.setState({addPatientsDrCard: true});
            this.setState({patient_name: `${this.state.pt_firstname} ${this.state.pt_lastname}`})
            this.setState({pt_id: res.data.insertedIds[0]})

        })
        .catch(err => console.log(err));
    };


    addPatientsDr = event => {
        event.preventDefault();
        console.log("id" + this.state.pt_id)
        console.log("phys: " + this.state.primary_phys)
        if(this.state.primary_phys) {
            patientAPI.updatePhysician(this.state.pt_id, {
                primary_physician : this.state.pt_physician
            })
            .then(res => {
                console.log(res.data);
                this.setState({addPatientsDrCard: false});
                this.setState({registerPatientCard: true});
            })
            .catch(err => console.log(err));
        };
    };
    

    registerPatient = event => {
        event.preventDefault();
        console.log("pwd: " + this.state.pt_password + " | " + this.state.pt_username)
        if(this.state.pt_password && this.state.pt_username) {
            userAPI.createAccount({
                username : this.state.pt_username,
                password : this.state.pt_password,
                email: this.state.pt_email,
                role : "Patient",
                patient_id: this.state.pt_id,
                doctor_id: "n/a"
            })
            .then(res => {
                console.log(res);
                this.setState({
                    messageCenter : "Account created successfully!",
                    messageStatus: "success"
                });
                this.setState({registerPatientCard: false});
                this.setState({successPatientCard: true});
                this.setState({patient_name: `${this.state.pt_firstname} ${this.state.pt_lastname}`})
                this.setState({patient_email: this.state.pt_email})
            })
            .catch(err => {
                console.log("fail");
                console.log("setting redirect to true");
                console.log(err)
                this.setState({ 
                    messageCenter : "Invalid input field, please change the field accordingly",
                    messageStatus : "danger"
                });  
            });
        }
    }

    updatePatientDisplay = (id) => {
        this.setState({confirmPatientCard: false})
        this.setState({updatePatientCard: true})
        this.setState({pt_id: id})
     };


    updatePatient = (id) => {
        patientAPI.updateContact(id, {
            email: this.state.pt_email ? this.state.pt_email : this.state.patientDetails.email,
            phone: this.state.pt_phone ? this.state.pt_phone : this.state.patientDetails.phone
            // timestamps: {'created_at', 'updated_at' }
        })
        .then(res => {
            this.setState({updatePatientCard: false});
            this.setState({successUpdatePatientCard: true});
            this.setState({patient_name: `${this.state.patientDetails.first_name} ${this.state.patientDetails.last_name}`})
        })
        .catch(err => console.log(err));
    };


    updateAppointmentDisplay = (id) => {
        this.setState({confirmPatientCard: false})
        this.setState({changeAppointmentCard: true})
        this.setState({pt_id: id})
     };


    updateAppointment = (id) => {
        console.log("a " + this.state.pt_newApptDate)
        console.log("b " + this.state.pt_newApptTime)
        console.log("id" + id)
        console.log("c " + `${this.state.pt_newApptDate}T${this.state.pt_newApptTime}:00.000Z`)
        const newAppt = `${this.state.pt_newApptDate}T${this.state.pt_newApptTime}:00.000Z`
        console.log("d " + newAppt)
        patientAPI.updateAppointment(id, {
            next_appt: newAppt
        })
        .then(res => {
            this.setState({changeAppointmentCard: false});
            this.setState({successChangeAppointmentCard: true});
            this.setState({patient_name: `${this.state.patientDetails.first_name} ${this.state.patientDetails.last_name}`})
        })
        .catch(err => console.log(err));
    };


    confirmPhysician = (id) => {
        doctorAPI.findOne(id)
            .then(res => {
                this.setState({confirmPhysicianCard: true});
                this.setState({selectPhysicianCard: false});
                this.setState({physician: res.data});
                this.setState({physicianName: this.state.physician.name});
            })
            .catch(err => console.log(err));
    };


     addPhysician= event => {
        event.preventDefault();
        doctorAPI.create ({

            date_added: Date(),
            name: { 
                first: this.state.dr_firstname, 
                last: this.state.dr_lastname 
            },
            id_number:  this.state.dr_idnum,
            office: this.state.dr_office,
            email: this.state.dr_email,
            phone: this.state.dr_phone,

            // timestamps: {'created_at', 'updated_at' }
        })
        .then(res => {
            console.log(res.data.insertedIds[0]);
            this.setState({addPhysicianCard: false});
            this.setState({registerPhysicianCard: true});
            this.setState({physician_name: `${this.state.dr_firstname} ${this.state.dr_lastname}`})
            this.setState({dr_id: res.data.insertedIds[0]})
        })
        .catch(err => console.log(err));
    };


    registerPhysician = event => {
        event.preventDefault();
        console.log("pwd: " + this.state.dr_password + " | " + this.state.dr_username)
        if(this.state.dr_password && this.state.dr_username){
            userAPI.createAccount({
                username : this.state.dr_username,
                password : this.state.dr_password,
                email: this.state.dr_email,
                role : "Admin",
                doctor_id: this.state.dr_id,
                patient_id: "n/a"

            })
            .then(res => {
                console.log(res);
                this.setState({
                    messageCenter : "Account created successfully!",
                    messageStatus: "success"
                });
                this.setState({registerPhysicianCard: false});
                this.setState({successPhysicianCard: true});
                this.setState({physician_name: `${this.state.dr_firstname} ${this.state.dr_lastname}`})
                this.setState({physician_email: this.state.dr_email})

            })
            .catch(err => {
                console.log("fail");
                console.log("setting redirect to true");
                console.log(err)
                this.setState({ 
                    messageCenter : "Invalid input field, please change the field accordingly",
                    messageStatus : "danger"
                });  
            });
        }
    };


    updatePhysicianDisplay = (id) => {
        this.setState({confirmPhysicianCard: false})
        this.setState({updatePhysicianCard: true})
        this.setState({dr_id: id})
     };


    updatePhysician = (id) => {
        doctorAPI.update (id, {
            office: this.state.dr_office ? this.state.dr_office : this.state.physician.office,
            email: this.state.dr_email ? this.state.dr_email : this.state.physician.email,
            phone: this.state.dr_phone ? this.state.dr_phone : this.state.physician.phone
            // timestamps: {'created_at', 'updated_at' }
        })
        .then(res => {
            this.setState({updatePhysicianCard: false});
            this.setState({successUpdatePhysicianCard: true});
            this.setState({physician_name: `${this.state.physicianName.first} ${this.state.physicianName.last}`})
        })
        .catch(err => console.log(err));
    };


    removePhysicianDisplay = (id) => {
        this.setState({confirmPhysicianCard: false})
        this.setState({removePhysicianCard: true})
        this.setState({dr_id: id})
     };


    removePhysician = (id) => {
        doctorAPI.remove(id)
        .then(res => {
            this.setState({removePhysicianCard: false});
            this.setState({successRemovePhysicianCard: true});
            this.setState({physician_name: `${this.state.physicianName.first} ${this.state.physicianName.last}`})
            this.setState({physician_email: this.state.physician.email})
        })
        .catch(err => console.log(err));
    };


    // Dynamic form input handler
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
        [name]: value
        });
        console.log(event.target.value);
    };


    render() {
        
        return (
        // <Container>

            <Container fluid>
                <Container>
                   <Alert className="panicAlertBtn" color="danger">{this.state.alertIncident.map( x => <label>{x}</label> )}</Alert>
                </Container>
                <Container className="clearfix">
                {/* {this.state.patients.map( (x) => console.log(x))} */}
                    <br />
                        <span  style={{fontWeight: "bold", float: "left"}}>
                            Physician: Dr.&nbsp;
                            {localStorage.getItem("firstName")[0].toUpperCase()}{localStorage.getItem("firstName").slice(1)}&nbsp;
                            {localStorage.getItem("lastName")[0].toUpperCase()}{localStorage.getItem("lastName").slice(1)}  
                        </span>
                        <span  style={{fontWeight: "bold", float: "right"}}>
                            {`${Date().toString().slice(0,15)} at ${Date().toString().slice(16,21)}`}
                        </span>
                </Container>

                    <br />

                <Container>
                    <Row>
                        <Col sm="3">
                        
                            <MenuCard
                                menuCard = {this.state.menuCard}
                                dataMenuCard = {this.state.dataMenuCard}
                                notificationCard = {this.state.notificationCard}

                                selectPatientCard = {this.state.selectPatientCard}
                                confirmPatientCard = {this.state.confirmPatientCard}
                                addPatientCard = {this.state.addPatientCard}
                                addPatientsDrCard = {this.state.addPatientsDrCard}
                                registerPatientCard = {this.state.registerPatienttCard}
                                successPatientCard = {this.state.successPatientCard}
                                updatePatientCard = {this.state.updatePatientCard}
                                successUpdatePatientCard = {this.state.successUpdatePatientCard}
                                changeAppointmentCard = {this.state.changeAppointmentCard}
                                successChangeAppointmentCard = {this.state.successChangeAppointmentCard}

                                selectPhysicianCard = {this.state.selectPhysicianCard}
                                confirmPhysicianCard = {this.state.confirmPhysicianCard}
                                updatePhysicianCard = {this.state.updatePhysicianCard}
                                successUpdatePhysicianCard = {this.state.successUpdatePhysicianCard}
                                addPhysicianCard = {this.state.addPhysicianCard}
                                registerPhysicianCard = {this.state.registerPhysicianCard}
                                successPhysicianCard = {this.state.successPhysicianCard}
                                removePhysicianCard = {this.state.removePhysicianCard}
                                successRemovePhysicianCard = {this.state.successRemovePhysicianCard}

                                selectMedicationCard = {this.state.selectMedicationCard}
                                addMedicationCard = {this.state.addMedicationCard}
                                
                                menuSelect = {(selection) => this.menuSelect(selection)}
                             />

                            <DataMenuCard
                                dataMenuCard = {this.state.dataMenuCard}
                            />

                        </Col>
            
                        <Col sm="9">

                            <NotificationCard
                                notificationCard = {this.state.notificationCard}
                                numPatients = {this.state.numPatients}
                                apptsList = {this.state.apptsList}
                                patientsWeekList = {this.state.patientsWeekList}
                                patientsWeekListLength = {this.state.patientsWeekListLength}
                                confirmPatient = {(id) => this.confirmPatient(id)}
                            />   

                            <SelectPatientCard 
                                selectPatientCard = {this.state.selectPatientCard}
                                patientsLength = {this.state.patients.length}
                                patients = {this.state.patients}
                                confirmPatient = {(id) => this.confirmPatient(id)}
                            />

                            <ConfirmPatientCard 
                                confirmPatientCard = {this.state.confirmPatientCard}
                                patientNumber = {this.state.patientDetails.patient_number}
                                firstname = {this.state.patientDetails.first_name}
                                lastname = {this.state.patientDetails.last_name}
                                dob = {this.state.patientDetails.dob}
                                dateCreated = {this.state.patient.date_created}
                                active = {this.state.patient.active}
                                nextAppt = {this.state.patientAppointment.next_appt}
                                email = {this.state.patientDetails.email}
                                phone = {this.state.patientDetails.phone} 
                                patientEpisodesLength = {this.state.patientEpisodes.length}
                                patientEpisodesStart = {this.state.patientEpisodesStart}
                                recordsLastPatientEpisode = {this.state.recordsLastPatientEpisode} 
                                patientId = {this.state.pt_id}
                                updatePatientDisplay = {(id) => this.updatePatientDisplay(id)}
                                updateAppointmentDisplay = {(id) => this.updateAppointmentDisplay(id)}
                            />

                            <AddPatientCard
                                addPatientCard = {this.state.addPatientCard}
                                handleInputChange = {(event) => this.handleInputChange(event)}
                                enrollPatient = {(event) => this.enrollPatient(event)}
                            />

                             <AddPatientsDrCard
                                addPatientsDrCard = {this.state.addPatientsDrCard}
                                handleInputChange = {(event) => this.handleInputChange(event)}
                                enrollPatientWithDr = {(event) => this.enrollPatientWithDr(event)}
                            />

                            <RegisterPatientCard
                                registerPatientCard = {this.state.registerPatientCard}
                                patient_name = {this.state.patient_name}
                                handleInputChange = {(event) => this.handleInputChange(event)}
                                registerPatient = {(event) => this.registerPatient(event)}
                            />

                            <SuccessPatientCard
                                successPatientCard = {this.state.successPatientCard}
                                patient_name = {this.state.patient_name}
                                patient_email = {this.state.patient_email}
                            />

                            <UpdatePatientCard
                                updatePatientCard = {this.state.updatePatientCard}
                                patientNumber = {this.state.patientDetails.patient_number}
                                firstname = {this.state.patientDetails.first_name}
                                lastname = {this.state.patientDetails.last_name}
                                email = {this.state.patientDetails.email}
                                phone = {this.state.patientDetails.phone} 
                                pt_id = {this.state.patient._id}
                                handleInputChange = {(event) => this.handleInputChange(event)}
                                updatePatient = {(id) => this.updatePatient(id)}
                            />

                            <SuccessUpdatePatientCard
                                successUpdatePatientCard = {this.state.successUpdatePatientCard}
                                patient_name = {this.state.patient_name}
                            />

                             <ChangeAppointmentCard
                                changeAppointmentCard = {this.state.changeAppointmentCard}
                                patientNumber = {this.state.patientDetails.patient_number}
                                firstname = {this.state.patientDetails.first_name}
                                lastname = {this.state.patientDetails.last_name}
                                active = {this.state.patient.active}
                                nextAppt = {this.state.patientAppointment.next_appt}
                                pt_id = {this.state.patient._id}
                                handleInputChange = {(event) => this.handleInputChange(event)}
                                updateAppointment = {(id) => this.updateAppointment(id)}
                            />

                            <SuccessChangeAppointmentCard
                                successChangeAppointmentCard = {this.state.successChangeAppointmentCard}
                                patient_name = {this.state.patient_name}
                            />

                            <SelectPhysicianCard 
                                selectPhysicianCard = {this.state.selectPhysicianCard}
                                physicians = {this.state.physicians}
                                physiciansLength = {this.state.physicians.length}
                                confirmPhysician = {(id) => this.confirmPhysician(id)}
                            />

                            <ConfirmPhysicianCard 
                                confirmPhysicianCard = {this.state.confirmPhysicianCard}
                                idNumber = {this.state.physician.id_number}
                                firstname = {this.state.physicianName.first}
                                lastname = {this.state.physicianName.last}
                                office = {this.state.physician.office}
                                dateAdded = {this.state.physician.date_added}
                                email = {this.state.physician.email}
                                phone = {this.state.physician.phone} 
                                updatePhysicianDisplay = {(id) => this.updatePhysicianDisplay(id)}
                                removePhysicianDisplay = {(id) => this.removePhysicianDisplay(id)}
                            />

                            <UpdatePhysicianCard
                                updatePhysicianCard = {this.state.updatePhysicianCard}
                                idNumber = {this.state.physician.id_number}
                                firstname = {this.state.physicianName.first}
                                lastname = {this.state.physicianName.last}
                                office = {this.state.physician.office}
                                email = {this.state.physician.email}
                                phone = {this.state.physician.phone} 
                                dr_id = {this.state.physician._id}
                                handleInputChange = {(event) => this.handleInputChange(event)}
                                updatePhysician = {(id) => this.updatePhysician(id)}
                            />

                            <SuccessUpdatePhysicianCard
                                successUpdatePhysicianCard = {this.state.successUpdatePhysicianCard}
                                physician_name = {this.state.physician_name}
                            />

                            <AddPhysicianCard
                                addPhysicianCard = {this.state.addPhysicianCard}
                                handleInputChange = {(event) => this.handleInputChange(event)}
                                addPhysician = {(event) => this.addPhysician(event)}
                            />

                            <RegisterPhysicianCard
                                registerPhysicianCard = {this.state.registerPhysicianCard}
                                Physician_name = {this.state.Physician_name}
                                handleInputChange = {(event) => this.handleInputChange(event)}
                                registerPhysician = {(event) => this.registerPhysician(event)}
                            />

                             <SuccessPhysicianCard
                                successPhysicianCard = {this.state.successPhysicianCard}
                                physician_name = {this.state.physician_name}
                                physician_email = {this.state.physician_email}
                            />    

                            <RemovePhysicianCard
                                removePhysicianCard = {this.state.removePhysicianCard}
                                idNumber = {this.state.physician.id_number}
                                firstname = {this.state.physicianName.first}
                                lastname = {this.state.physicianName.last}
                                office = {this.state.physician.office}
                                dr_id = {this.state.physician._id}
                                removePhysician = {(id) => this.removePhysician(id)}
                            />

                            <SuccessRemovePhysicianCard
                                successRemovePhysicianCard = {this.state.successRemovePhysicianCard}
                                physician_name = {this.state.physician_name}
                                physician_email = {this.state.physician_email}
                            /> 

                        </Col>
                    </Row>
                </Container>
            </Container>
        


        ) // render return

    } // close of render

} //close of class constructor

export default Admin;
