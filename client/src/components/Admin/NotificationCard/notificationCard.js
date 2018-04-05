import React, { Component } from 'react';
import {
    Button, 
    Card, CardBody, CardTitle, CardText,
    Table,
} from 'reactstrap';
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

                        <p className="tableTitle">New patients enrolled past 7 days.</p>

                        {this.props.patientsWeekListLength ? (

                        <Table size="sm" className="patEnrolledTable">
                            <thead>
                                <tr>
                                    <th>Name</th><th>Hosp number</th><th>Date enrolled</th><th>Primary physician</th>
                                </tr>
                            </thead>
                            <tbody className="patEnrolledBody">
                                    {this.props.patientsWeekList.map(item => (

                                    <tr className="patEnrolledDetail" onClick={() => this.onClicked(item._id)}>
                                       
                                            <td>{item.details.first_name} {item.details.last_name}</td>  
                                            
                                            <td>{item.details.patient_number}</td>

                                            <td>{item.appointment.next_appt.toString().slice(0,10)}</td>

                                            <td>Dr. Physician</td>


                                    </tr>
                                ))}
                            </tbody>
                        </Table >

                        ) : (
                            <h3>No patients enrolled past 7 days</h3>
                            )}

                        <p className="tableTitle">Appointments this week</p> 

                        <Table size="sm" className="appThisWeekTable">
                            <thead>
                                <tr>
                                    <th>Name</th><th>Hosp number</th><th>Apptdate</th><th>Appt time</th><th>Primary physician</th>
                                </tr>
                            </thead>
                            <tbody className="appThisWeekPat">
                                    {this.props.apptsList.map(item => (

                                    <tr className="appThisWeekDetail" onClick={() => this.onClicked(item._id)}>
                                        
                                            <td>{item.details.first_name} {item.details.last_name}</td>  
                                            
                                            <td>{item.details.patient_number}</td>

                                            <td>{item.appointment.next_appt.toString().slice(0,10)}</td>

                                            <td>{item.appointment.next_appt.toString().slice(11,16)}</td>

                                            <td>Dr. Physician</td>
                                    
                                    </tr>

                                ))}
                            </tbody>
                        </Table>

                        <p className="tableTitle">Emergency notifications</p>
                        
                        <Table size="sm" className="emergNotifTable">
                            <thead>
                                <tr>
                                    <th>Name</th><th>Hosp number</th><th>Date</th><th>Time</th><th>Type</th><th>Primary physician</th>
                                </tr>
                            </thead>
                            <tbody className="emerNotifPat">
                                
                                    <tr className="emergNotifDetail" onClick={() => this.onClicked()}>

                                            <td> name</td>

                                            <td> hospnumber</td>

                                            <td> date</td>

                                            <td>Time</td>

                                            <td> type</td>

                                            <td>Dr. Physician</td>
                            
                                    </tr>

                            </tbody>
                        </Table>
                        
                </CardBody>
            </Card>
        )
    }
}       