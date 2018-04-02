import React, { Component } from 'react';
import {
    Card, CardBody, CardTitle, CardText,
} from 'reactstrap';
import './successPatientCard.css';


export default class SuccessPatientCard extends React.Component {

    render () {
        return (

            <Card style={{display: this.props.successPatientCard ? "block" : "none"}}>
            <CardBody style={{minHeight: 550}}>
                <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Enroll a new patient</CardTitle>
                <CardText>
                    <br />
                    New Patient: {this.props.patient_name} successfully enrolled and registered.
                    <br /><br />
                    An email has been sent to {this.props.patient_email} with their username and password so that they can log-in and use the application.
                    <br />              
                </CardText>
            </CardBody>
        </Card>
        
        )
    }
}