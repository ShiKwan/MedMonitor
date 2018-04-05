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

            <Card style={{display: this.props.notificationCard ? "block" : "none"}}>
                <CardBody>
                    <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Dashboard</CardTitle>
                    
                        <p>You currently have {this.props.numPatients} patients using this application.</p>
                        <br /> 
                        <p style={{fontWeight: "bold"}}>New patients enrolled past 7 days.</p>

                        {this.props.patientsWeekListLength ? (

                        <Table style={{width: 500}}>
                            <thead>
                                <tr>
                                    <th>Name</th><th>Hosp number</th><th>Date</th><th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {this.props.patientsWeekList.map(item => (

                                    <tr style={{lineHeight: 1}} onClick={() => this.onClicked(item._id)}>
                                        
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
                        <p style={{fontWeight: "bold"}}>Appointments this week</p> 

                        <Table style={{width: 500}}>
                            <thead>
                                <tr>
                                    <th>Name</th><th>Hosp number</th><th>Date</th><th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {this.props.apptsList.map(item => (

                                    <tr style={{lineHeight: 1}} onClick={() => this.onClicked(item._id)}>
                                        
                                            <td>{item.details.first_name} {item.details.last_name}</td>  
                                            
                                            <td>{item.details.patient_number}</td>

                                            <td>{item.appointment.next_appt.toString().slice(0,10)}</td>

                                            <td>{item.appointment.next_appt.toString().slice(11,16)}</td>
                                    
                                    </tr>

                                ))}
                            </tbody>
                        </Table>

                        <br />
                        <p style={{fontWeight: "bold"}}>Emergency notifications</p>
                        
                        <Table style={{width: 500}}>
                            <thead>
                                <tr>
                                    <th>Name</th><th>Hosp number</th><th>Date</th><th>Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                    <tr style={{lineHeight: 1}} onClick={() => this.onClicked()}>

                                            <td>name</td>

                                            <td>hospnumber</td>

                                            <td>date</td>

                                            <td>type</td>
                            
                                    </tr>

                            </tbody>
                        </Table>
                        
                </CardBody>
            </Card>
        )
    }
}       