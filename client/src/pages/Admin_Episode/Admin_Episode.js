import React, { Component } from "react";
// import Header from "../../components/Header";
import PatientDetails from "../../components/Admin/episode/PatientDetails"
import PatientMedications from "../../components/Admin/episode/PatientMedications"
import PatientNextAppointment from "../../components/Admin/episode/PatientNextAppointment"
import PatientConfirmEpisode from "../../components/Admin/episode/ConfirmEpisode" 
import PatientSuccessEpisode from "../../components/Admin/episode/SuccessEpisode" 
import '../Admin/Admin.css';
import patientAPI from "../../utils/patientAPI";
import medicationAPI from "../../utils/medicationAPI";
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

        medications : []
    };
    
    componentDidMount() {
        console.log("window " + window.location.search.substring(4))
        this.loadPatient()
    };

handleLoadPatient = (e) => {
    e.preventDefault();
    console.log("here");
    this.loadPatient();
}
loadPatient = () => {
    // find patient data by id for Admin 
    patientAPI.findPatientInfoForAdmin(window.location.search.substring(4))
        .then(res => {
            console.log("res.data", res.data)
            this.setState({patientId : res.data._id})
            this.setState({patient: res.data});
            this.setState({patientDoctor: this.state.patient.doctor})
            this.setState({patientDetails: this.state.patient.details})
            this.setState({patientAppointment: this.state.patient.appointment})
            this.setState({patientEpisodes: this.state.patient.episode})
            this.setState({patientLastEpisode: this.state.patientEpisodes[this.state.patientEpisodes.length-1] })
            this.setState({patientEpisodesStart: this.state.patientLastEpisode.start_date})
            this.setState({patientLastEpisodeMedications: this.state.patientLastEpisode.medications})
            this.loadMedication()
        })
        .catch(err => console.log(err));
};
loadMedication = () => {
    medicationAPI.findAll()
    .then(res => {
        this.setState({
            medications : res.data
        })
    })
    .catch(err => console.log(err));
}

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
                    Patient id: {this.state.patientId}<br/>
                    <Button onClick={this.handleLoadPatient}> Show patient info</Button>
                    <div className="clearfix">
                        <br />
                        <span  style={{fontWeight: "bold", float: "left"}}>Physician: Dr Rolando Soandso</span>
                        <span  style={{fontWeight: "bold", float: "right"}}>Monday 3rd Jun 2018</span>
                    </div>
                    <br />
                    <div>
                        <Row>  
                            <PatientDetails 
                                patientDetailsCard = {this.state.patientDetailsCard}
                                patient_number = {this.state.patientDetails.patient_number}
                                first_name = {this.state.patientDetails.first_name}
                                last_name = {this.state.patientDetails.last_name}
                                dob = {this.state.patientDetails.dob}
                                date_created = {this.state.patient.date_created}
                                active = {this.state.patient.active}
                                email = {this.state.patientDetails.email}
                                phone = {this.state.patientDetails.phone}
                                length = {this.state.patientEpisodes.length}
                                patientEpisodesStart = {this.state.patientEpisodesStart}
                                enterEpisodeMedications = {this.enterEpisodeMedications}
                            />
                            <PatientMedications 
                                medications = {this.state.medications}
                                addEpisodeMedicationsCard = {this.state.addEpisodeMedicationsCard}
                                patientLastEpisode = {this.state.patientLastEpisode}
                                patientLastEpisodeMedications = {this.state.patientLastEpisodeMedications}
                                enterNextAppointment = {this.enterNextAppointment}
                            />
                            <PatientNextAppointment
                                addNextAppointmentCard = {this.state.addNextAppointmentCard}
                                confirmNewEpisodeDetails = {this.confirmNewEpisodeDetails}

                            />
                            <PatientConfirmEpisode
                                confirmNewEpisodeDetailsCard = {this.state.confirmNewEpisodeDetailsCard}
                                createNewEpisode = {this.createNewEpisode}
                            />
                            <PatientSuccessEpisode 
                                successEpisodeCreatedCard = {this.state.successEpisodeCreatedCard}
                            />
                        </Row>
                    </div> 
                </Container>
            </div>



        ) // close of render return

    } // Close of render

}; // co=lose of constructor

export default Admin_Episode;
