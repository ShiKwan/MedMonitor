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

            <Card className="dashboradTableCard" style={{display: this.props.notificationCard ? "block" : "none"}}>
                <CardBody className="dashboardTableBody">
                    <CardTitle className="dashboardTitle">Dashboard</CardTitle>
                    
                        <p>You currently have {this.props.numPatients} patients using this application.<br /> 
                        </p>

                    
                        <p className="tableTitle">New patients enrolled past 7 days.</p>

                        {this.props.patientsWeekListLength ? (

                        <Table className="patEnrolledTable">
                            <thead>
                                <tr>
                                    <th>Name</th><th>Hosp number</th><th>Date</th><th>Time</th>
                                </tr>
                            </thead>
                            <tbody className="patEnrolledBody">
                                    {this.props.patientsWeekList.map(item => (

                                    <tr className="patEnrolledDetail" onClick={() => this.onClicked(item._id)}>
                                       
                                            <td>{item.details.first_name} {item.details.last_name}</td>  
                                            
                                            <td>{item.details.patient_number}</td>

                                            <td>{item.appointment.next_appt.toString().slice(0,10)}</td>

                                            <td>{item.appointment.next_appt.toString().slice(11,16)}</td>
                                    
                                    </tr>

                                ))}
                            </tbody>
                        </Table >

                        ) : (
                            <h3>No patients enrolled past 7 days</h3>
                            )}

                        <br />
                        <p className="tableTitle">Appointments this week</p> 

                        <Table className="appThisWeekTable">
                            <thead>
                                <tr>
                                    <th>Name</th><th>Hosp number</th><th>Date</th><th>Time</th>
                                </tr>
                            </thead>
                            <tbody className="appThisWeekPat">
                                    {this.props.apptsList.map(item => (

                                    <tr className="appThisWeekDetail" onClick={() => this.onClicked(item._id)}>
                                        
                                            <td>{item.details.first_name} {item.details.last_name}</td>  
                                            
                                            <td>{item.details.patient_number}</td>

                                            <td>{item.appointment.next_appt.toString().slice(0,10)}</td>

                                            <td>{item.appointment.next_appt.toString().slice(11,16)}</td>
                                    
                                    </tr>

                                ))}
                            </tbody>
                        </Table>

                        <br />
                        <p className="tableTitle">Emergency notifications</p>
                        
                        <Table className="emergNotifTable">
                            <thead>
                                <tr>
                                    <th>Name</th><th>Hosp number</th><th>Date</th><th>Type</th>
                                </tr>
                            </thead>
                            <tbody className="emerNotifPat">
                                
                                    <tr className="emergNotifDetail" onClick={() => this.onClicked()}>

                                            <td> name</td>

                                            <td> hospnumber</td>

                                            <td> date</td>

                                            <td> type</td>
                            
                                    </tr>

                                
                            </tbody>
                        </Table>
                        
                </CardBody>
            </Card>
        )
    }
}       