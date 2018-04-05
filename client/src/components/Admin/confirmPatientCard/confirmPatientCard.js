import React, { Component } from 'react';
import {
    Button, 
    Card, CardBody, CardTitle, CardText,
    Table
} from 'reactstrap';
import './ConfirmPatientCard.css';



export default class ConfirmPatientCard extends React.Component {
    render () {
        return (

            <Card className="reviewSelPatTableCard" style={{display: this.props.confirmPatientCard ? "block" : "none"}}>
                <CardBody className="reviewSelPatTableBody">
                    <CardTitle className="reviewSelPatTitle">Review Selected Patient</CardTitle>

                    <CardText className="reviewSelPatCard">
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
                        <Button className="reviewSelPatCreateBtn">Create New Episode</Button>
                    </a>
                    <a href={`/admin/Report?id=${ this.props.patientId }`}>
                        <Button className="reviewSelPatReportBtn">Report</Button>
                    </a>
                    <Button className="reviewSelPatUpdateDetailBtn" onClick={(_id) => this.onClickedDetails(this.props._id)}>Update details</Button>
                    <Button className="reviewSelPatUpdateAppBtn" onClick={(_id) => this.onClickedAppt(this.props._id)}>Update appointment</Button>
                    <Button className="reviewSelPatCloseBtn">Close</Button>

                </CardBody>
            </Card>

        )
    }
}