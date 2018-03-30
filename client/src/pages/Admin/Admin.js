import React, { Component } from "react";
import Header from "../../components/Header";
import './Admin.css';
import patientAPI from "../../utils/patientAPI";
import doctorAPI from "../../utils/doctorAPI";
import userAPI from "../../utils/userAPI";
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

     


    };

    // Call function to fetch data required for admin page when Admin component mounts
    componentDidMount() {
        this.loadAllPatients(); 
    };


    menuSelect = (menuItem) => {
        menuItem == "select patient" ? this.setState({selectPatientCard: true}): this.setState({selectPatientCard: false});
        //menuItem == "confirm patient" ? this.setState({confirmPatientCard: true}) : this.setState({confirmPatientCard: false});
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


    loadAllPatients = () => {
        patientAPI.findAll({})
            .then(res => { 
                this.setState({ patients: res.data}); 
                console.log(this.state.patients)
            })
            .catch(err => console.log(err));
    };


    confirmPatient = (id) => {
        // find patient data by id for Admin ^^
        patientAPI.findPatientInfoForAdmin(id)
            .then(res => {
                this.setState({confirmPatientCard: true});
                this.setState({selectPatientCard: false});
                this.setState({patient: res.data});
                this.setState({patientDetails: this.state.patient.details})
                this.setState({patientAppointment: this.state.patient.appointment})
                this.setState({patientEpisodes: this.state.patient.episode})
                this.setState({patientEpisodesStart: this.state.patientEpisodes[this.state.patientEpisodes.length-1].start_date})
                this.setState({recordsLastPatientEpisode: this.state.patientEpisodes[this.state.patientEpisodes.length-1].record.length})
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
     addDoctor= event => {
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


    registerDoctor = event => {
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
                this.setState({doctor_name: `${this.state.dr_firstname} ${this.state.dr_lastname}`})

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





    // Dynamic form handler
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
        [name]: value
        });
        console.log(event.target.value);
    };



    render() {
        return (
        <div>
            <Container fluid>
            <Header />
            
            <div className="clearfix">
            <br />
                <span  style={{fontWeight: "bold", float: "left"}}>Physician: Dr Rolando Soandso</span>
                <span  style={{fontWeight: "bold", float: "right"}}>Monday 3rd Jun 2018</span>
            </div>

            <br />

            <div>
                <Row>
                    <Col sm="2">
                       
                        <Card style={{display: this.state.menuCard ? "block" : "none"}}>
                            <CardBody>
                                <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Actions</CardTitle>
                                <CardText> 
                                    <div style={{fontWeight: this.state.selectPatientCard || this.state.confirmPatientCard? "bold" : ""}}><a onClick={() => this.menuSelect("select patient")}>Select patient</a></div>
                                    <div style={{fontWeight: this.state.addPatientCard || this.state.registerPatienttCard || this.state.successPatientCard? "bold" : ""}}><a onClick={() => this.menuSelect("add patient")}>Enroll new patient</a></div>
                                    <hr />
                                </CardText>

                                <CardText> 
                                    <div style={{fontWeight: this.state.selectPhysicianCard ? "bold" : ""}}>Select physician</div>
                                    <div style={{fontWeight: this.state.addPhysicianCard || this.state.registerPhysicianCard ||this.state.successPhysicianCard ? "bold" : ""}}><a onClick={() => this.menuSelect("add physician")}>Add new physician</a></div>
                                    <hr />
                                </CardText>

                                <CardText> 
                                    <div style={{fontWeight: this.state.selectMedcationCard ? "bold" : ""}}>Select medication</div>
                                    <div style={{fontWeight: this.state.addMedicationtCard ? "bold" : ""}}>Add new medication</div>
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card style={{display: this.state.confirmPateintCard ? "block" : "none"}}>
                            <CardBody>
                                <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Data Mining</CardTitle>
                                <CardText> 
                                    <div>Drug data</div>
                                    <div>Disease data</div>
                                </CardText>
                            </CardBody>
                        </Card> 

                    </Col>
        
                    <Col sm="6">

                        <Card style={{display: this.state.selectPatientCard ? "block" : "none"}}>
                            <CardBody style={{minHeight: 550}}>
                                <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Select patient</CardTitle>
                                <CardText>
                                <br />
                                    {this.state.patients.length ? (

                                        <Table>
                                            <tbody>
                                                {this.state.patients.map(item => (
                                                        <tr>
                                                            <a  onClick={() => this.confirmPatient(item._id)}>
                                                                <td style={{width: 100}}>{item.details.patient_number}</td>
                                                                <td style={{width: 150}}>{item.details.first_name}&nbsp;{item.details.last_name}</td> 
                                                            </a>
                                                        </tr>
                                                ))} 
                                            </tbody>
                                        </Table>

                                    ) : (
                                    <h3>No Results to Display</h3>
                                    )}

                                </CardText>
                            </CardBody>
                        </Card> 


                         <Card style={{display: this.state.confirmPatientCard ? "block" : "none"}}>
                            <CardBody style={{minHeight: 550}}>
                                <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Review selected patient</CardTitle>
                             
                                <CardText>
                                    <br />
                                    Hospital Number: {this.state.patientDetails.patient_number} <br />
                                    Name :  {this.state.patientDetails.first_name}&nbsp;{this.state.patientDetails.last_name} <br/>
                                    Date of Birth: {this.state.patientDetails.dob} <br /><br />
                                    Enrolled: {this.state.patient.date_created} <br />
                                    Enrollment status: {this.state.patient.active ? "Active" : "Currently inactive"} <br />
                                    Next Appointmant: {this.state.patientAppointment.next_appt} <br /><br />
                                    E-mail: {this.state.patientDetails.email} <br />
                                    Phone: {this.state.patientDetails.phone} <br /><br />
                                    Episodes recorded: {this.state.patientEpisodes.length} <br />
                                    Start of last Episode: {this.state.patientEpisodesStart} <br />
                                    Records in last episode: {this.state.recordsLastPatientEpisode} 
                                </CardText>
                                <br /><br />
                                <a href={`/admin/Episode?id=${ this.state.patient._id }`}>
                                    <Button style={{marginRight: 6}}>Create new Episode</Button>
                                </a>
                                <a href={`/admin/Report?id=${ this.state.patient._id }`}>
                                    <Button style={{marginRight: 6}}>Report</Button>
                                </a>
                                <Button style={{marginRight: 6}}>Update details</Button>
                                <Button style={{marginRight: 6}}>Update appointments</Button>
                                <Button style={{marginRight: 6}}>Close</Button>
                            </CardBody>
                        </Card>

                         <Card style={{display: this.state.addPatientCard ? "block" : "none"}}>
                            <CardBody style={{minHeight: 550}}>
                                <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Enroll a new patient</CardTitle>
                                <CardText>
                                    <br />
                          
                                    <Form>
                                        <FormGroup row>
                                            <Label for="name" sm={3}>Name</Label>
                                            <Col sm={9}>
                                            <Input type="text" name="pt_firstname" id="name" placeholder="firstname" onChange={this.handleInputChange}  value={this.state.pt_firstname} />
                                            <Input type="text" name="pt_lastname" id="lastname" placeholder="lastname" onChange={this.handleInputChange} value={this.state.pt_lastname} />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="hospnum" sm={3}>Hospital number</Label>
                                            <Col sm={9}>
                                            <Input type="text" name="pt_hospnum" id="hospnum" placeholder="hosp1234" onChange={this.handleInputChange} value={this.state.pt_hospnum} />  
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="dob" sm={3}>Date of birth</Label>
                                            <Col sm={9}>
                                            <Input type="text" name="pt_dob" id="dob" placeholder="mm/dd/yyyy" onChange={this.handleInputChange} value={this.state.pt_dob} />  
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="email" sm={3}>Contact email</Label>
                                            <Col sm={9}>
                                            <Input type="email" name="pt_email" id="contact" placeholder="john.smith@mail.com" onChange={this.handleInputChange} value={this.state.pt_email} />  
                                            </Col>
                                            <Label for="phone" sm={3}>Contact phone</Label>
                                            <Col sm={9}>
                                            <Input type="phone" name="pt_phone" id="phone" placeholder="216-394-2420" onChange={this.handleInputChange} value={this.state.pt_phone} />  
                                            </Col>
                                        </FormGroup>
                                        <br />
                                        <Button style={{marginRight: 6}} onClick={this.enrollPatient}>Enroll</Button>
                                        <Button style={{marginRight: 6}}>Cancel</Button>
                                    </Form>
                                
                                </CardText>
                            </CardBody>
                        </Card>

                         <Card style={{display: this.state.registerPatientCard ? "block" : "none"}}>
                            <CardBody style={{minHeight: 550}}>
                                <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Enroll a new patient</CardTitle>
                                <CardText>
                                    <br />
                                    New patient: {this.state.patient_name} successfully enrolled.
                                    <br /><br />
                                    You can set a username and password now for this patient now or let the patient rgeister a username and password on first accessing the application. 
                                    <br /><br />             
                                    <Form>
                                        <FormGroup row>
                                            <Label>UserName</Label>
                                            <Input type="text" name="pt_username" placeholder="username" onChange={this.handleInputChange} value={this.state.pt_username} />
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label>Password</Label>
                                            <Input type="text" name="pt_password" placeholder="password" onChange={this.handleInputChange} value={this.state.pt_password} />
                                        </FormGroup> 
                                        <br /><br />           
                                        <Button onClick={this.registerPatient}>Submit</Button>
                                    </Form>
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card style={{display: this.state.successPatientCard ? "block" : "none"}}>
                            <CardBody style={{minHeight: 550}}>
                                <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Enroll a new patient</CardTitle>
                                <CardText>
                                    <br />
                                    New Patient: {this.state.patient_name} successfully enrolled and registered.
                                    <br /><br />
                                    An email has been sent to {this.state.pt_email} with their username and password so that they can log-in and use the application.
                                    <br />              
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card style={{display: this.state.addPhysicianCard ? "block" : "none"}}>
                            <CardBody style={{minHeight: 550}}>
                                <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Add a new physician</CardTitle>
                                <CardText>
                                    <br />
                          
                                    <Form>
                                        <FormGroup row>
                                            <Label for="name" sm={3}>Physician name</Label>
                                            <Col sm={9}>
                                            <Input type="text" name="dr_firstname" id="name" placeholder="firstname" onChange={this.handleInputChange}  value={this.state.dr_firstname} />
                                            <Input type="text" name="dr_lastname" id="last-name" placeholder="lastname" onChange={this.handleInputChange} value={this.state.dr_lastname} />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="idnum" sm={3}>Id number</Label>
                                            <Col sm={9}>
                                            <Input type="text" name="dr_idnum" id="idnum" placeholder="id1234" onChange={this.handleInputChange} value={this.state.dr_idnum} />  
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="office" sm={3}>Office </Label>
                                            <Col sm={9}>
                                            <Input type="text" name="dr_office" id="office" placeholder="office name and address" onChange={this.handleInputChange} value={this.state.dr_office} />  
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="email" sm={3}>Contact email</Label>
                                            <Col sm={9}>
                                            <Input type="email" name="dr_email" id="contact" placeholder="john.smith@mail.com" onChange={this.handleInputChange} value={this.state.dr_email} />  
                                            </Col>
                                            <Label for="phone" sm={3}>Contact phone</Label>
                                            <Col sm={9}>
                                            <Input type="phone" name="dr_phone" id="phone" placeholder="216-394-2420" onChange={this.handleInputChange} value={this.state.dr_phone} />  
                                            </Col>
                                        </FormGroup>
                                        <br />
                                        <Button style={{marginRight: 6}} onClick={this.addDoctor}>Add Physician</Button>
                                        <Button style={{marginRight: 6}}>Cancel</Button>
                                    </Form>

                                </CardText>
                            </CardBody>
                        </Card>

                         
                         <Card style={{display: this.state.registerPhysicianCard ? "block" : "none"}}>
                            <CardBody style={{minHeight: 550}}>
                                <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Enroll a new patient</CardTitle>
                                <CardText>
                                    <br />
                                    New physician: {this.state.physician_name} successfully enrolled.
                                    <br /><br />
                                    You can set a username and password now for this physician now or let the physician rgeister a username and password won first accessing the application. 
                                    <br /><br />             
                                    <Form>
                                        <FormGroup row>
                                            <Label>UserName</Label>
                                            <Input type="text" name="dr_username" placeholder="username" onChange={this.handleInputChange} value={this.state.dr_username} />
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label>Password</Label>
                                            <Input type="text" name="dr_password" placeholder="password" onChange={this.handleInputChange} value={this.state.dr_password} />
                                        </FormGroup> 
                                        <br /><br />           
                                        <Button onClick={this.registerDoctor}>Submit</Button>
                                    </Form>
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card style={{display: this.state.successPhysicianCard ? "block" : "none"}}>
                            <CardBody style={{minHeight: 550}}>
                                <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Enroll a new patient</CardTitle>
                                <CardText>
                                    <br />
                                    New Patient: {this.state.doctor_name} successfully enrolled and registered.
                                    <br /><br />
                                    An email has been sent to {this.state.dr_email} with their username and password so that they can log-in and use the application.
                                    <br />              
                                </CardText>
                            </CardBody>
                        </Card>

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
            </div>
            </Container>
        </div>
        )


    } // close of render


} //close of class constructor

export default Admin;
