import React, { Component } from "react";
import HomeHeader from "../../components/HomeHeader";
import './Admin.css';
import patientAPI from "../../utils/patientAPI";
import {
    Nav,
    Navbar,
    NavItem,
    NavLink,
    Input,
    Form,
    FormGroup, ListGroup, ListGroupItem,
    Label,
    Button,
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
        addtPatientCard: false,
        selectPysicianCard: false,
        addphysicianCard: false,
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

    };

// Call funtion to fetch data required for admin page when Admin component mounts
componentDidMount() {
    this.loadAllPatients(); 
};


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
             this.state.confirmPatientCard = true;
             this.state.selectPatientCard = false;
             this.setState({patient: res.data});
             this.setState({ patientDetails: this.state.patient.details})
             this.setState({ patientAppointment: this.state.patient.appointment})
             this.setState({ patientEpisodes: this.state.patient.episode})
             this.setState({ patientEpisodesStart: this.state.patientEpisodes[this.state.patientEpisodes.length-1].start_date})
             this.setState({ recordsLastPatientEpisode: this.state.patientEpisodes[this.state.patientEpisodes.length-1].record.length})
         })
        .catch(err => console.log(err));
};

episodeRedirect = (id) => {
    console.log("id: " + id)
    window.location = '/Episode?id=' + id
}


menuSelect = (menuItem) => {
    menuItem = "select patient" ? this.setState({selectPatientCard: true}) : this.setState({selectPatientCard: false});
    menuItem = "add patient" ? this.setState({addPatientCard: true}) : this.setState({addPatientCard: false});
    menuItem = "select physician" ? this.setState({selectPhysicianCard: true}) : this.setState({selectPhysicianCard: false});
    menuItem = "add physician" ? this.setState({addPysicianCard: true}) : this.setState({addPhysicianCard: false});
    menuItem = "select medication" ? this.setState({selectMedicationCard: true}) : this.setState({selectMedcationCard: false});
    menuItem = "add medication" ? this.setState({addMedicationCard: true}) : this.setState({addMedicationtCard: false});

}



    render() {
        return (
        <div>
            <Container fluid>
            <HomeHeader />
            
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
                                    <div style={{fontWeight: this.state.selectPatientCard ? "bold" : ""}}><a onClick={() => this.menuSelect("select patient")}>Select patient</a></div>
                                    <div style={{fontWeight: this.state.addtPatientCard ? "bold" : ""}}>Add new patient</div>
                                    <hr />
                                </CardText>

                                <CardText> 
                                    <div style={{fontWeight: this.state.selectPysicianCard ? "bold" : ""}}>Select physician</div>
                                    <div style={{fontWeight: this.state.addphysicianCard ? "bold" : ""}}>Add new physician</div>
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

                        <Card style={{display: this.state.selectPatientCard? "block" : "none"}}>
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


                         <Card style={{display: this.state.confirmPatientCard? "block" : "none"}}>
                            <CardBody style={{minHeight: 550}}>
                                <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Review selected patient</CardTitle>
                             
                                <CardText>
                                    <br />
                                    Hospital Number: {this.state.patientDetails.patient_number}
                                    <br />
                                    Name :  {this.state.patientDetails.first_name}&nbsp;{this.state.patientDetails.last_name}
                                    <br />
                                    Date of Birth: {this.state.patientDetails.dob}
                                    <br /><br />
                                    Enrolled: {this.state.patient.date_created}
                                    <br />
                                    Enrollment status: {this.state.patient.active ? "Active" : "Currently inactive"}
                                    <br />
                                    Next Appointmant: {this.state.patientAppointment.next_appt}
                                    <br /><br />
                                    E-mail: {this.state.patientDetails.email}
                                    <br />
                                    Phone: {this.state.patientDetails.phone}
                                    <br />
                                    <br />
                                    Episodes recorded: {this.state.patientEpisodes.length}
                                    <br />
                                    Start of last Episode: {this.state.patientEpisodesStart}
                                    <br />
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
    }
}

export default Admin;
