import React, { Component } from "react";
import HomeHeader from "../../components/HomeHeader";
import './Admin.css';
import {
    Nav,
    Navbar,
    NavItem,
    NavLink,
    Input,
    Form,
    FormGroup,
    Label,
    Button,
    Container, Row, Col, 
    Card, CardBody, CardTitle, CardText,
    Table
} from 'reactstrap';


class Admin extends Component {
    state = {
        patientCard: true,
        physicianCard: true,
        medicationCard: true, 
        dataMiningCard: false,
        workspaceCard: true,
        notificationCard: true

    };
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
                       

                        <Card style={{display: this.state.patientCard ? "block" : "none"}}>
                            <CardBody>
                                <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Patients</CardTitle>
                                <CardText> 
                                    <div>Select patient</div>
                                    <div>Add new patient</div>
                                </CardText>
                            </CardBody>
                        </Card>

                        <br />

                        <Card style={{display: this.state.physicianCard ? "block" : "none"}}>
                            <CardBody>
                                <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Physicians</CardTitle>
                                <CardText> 
                                    <div>Select physician</div>
                                    <div>Add new physician</div>
                                </CardText>
                            </CardBody>
                        </Card>

                        <br />

                        <Card style={{display: this.state.medicationCard ? "block" : "none"}}>
                            <CardBody>
                                <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Medications</CardTitle>
                                <CardText> 
                                    <div>Select medication</div>
                                    <div>Add new medication</div>
                                </CardText>
                            </CardBody>
                        </Card>

                        <br />

                        <Card style={{display: this.state.dataMiningCard ? "block" : "none"}}>
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

                        <Card style={{display: this.state.workspaceCard? "block" : "none"}}>
                            <CardBody style={{height: 630}}>
                                <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Workspace</CardTitle>
                                <CardText>
                                    <div>Select patient</div>
                                </CardText>
                            </CardBody>
                        </Card> 
                    
                    </Col>
                    <Col sm="4">

                        <Card style={{display: this.state.notificationCard ? "block" : "none"}}>
                            <CardBody>
                                <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Notifications</CardTitle>
                                <hr />
                                
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
                                                <td>Mark Smith</td><td>hosp00123</td><td>03/08/2018</td><td>0900</td>
                                            </tr>
                                            <tr>
                                                <td>Mark Smith</td><td>hosp00123</td><td>03/08/2018</td><td>0900</td>
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
                                                <td>Mary Smythe</td><td>hosp00123</td><td>03/08/2018</td><td>Fall</td>
                                            </tr>
                                            <tr>
                                                <td>Mary Smythe</td><td>hosp00123</td><td>03/08/2018</td><td>Choking</td>
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
