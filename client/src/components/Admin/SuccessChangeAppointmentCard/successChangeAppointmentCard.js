import React, { Component } from 'react';
import {
    Card, CardBody, CardTitle, CardText,
    Button,
} from 'reactstrap';
import './successChangeAppointmentCard.css';


export default class SuccessChangeAppointmentCard extends React.Component {

    render () {
        return (

            <Card style={{display: this.props.successChangeAppointmentCard ? "block" : "none"}}>
            <CardBody style={{minHeight: 550}}>
                <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Update next appointment</CardTitle>
                <CardText>
                    <br />
                    Patient, {this.props.patient_name}, next appointment has been successfully updated.
                    <br /><br /> <br />      
                </CardText>

                <a href="/admin"><Button style={{marginRight: 6}}>Finish</Button></a>
            </CardBody>
        </Card>
        
        )
    }
}