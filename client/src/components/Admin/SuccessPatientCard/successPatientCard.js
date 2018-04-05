import React, { Component } from 'react';
import {
    Card, CardBody, CardTitle, CardText,
    Button
} from 'reactstrap';
import './successPatientCard.css';


export default class SuccessPatientCard extends React.Component {

    render () {
        return (

            <Card className="successEnrollPatTableCard" style={{display: this.props.successPatientCard ? "block" : "none"}}>
            <CardBody className="successEnrollPatTableBody">
                    <CardTitle className="successEnrollPatTitle">Enroll a new patient</CardTitle>
                <CardText>
                    <br />
                    New Patient: {this.props.patient_name} successfully enrolled and registered.
                    <br /><br />
                    An email has been sent to {this.props.patient_email} with their username and password so that they can log-in and use the application.
                    <br />              
                </CardText>
                    <br />
                    <a href="/admin"><Button style={{marginRight: 6}}>Finish</Button></a>
            </CardBody>
        </Card>
        
        )
    }
}