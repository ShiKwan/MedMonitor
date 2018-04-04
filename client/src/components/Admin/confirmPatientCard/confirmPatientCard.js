import React, { Component } from 'react';
import {
    Button, 
    Card, CardBody, CardTitle, CardText,
} from 'reactstrap';
import './ConfirmPatientCard.css';



export default class ConfirmPatientCard extends React.Component {
    render () {
        return (

            <Card style={{display: this.props.confirmPatientCard ? "block" : "none"}}>
                <CardBody style={{minHeight: 550}}>
                    <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Review selected patient</CardTitle>

                    <CardText>
                        <br />
                        Hospital Number: {this.props.patientNumber} <br />
                        Name :  {this.props.firstname}&nbsp;{this.props.lastname} <br/>
                        Date of Birth: {this.props.dob} <br /><br />
                        Enrolled: {this.props.dateCreated} <br />
                        Enrollment status: {this.props.active ? "Active" : "Currently inactive"} <br />
                        Next Appointmant: {this.props.nextAppt} <br /><br />
                        E-mail: {this.props.email} <br />
                        Phone: {this.props.phone} <br /><br />
                        Episodes recorded: {this.props.patientEpisodesLength} <br />
                        Start of last Episode: {this.props.patientEpisodesStart} <br />
                        Records in last episode: {this.props.recordsLastPatientEpisode} 
                    </CardText>

                    <br />
                    <br />
                    <a href={`/admin/Episode?id=${ this.props.patientId }`}>
                        <Button style={{marginRight: 6}}>Create new Episode</Button>
                    </a>
                    <a href={`/admin/Report?id=${ this.props.patientId }`}>
                        <Button style={{marginRight: 6}}>Report</Button>
                    </a>
                    <Button style={{marginRight: 6}}>Update details</Button>
                    <Button style={{marginRight: 6}}>Update appointments</Button>
                    <Button style={{marginRight: 6}}>Close</Button>

                </CardBody>
            </Card>

        )
    }
}