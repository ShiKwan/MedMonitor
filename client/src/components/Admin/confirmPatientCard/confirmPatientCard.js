import React, { Component } from 'react';
import {
    Button, 
    Card, CardBody, CardTitle, CardText,
    Table
} from 'reactstrap';
import './confirmPatientCard.css';


export default class confirmPatientCard extends React.Component {

    onClickedDetails(id) {
        this.props.updatePatientDisplay(id)
        }

     onClickedAppt(id) {
         this.props.updateAppointmentDisplay(id)
        }


    render () {
        return (

            <Card style={{display: this.props.confirmPatientCard ? "block" : "none"}}>
                <CardBody style={{minHeight: 550}}>
                    <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Review selected patient</CardTitle>
                    <br />
                    <Table style={{width: 500}}>
                        <tbody>
                            <tr>
                                <td>Hospital number: </td><td>{this.props.patientNumber} </td>
                            </tr><tr>
                                <td>Name :  </td><td>{this.props.firstname}&nbsp;{this.props.lastname} </td>
                            </tr><tr>
                                <td>Date of Birth: </td><td>{this.props.dob} </td>
                            </tr><tr>
                                <td>Enrolled: </td><td>{this.props.dateCreated ? this.props.dateCreated.toString().slice(0,10) : null} </td>
                            </tr><tr>
                                <td>Enrollment status: </td><td>{this.props.active ? "Active" : "Currently inactive"} </td>
                            </tr><tr>
                                <td>Next Appointmant: </td><td>{this.props.nextAppt ? `${this.props.nextAppt.toString().slice(0,10)} at ${this.props.nextAppt.toString().slice(11,16)}` : null} </td>
                            </tr><tr>
                                <td>E-mail: </td><td>{this.props.email} </td>
                            </tr><tr>
                                <td>Phone: </td><td>{this.props.phone} </td>
                            </tr><tr>
                                <td>Episodes recorded: </td><td>{this.props.patientEpisodesLength} </td>
                            </tr><tr>
                                <td>Start of last Episode: </td><td>{this.props.patientEpisodesStart ? `${this.props.patientEpisodesStart.toString().slice(0,10)} at ${this.props.patientEpisodesStart.toString().slice(11,16)}` : null} </td>
                            </tr><tr>
                                <td>Records in last episode: </td><td>{this.props.recordsLastPatientEpisode} </td>
                            </tr>
                        </tbody>
                        
                    </Table>

                    <br />
                    <br />
                    <a href={`/admin/Episode?id=${ this.props.patientId }`}>
                        <Button style={{marginRight: 6}}>Create new Episode</Button>
                    </a>
                    <a href={`/admin/Report?id=${ this.props.patientId }`}>
                        <Button style={{marginRight: 6}}>Report</Button>
                    </a>
                    <Button style={{marginRight: 6}} onClick={(_id) => this.onClickedDetails(this.props._id)}>Update details</Button>
                    <Button style={{marginRight: 6}} onClick={(_id) => this.onClickedAppt(this.props._id)}>Update appointment</Button>
                    <Button style={{marginRight: 6}}>Close</Button>

                </CardBody>
            </Card>

        )
    }
}