import React, { Component } from 'react';
import {
    Card, CardBody, CardTitle, CardText,
} from 'reactstrap';
import './successPhysicianCard.css';


export default class SuccessPhysicianCard extends React.Component {

    render () {
        return (

            <Card style={{display: this.props.successPhysicianCard ? "block" : "none"}}>
            <CardBody style={{minHeight: 550}}>
                <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Enroll a new patient</CardTitle>
                <CardText>
                    <br />
                    New Physician: {this.props.physician_name} successfully enrolled and registered.
                    <br /><br />
                    An email has been sent to {this.props.physician_email} with their username and password so that they can log-in and use the application.
                    <br />              
                </CardText>
            </CardBody>
        </Card>
        
        )
    }
}