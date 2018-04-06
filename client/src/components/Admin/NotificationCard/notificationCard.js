import React, { Component } from 'react';
import {
    Button, 
    Card, CardBody, CardTitle, CardText,
    Table,
} from 'reactstrap';
import moment from "moment";
import './notificationCard.css';



export default class confirmPatientCard extends React.Component {

    onClicked(id) {
        this.props.confirmPatient(id);
    }


    render () {
        return (

            <Card className="dashboardTableCard" style={{display: this.props.notificationCard ? "block" : "none"}}>
                <CardBody className="dashboardTableBody">
                    <CardTitle className="dashboardTitle">Dashboard</CardTitle>
                    
                        <p className="tableTitle">You currently have {this.props.numPatients} patients using this application.</p> 
                        <div>
                            <p className="tableTitle">New patients enrolled past 7 days.</p>
                            {this.props.patientsWeekListLength ? (

                                <Table size="sm" className="patEnrolledTable">
                                    <thead>
                                        <tr>
                                            <th>Name</th><th>Hosp number</th><th>Enrolled</th><th>Primary physician</th>
                                        </tr>
                                    </thead>
                                    <tbody className="patEnrolledBody">
                                        {this.props.patientsWeekList.map(item => (

                                            <tr className="patEnrolledDetail" onClick={() => this.onClicked(item._id)}>
                                                <td>{item.details.first_name} {item.details.last_name}</td>  
                                                <td>{item.details.patient_number}</td>
                                                <td>{moment(item.date_created).format("MMMM Do YYYY")} ({moment(item.date_created).format("h:mm a")}) </td> 
                                                <td>Dr. Physician</td>
                                            </tr>
                                        ))}
                                    </tbody>
                            </Table >

                            ) : (
                                <p>No patients enrolled past 7 days</p>
                                )}
                        </div>

                        <p className="tableTitle">Appointments this week</p> 
                        {this.props.apptsList.length ? (

                            <Table size="sm" className="appThisWeekTable">
                                <thead>
                                    <tr>
                                        <th>Name</th><th>Hosp number</th><th>Appointment</th><th>Primary physician</th>
                                    </tr>
                                </thead>
                                <tbody className="appThisWeekPat">

                                        {this.props.apptsList.map(item => (

                                        <tr className="appThisWeekDetail" onClick={() => this.onClicked(item._id)}>
                                            <td>{item.details.first_name} {item.details.last_name}</td>  
                                            <td>{item.details.patient_number}</td>
                                            <td>{moment(item.nextAppt).format("dddd, MMMM Do YYYY")} at  {moment(item.nextAppt).format("h:mm a")}</td> 

                                            <td>Dr. Physician</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>

                        ) : (
                        <p>No appointments this week</p>
                        )}

                        <p className="tableTitle">Emergency notifications</p>
                        
                        <Table size="sm" className="emergNotifTable">
                            <thead>
                                <tr>
                                    <th>Name</th><th>Hosp number</th><th>Emergency</th><th>Date</th><th>Time</th><th>Primary physician</th>
                                </tr>
                            </thead>
                            <tbody className="emerNotifPat">
                                <tr className="emergNotifDetail" onClick={() => this.onClicked()}>
                                    <td> name</td>
                                    <td> hospnumber</td>
                                    <td> alert</td>
                                    <td> date</td>
                                    <td> time</td>
                                         {/* <td>{moment(item............).format("dddd, MMMM Do YYYY")}</td> 
                                         <td>{moment(item.............).format("h:mm a")}</td> */}
                                    <td>Dr. Physician</td>
                                </tr>
                            </tbody>
                        </Table>
                        
                </CardBody>
            </Card>
        )
    }
}       