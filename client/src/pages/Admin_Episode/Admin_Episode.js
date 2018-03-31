import React, { Component } from "react";
// import Header from "../../components/Header";
import '../Admin/Admin.css';
import patientAPI from "../../utils/patientAPI";
import {
    Nav, Navbar, NavItem, NavLink, 
    Form, FormGroup, Label, Input, FormText,
    Button, 
    ListGroup, ListGroupItem,
    Container, Row, Col, 
    Card, CardBody, CardTitle, CardSubtitle, CardText,
    Table
} from 'reactstrap';


class Admin_Episode extends Component {
    state = { 
        patientId: "",

        patientDetailsCard: true,
        addEpisodeMedicationsCard: false,
        addNextAppointmentCard: false,
        successEpisodeCard: false,
        submitEpisodeCard: false,

        patients: [],
        patient: {},
        patientDoctor: [],
        patientDetails: [],
        patientAppointment: [],
        patientEpisodes: [],
        patientEpisodesStart: [],
        patientEpisodesMedications: [],

    };
    
    componentDidMount() {
        console.log("window " + window.location.search.substring(4))
        this.loadPatient()
    };


loadPatient = () => {

    // find patient data by id for Admin 
    patientAPI.findPatientInfoForAdmin(window.location.search.substring(4))
        .then(res => {
            console.log("res.data" + res.data)
            this.setState({patient: res.data});
            this.setState({patientDoctor: this.state.patient.doctor})
            this.setState({patientDetails: this.state.patient.details})
            this.setState({patientAppointment: this.state.patient.appointment})
            this.setState({patientEpisodes: this.state.patient.episode})
            this.setState({patientLastEpisode: this.state.patientEpisodes[this.state.patientEpisodes.length-1] })
            this.setState({patientEpisodesStart: this.state.patientLastEpisode.start_date})
            this.setState({patientLastEpisodeMedications: this.state.patientLastEpisode.medications})

        })
        .catch(err => console.log(err));
};

enterEpisodeMedications = () => {
    this.setState({addEpisodeMedicationsCard: true});
}

enterNextAppointment = () => {
    this.setState({addNextAppointmentCard: true})
}

confirmNewEpisodeDetails = () => {
    this.setState({confirmNewEpisodeDetailsCard: true})
    this.setState({patientDetailsCard: false});
    this.setState({addNextAppointmentCard: false})
    this.setState({addEpisodeMedicationsCard: false});
}

createNewEpisode= () => {
    // constructnewEpisode object and API call
    this.setState({confirmNewEpisodeDetailsCard: false})
    this.setState({successEpisodeCreatedCard: true})
    
}



    render() {
        return (
            <div>
                <Container fluid>
                    Admin Episode Page<br />
                    Patient id: {this.state.patientId}

                    <div className="clearfix">
                        <br />
                        <span  style={{fontWeight: "bold", float: "left"}}>Physician: Dr Rolando Soandso</span>
                        <span  style={{fontWeight: "bold", float: "right"}}>Monday 3rd Jun 2018</span>
                    </div>
                    <br />
                    <div>
                        <Row>
                            <Col sm={4}>

                                <Card style={{display: this.state.patientDetailsCard ? "block" : "none"}}>
                                    <CardBody style={{minHeight: 550}}>
                                        <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Review patient details</CardTitle>
                                    
                                        <CardText>
                                            <br />
                                            Hospital Number: {this.state.patientDetails.patient_number} <br />
                                            Name :  {this.state.patientDetails.first_name}&nbsp;{this.state.patientDetails.last_name} <br/>
                                            Date of Birth: {this.state.patientDetails.dob} <br /><br />
                                            Enrolled: {this.state.patient.date_created} <br />
                                            Enrollment status: {this.state.patient.active ? "Active" : "Currently inactive"} <br />
                                            E-mail: {this.state.patientDetails.email} <br />
                                            Phone: {this.state.patientDetails.phone} <br /><br />
                                            Episodes recorded: {this.state.patientEpisodes.length} <br />
                                            Last episode created: {this.state.patientEpisodesStart} <br />
                                            <br /><br />

                                            { this.state.patient.active ?  "" : 
                                                "Note, this patient has been marked inactive.\nYou cannot create a new episode for inactive patients."
                                                 
                                            }
                                            
                                        </CardText>

                                        <br /><br />
                                        <div style={{display: this.state.patient.active ? "block" : "none"}}>
                                            <Button style={{marginRight: 6}} onClick={this.enterEpisodeMedications}>Next</Button>
                                            <a href={"/admin"}>
                                                <Button style={{marginRight: 6}}>Cancel</Button>
                                            </a> 
                                        </div>
                                        <div style={{display: !this.state.patient.active ? "block" : "none"}}>
                                            <a href={"/admin"}><Button style={{marginRight: 6}}>Back</Button></a> 
                                        </div>
                                        
                                    </CardBody>
                                </Card>

                            </Col>

                            <Col sm={4}>

                                <Card style={{display: this.state.addEpisodeMedicationsCard ? "block" : "none"}}>
                                    <CardBody style={{minHeight: 550}}>
                                        <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Enter patient medications</CardTitle>
                                    
                                        <CardText>
                                           Enter each Parkinsons medication with doses, and times that the patient will take during the next episode.
                                        </CardText>

                                        <br /><br />
                                        <Button style={{marginRight: 6}} onClick={this.enterNextAppointment}>Next</Button>
                                        <a href={"/admin"}> <Button style={{marginRight: 6}}>Cancel</Button></a> 

                                    </CardBody>
                                </Card>

                            </Col>

                            <Col sm={4}>

                            <Card style={{display: this.state.addNextAppointmentCard ? "block" : "none"}}>
                                <CardBody style={{minHeight: 550}}>
                                    <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Enter next appointment</CardTitle>
                                
                                    <CardText>
                                        Enter the time of this patients next appointment and any commenst for the patient to view.
                                    </CardText>

                                    <br /><br />
                                    <Button style={{marginRight: 6}} onClick={this.confirmNewEpisodeDetails}>Next</Button>
                                    <a href={"/admin"}> <Button style={{marginRight: 6}}>Cancel</Button></a> 
                                    
                                </CardBody>
                            </Card>

                            </Col>
                            
                            <Card style={{display: this.state.confirmNewEpisodeDetailsCard ? "block" : "none", width: "100%"}}>
                                <CardBody style={{minHeight: 550}}>
                                    <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Confirm New Episode</CardTitle>
                                
                                    <CardText>
                                        Review new episode details and click submit to creat a new episode
                                        <br /><br />
                                    </CardText>

                                    <br /><br />
                                    <Button style={{marginRight: 6}} onClick={this.createNewEpisode}>Submit</Button>
                                    <a href={"/admin"}> <Button style={{marginRight: 6}}>Back</Button></a> 
                                    <a href={"/admin"}> <Button style={{marginRight: 6}}>Cancel</Button></a> 
                                    
                                </CardBody>
                            </Card>

                            <Card style={{display: this.state.successEpisodeCreatedCard ? "block" : "none", width: "100%"}}>
                                <CardBody style={{minHeight: 550}}>
                                    <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Confirm New Episode</CardTitle>
                                
                                    <CardText>
                                        A new episode has been successfully created for this patient
                                        <br /><br />
                                        The patient has been emailed with details
                                        <br /><br />
                                        Offer to place medication reminders in pts google calander
                                    </CardText>

                                    <br /><br />
                                    <a href={"/admin"}> <Button style={{marginRight: 6}}>Finish</Button></a>
                                    
                                </CardBody>
                            </Card>
                        </Row>
                    </div> 
                </Container>
            </div>



        ) // close of render return

    } // Close of render

}; // co=lose of constructor

export default Admin_Episode;
