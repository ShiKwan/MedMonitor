import React, { Component } from "react";
// import Header from "../../components/Header";
import PatientDetails from "../../components/Admin/episode/PatientDetails"
import PatientMedications from "../../components/Admin/episode/PatientMedications"
import PatientNextAppointment from "../../components/Admin/episode/PatientNextAppointment"
import PatientConfirmEpisode from "../../components/Admin/episode/ConfirmEpisode" 
import PatientSuccessEpisode from "../../components/Admin/episode/SuccessEpisode" 
import '../Admin/Admin.css';
import patientAPI from "../../utils/patientAPI";
import mailerAPI from "../../utils/nodemailerAPI";
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

        medications : [],
        newEpisode: [],
        newAppt : []
    };
    
    componentDidMount() {
        console.log("window " + window.location.search.substring(4))
        this.loadPatient()
    };

handleLoadPatient = (e) => {
    e.preventDefault();

    this.loadPatient();
    console.log("current state: ", this.state);
}
loadPatient = () => {
    // find patient data by id for Admin 
    patientAPI.findPatientInfoForAdmin(window.location.search.substring(4))
        .then(res => {
            let objMedication = {};
            objMedication = res.data
            res.data.episode.map((epi, epi_index) => {
                epi.medications.map((med, med_index) =>{
                     objMedication.episode[epi_index].medications[med_index].label = `${med.dose} | ${med.form} | ${med.route}`
                        objMedication.episode[epi_index].medications[med_index].value = med_index
                    
                })
            })
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
        let objMedication = {}
        objMedication = res.data
        res.data.map((x,index)=>{
            objMedication[index].label = `${x.name}`
            objMedication[index].value = `${x.name}`
            x.doses.map((item,index2) =>{
                objMedication[index].doses[index2].label = `${item.dose} | ${item.form} | ${item.route}`
                objMedication[index].doses[index2].value = index2
            })
        })
        console.log(objMedication);
        this.setState({
            medications: objMedication
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

    //send email, save data to database, and prompt success message
    this.prepDataToSave();
    

}

handleMedCallback = (lastEpiMeds) => {
    console.log("new med list: ", lastEpiMeds);
    this.setState({
        newEpisode: lastEpiMeds
    });
    console.log("new patient med episode : ", this.state.newEpisode);
}

handleApptCallback = (appt) =>{
    console.log("appointment : ", appt);
    this.setState({
        newAppt: appt
    });
    console.log("new patient appt : " , this.state.newAppt);
}

prepDataToSave = () =>{
    console.log("admin episode state: ", this.state);
    this.setState({
        newObj: this.state.newEpisode
    }, function () {
        let objToSubmit = {
            episode_id: "001",
            doctor: "",
            start_date: Date(),
            medications: []
        }
        objToSubmit.doctor = this.state.patient.episode[0].doctor
        objToSubmit.medications = this.state.newObj

        for (let i = 0; i < this.state.newObj.length; i++) {
            for (let j = 0; j < this.state.newObj[i].times.length; j++) {
                if (this.state.newObj[i].times[j].value) {
                    objToSubmit.medications[i].times.push(this.state.newObj[i].times[j].value);
                }
            }
        }
        for (let i = 0; i < objToSubmit.medications.length; i++) {
            for (let j = 0; j < objToSubmit.medications[i].times.length; j++) {
                let itemLength = objToSubmit.medications[i].times.length
                while (itemLength--) {
                    if (this.state.newObj[i].times[itemLength].value) {
                        objToSubmit.medications[i].times.splice(itemLength, 1);
                    }
                }
            }
        }

        console.log(objToSubmit);
        patientAPI.createNewEpisode(window.location.search.substring(4),
            objToSubmit)
            .then(res => {
                console.log(res)
                patientAPI.updateAppointment(window.location.search.substring(4), this.state.newAppt)
                    .then(res => {
                        console.log(res)
                        mailerAPI.sendToPatient({
                            name : this.state.username,
                            email : this.state.newAccountEmail,
                            message : 
                            `
                            Dear ${this.state.patient.details.first_name} ${this.state.patient.details.last_name},
                            We have scheduled an appointment for you with ${this.state.patientLastEpisode} on ${this.patientAppointment.next_appt}. 
                            These are the comment from your doctor: 
                            
                            ${this.patientAppointment.comments}

                            As we are progressing through your health wealthness, we would like to remind you to keep track of your wellness frequently with our application.
                            If you need a reminder for medication time for current episode and appointment time, please visit the application. 
                            From:
                            MedMonitor
                            `
                })
                .then(res =>{
                    console.log(res);
                    console.log("mail man work real hard!");
                })
                .catch(err => {
                    console.log(err);
                });
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    )
}

populateState = () =>{
    console.log("admin episode state: ", this.state);
    this.setState({
        newObj : this.state.newEpisode
    }, function(){
            let objToSubmit = {
                episode_id: "001",
                doctor: "",
                medication: [
                ]
            }
    objToSubmit.doctor = this.state.patient.episode[0].doctor
    objToSubmit.medication = this.state.newObj
    
    for(let i = 0; i < this.state.newObj.length ; i++){
        for(let j =0; j < this.state.newObj[i].times.length; j++){
            if(this.state.newObj[i].times[j].value){
                console.log("value exist here");
                objToSubmit.medication[i].times.push(this.state.newObj[i].times[j].value);
            }
        }
    }
        for (let i = 0; i < objToSubmit.medication.length; i++){
            for (let j = 0; j < objToSubmit.medication[i].times.length; j++) {
                let itemLength = objToSubmit.medication[i].times.length
                while (itemLength--){
                    if (this.state.newObj[i].times[itemLength].value) {
                        objToSubmit.medication[i].times.splice(itemLength, 1);
                    }
                }
            }
        }

        console.log(objToSubmit);
    }
        
)  
}
    render() {
        return (
            <div>
                <Container fluid>
                    <Container className="clearfix">
                        Admin Episode Page<br />
                        Patient id: {this.state.patientId}<br/>
                        <Button onClick={this.handleLoadPatient}> Show patient info</Button>
                            <br />
                            <span  style={{fontWeight: "bold", float: "left"}}>Physician: Dr Rolando Soandso</span>
                            <span  style={{fontWeight: "bold", float: "right"}}>Monday 3rd Jun 2018</span>
                    </Container>
                    <br />
                    <Container>
                        <Row>
                            <Col size="md-12">
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
                                    handleMedCallback={this.handleMedCallback}
                                />
                                <PatientNextAppointment
                                    addNextAppointmentCard = {this.state.addNextAppointmentCard}
                                    confirmNewEpisodeDetails = {this.confirmNewEpisodeDetails}
                                    handleApptCallback={this.handleApptCallback}

                                />
                                <PatientConfirmEpisode
                                    confirmNewEpisodeDetailsCard = {this.state.confirmNewEpisodeDetailsCard}
                                    createNewEpisode = {this.createNewEpisode}
                                />
                                <PatientSuccessEpisode 
                                    successEpisodeCreatedCard = {this.state.successEpisodeCreatedCard}
                                />
                            </Col>
                        </Row>
                        <Button onClick={this.populateState}>Show me state </Button>
                    </Container> 
                </Container>
            </div>



        ) // close of render return

    } // Close of render

}; // co=lose of constructor

export default Admin_Episode;
