import React, { Component } from 'react';
import {
    Card, CardBody, CardTitle, CardText,
    Button,
} from 'reactstrap';
import './successChangeAppointmentCard.css';


export default class SuccessChangeAppointmentCard extends React.Component {

    render () {
        return (

            <Card className="succesChangAppTableCard" style={{display: this.props.successChangeAppointmentCard ? "block" : "none"}}>
            <CardBody className="successChangAppTableBody">
                <CardTitle className="successChangAppTitle">Update Next Appointment</CardTitle>
                <CardText>
                    <br />
                    Patient, {this.props.patient_name}, next appointment has been successfully updated.
                    <br /><br /> <br />      
                </CardText>

                <a href="/admin">
                <Button className="successChangAppFinshBtn">Finish</Button></a>
            </CardBody>
        </Card>
        
        )
    }
}