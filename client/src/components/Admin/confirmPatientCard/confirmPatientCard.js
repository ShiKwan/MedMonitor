import React, { Component } from 'react';
import {
    Button, 
    Card, CardBody, CardTitle, CardText,
    Table
} from 'reactstrap';
import './confirmPatientCard.css';

import '../../../pages/Admin';




export default class ConfirmPatientCard extends React.Component {


    onClickedDetails(id) {
        this.props.updatePatientDisplay(id)
    }

    onClickedAppt(id) {
        this.props.updateAppointmentDisplay(id)
    }

    onChanged(event) {
        this.props.handleInputChange(event)
    }


    render () {
        return (

            <Card className="reviewSelPatTableCard TableCard" style={{display: this.props.confirmPatientCard ? "block" : "none"}}>
                <CardBody className="reviewSelPatTableBody TableBody">
                    <CardTitle className="reviewSelPatTitle Title">Review Selected Patient</CardTitle>

                        <br />
                        <Table size="sm">
                            <tr>
                                <td>Hospital Number:</td><td>{this.props.patientNumber}</td>
                            </tr><tr>
                                <td>Name:</td><td>{this.props.firstname}&nbsp;{this.props.lastname}</td>
                            </tr><tr>
                                <td>Date of Birth:</td><td>{this.props.dob}</td>
                            </tr><tr>
                                <td>Enrolled:</td><td>{this.props.dateCreated}</td>
                            </tr><tr>
                                <td>Enrollment status:</td><td>{this.props.active ? "Active" : "Currently inactive"}</td>
                            </tr><tr>
                                <td>Next Appointment:</td><td>{this.props.nextAppt}</td>
                            </tr><tr>
                                <td>E-mail:</td><td>{this.props.email}</td>
                            </tr><tr>
                                <td>Phone:</td><td>{this.props.phone}</td>
                            </tr><tr>
                                <td>Episodes recorded:</td><td>{this.props.patientEpisodesLength}</td>
                            </tr><tr>
                                <td>Start of last Episode:</td><td>{this.props.patientEpisodesStart}</td>
                            </tr><tr>
                                <td>Records in last episode:</td><td>{this.props.recordsLastPatientEpisode}</td>
                            </tr>
                        </Table>

                    <br />
                    <br />
                    <a href={`/admin/Episode?id=${ this.props.patientId }`}>
                        <Button className="reviewSelPatCreateBtn CreateBtn">Create New Episode</Button>
                    </a>
                    <a href={`/admin/Report?id=${ this.props.patientId }`}>
                        <Button className="reviewSelPatReportBtn ReportBtn">Report</Button>
                    </a>
                    <Button className="reviewSelPatUpdateDetailBtn UpdateBtn" onClick={(_id) => this.onClickedDetails(this.props._id)}>Update details</Button>
                    <Button className="reviewSelPatUpdateAppBtn UpdateBtn" onClick={(_id) => this.onClickedAppt(this.props._id)}>Update appointment</Button>
                    <Button className="reviewSelPatCloseBtn CloseBtn">Close</Button>

                </CardBody>
            </Card>

        )
    }
}