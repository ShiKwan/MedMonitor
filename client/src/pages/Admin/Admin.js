import React, { Component } from "react";
import './Admin.css';
import patientAPI from "../../utils/patientAPI";
import doctorAPI from "../../utils/doctorAPI";
import userAPI from "../../utils/userAPI";
import ConfirmPatientCard from "../../components/Admin/confirmPatientCard";
import SelectPatientCard from "../../components/Admin/SelectPatientCard";
import DataMenuCard from "../../components/Admin/DataMenuCard";
import MenuCard from "../../components/Admin/MenuCard";
import AddPatientCard from "../../components/Admin/AddPatientCard";
import RegisterPatientCard from "../../components/Admin/RegisterPatientCard";
import SuccessPatientCard from "../../components/Admin/SuccessPatientCard";
import AddPhysicianCard from "../../components/Admin/AddPhysicianCard";
import RegisterPhysicianCard from "../../components/Admin/RegisterPhysicianCard";
import SuccessPhysicianCard from "../../components/Admin/SuccessPhysicianCard";
import {
    Nav, Navbar, NavItem, NavLink, 
    Form, FormGroup, Label, Input, FormText,
    Button, 
    ListGroup, ListGroupItem,
    Container, Row, Col, 
    Card, CardBody, CardTitle, CardSubtitle, CardText,
    Table
} from 'reactstrap';


class Admin extends Component {
    state = {
        menuCard: true,
        dataMiningCard: false,
        notificationCard: true,
        
        selectPatientCard: true,
        addPatientCard: false,
        selectPhysicianCard: false,
        addPhysicianCard: false,
        selectMedcationCard: false,
        addMedicationtCard: false,
        confirmPatientCard: false,
        
        patients: [],
        patient: {},
        patientDetails: [],
        patientAppointment: [],
        patientEpisodes: [],
        patientEpisodesStart: [],
        recordsLastPatientEpisode: [],

        pt_firstname: "",
        pt_lastname: "",
        pt_hospnum: "",
        pt_dob: "",
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
        dtr_username: "",
        dr_password: "", 
        dr_id: "",
        physician_name: "",
        physician_email: "",
    };

    // Call function to fetch data required for admin page when Admin component mounts
    componentDidMount() {
        this.loadPatientData(); 
    };


    menuSelect = (menuItem) => {
        menuItem == "select patient" ? this.setState({selectPatientCard: true}): this.setState({selectPatientCard: false});
        menuItem == "add patient" ? this.setState({addPatientCard: true}) : this.setState({addPatientCard: false});
        menuItem == "select physician" ? this.setState({selectPhysicianCard: true}) : this.setState({selectPhysicianCard: false});
        menuItem == "add physician" ? this.setState({addPhysicianCard: true}) : this.setState({addPhysicianCard: false});
        menuItem == "select medication" ? this.setState({selectMedicationCard: true}) : this.setState({selectMedcationCard: false});
        menuItem == "add medication" ? this.setState({addMedicationCard: true}) : this.setState({addMedicationtCard: false});
        this.setState({confirmPatientCard: false});
        this.setState({registerPatientCard: false});
        this.setState({successPatientCard: false});
        this.setState({registerPhysicianCard: false});
        this.setState({successPhysicianCard: false});
    }


    loadPatientData = () => {
        patientAPI.findAll({})
            .then(res => { 
                this.setState({ patients: res.data}); 
                console.log(this.state.patients)
            })
            .catch(err => console.log(err));
    };


    // find patient data by id for Admin 
    confirmPatient = (id) => {
       
        patientAPI.findPatientInfoForAdmin(id)
            .then(res => {
                console.log("find patient info for admin", res);
                this.setState({confirmPatientCard: true});
                this.setState({selectPatientCard: false});
                this.setState({patient: res.data});
                this.setState({patientDetails: this.state.patient.details})
                this.setState({patientAppointment: this.state.patient.appointment})
                this.setState({patientEpisodes: this.state.patient.episode})
                this.setState({patientEpisodesStart: this.state.patientEpisodes[this.state.patientEpisodes.length-1].start_date})
                this.setState({recordsLastPatientEpisode: this.state.patientEpisodes[this.state.patientEpisodes.length-1].record.length})
                //sk added this, patient id was not pass in to state:
                this.setState({pt_id : res.data._id})
            })
            .catch(err => console.log(err));
    };


    // add a new patient
    enrollPatient = event => {
        event.preventDefault();
        patientAPI.createNewPatient ({

            date_created: Date(),
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
            this.setState({registerPatientCard: true});
            this.setState({patient_name: `${this.state.pt_firstname} ${this.state.pt_lastname}`})
            this.setState({pt_id: res.data.insertedIds[0]})
        })
        .catch(err => console.log(err));
    };
    

    registerPatient = event => {
        event.preventDefault();
        console.log("pwd: " + this.state.pt_password + " | " + this.state.pt_username)
        if(this.state.pt_password && this.state.pt_username){
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


     // add a new doctor
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
    }


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
                <Container className="clearfix">
                    {this.state.patients.map( (x) => console.log(x))}
                    <br />
                        <span  style={{fontWeight: "bold", float: "left"}}>Physician: Dr Rolando Soandso</span>
                        <span  style={{fontWeight: "bold", float: "right"}}>Monday 3rd Jun 2018</span>
                </Container>

                    <br />

                <Container>
                    <Row>
                        <Col sm="2">
                        
                            <MenuCard
                                menuCard = {this.state.menuCard}
                                selectPatientCard = {this.state.selectPatientCard}
                                confirmPatientCard = {this.state.confirmPatientCard}
                                addPatientCard = {this.state.addPatientCard}
                                registerPatientCard = {this.state.registerPatienttCard}
                                successpatientCard = {this.state.successPatientCard}
                                selectphysicianCard = {this.state.selectPhysicianCard}
                                addPhysicianCard = {this.state.addPhysicianCard}
                                registerPhysiciancard = {this.state.registerPhysicianCard}
                                successPhysicianCard = {this.state.successPhysicianCard}
                                selectMedicationCard = {this.state.selectMedicationCard}
                                addPMedicationCard = {this.state.addPMedicationCard}
                                menuSelect = {(selection) => this.menuSelect(selection)}
                             />

                            <DataMenuCard
                                dataMiningCard = {this.state.dataMenuCard}
                            />

                        </Col>
            
                        <Col sm="6">

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
                                dob = {this.state.patient.date_created}
                                dateCreated = {this.state.patient.date_created}
                                active = {this.state.patient.active}
                                nextAppt = {this.state.patientAppointment.next_appt}
                                email = {this.state.patientDetails.email}
                                phone = {this.state.patientDetails.phone} 
                                patientEpisodesLength = {this.state.patientEpisodes.length}
                                patientEpisodeStart = {this.state.patientEpisodesStart}
                                recordsLastPatientEpisode = {this.state.recordsLastPatientEpisode} 
                                patientId = {this.state.pt_id}
                            />

                            <AddPatientCard
                                addPatientCard = {this.state.addPatientCard}
                                handleInputChange = {(event) => this.handleInputChange(event)}
                                enrollPatient = {(event) => this.enrollPatient(event)}
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

                        </Col>

                        <Col sm="4">
                            <Card style={{display: this.state.notificationCard ? "block" : "none"}}>
                                <CardBody>
                                    <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Notifications</CardTitle>
                                <br />
                                    
                                    <CardText> 
                                        <p>You currently have 23 patients using this applicatio.
                                            <br />
                                            3 new patients enrolled past 7 days.
                                        </p>

                                        <br />
                                        <p style={{fontWeight: "bold"}}>Appointments this week</p>

                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Name</th><th>Hosp number</th><th>Date</th><th>Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style={{padding: 2}}>Mark Smith</td>
                                                    <td style={{padding: 2}}>hosp00123</td>
                                                    <td style={{padding: 2}}>03/08/2018</td>
                                                    <td style={{padding: 2}}>0900</td>
                                                </tr>
                                                <tr>
                                                    <td style={{padding: 2}}>Mark Smith</td>
                                                    <td style={{padding: 2}}>hosp00123</td>
                                                    <td style={{padding: 2}}>03/08/2018</td>
                                                    <td style={{padding: 2}}>0900</td>
                                                </tr>
                                            </tbody>
                                        </Table>

                                        <br />
                                        <p style={{fontWeight: "bold"}}>Emergency notifications</p>
                                        
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Name</th><th>Hosp number</th><th>Date</th><th>Type</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style={{padding: 2}}>Mary Smythe</td>
                                                    <td style={{padding: 2}}>hosp00123</td>
                                                    <td style={{padding: 2}}>03/08/2018</td>
                                                    <td style={{padding: 2}}>Fall</td>
                                                </tr>
                                                <tr>
                                                    <td style={{padding: 2}}>Mary Smythe</td>
                                                    <td style={{padding: 2}}>hosp00123</td>
                                                    <td style={{padding: 2}}>03/08/2018</td>
                                                    <td style={{padding: 2}}>Choking</td>
                                                </tr>
                                            </tbody>
                                        </Table>

                                    </CardText>
                                </CardBody>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            </Container>
        


        ) // render return

    } // close of render


} //close of class constructor

export default Admin;
