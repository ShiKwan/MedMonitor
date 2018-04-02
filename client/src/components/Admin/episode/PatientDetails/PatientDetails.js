import React, { Component } from 'react';
import {
    Nav, Navbar, NavItem, NavLink, 
    Form, FormGroup, Label, Input, FormText,
    Button, 
    ListGroup, ListGroupItem,
    Container, Row, Col, 
    Card, CardBody, CardTitle, CardSubtitle, CardText,
    Table
} from 'reactstrap';

export default class PatientDetails extends React.Component {
    constructor(props){
        super(props);
        this.enterEpisodeMedications = this.props.enterEpisodeMedications.bind(this);
    }
    render () {
        return (
            <Card style={{display: this.props.patientDetailsCard ? "block" : "none"}}>
                <CardBody style={{minHeight: 550}}>
                    <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Review patient details</CardTitle>
                
                    <CardText>
                        <br />
                        Hospital Number: {this.props.patient_number} <br />
                        Name :  {this.props.first_name}&nbsp;{this.props.last_name} <br/>
                        Date of Birth: {this.props.dob} <br /><br />
                        Enrolled: {this.props.date_created} <br />
                        Enrollment status: {this.props.active ? "Active" : "Currently inactive"} <br />
                        E-mail: {this.props.email} <br />
                        Phone: {this.props.phone} <br /><br />
                        Episodes recorded: {this.props.length} <br />
                        Last episode created: {this.props.date_created} <br />
                        <br /><br />

                        { this.props.active ?  "" : 
                            "Note, this patient has been marked inactive.\nYou cannot create a new episode for inactive patients."
                                
                        }
                        
                    </CardText>

                    <br /><br />
                    <div style={{display: this.props.active ? "block" : "none"}}>
                        <Button style={{marginRight: 6}} onClick={() => this.props.enterEpisodeMedications()}> Here Next</Button>
                        <a href={"/admin"}>
                            <Button style={{marginRight: 6}}>Cancel</Button>
                        </a> 
                    </div>
                    <div style={{display: !this.props.active ? "block" : "none"}}>
                        <a href={"/admin"}><Button style={{marginRight: 6}}>Back</Button></a> 
                    </div>
                    
                </CardBody>
            </Card>
        )
    }
}