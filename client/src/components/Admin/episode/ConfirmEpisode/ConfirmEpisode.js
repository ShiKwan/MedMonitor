import React, { Component } from 'react';

import '../../../../pages/Admin';

import moment from 'moment';
import {
    Nav, Navbar, NavItem, NavLink, 
    Form, FormGroup, Label, Input, FormText,
    Button, 
    ListGroup, ListGroupItem,
    Container, Row, Col, 
    Card, CardBody, CardTitle, CardSubtitle, CardText,
    Table
} from 'reactstrap';

export default class PatientConfirmEpisode extends React.Component {
    
    render () {
        console.log(this.props);
        return (
            <Card className="confirmNewEpisTableCard TableCard" style={{display: this.props.confirmNewEpisodeDetailsCard ? "block" : "none", width: "100%"}}>
                <CardBody className="confirmNewEpisTableBody TableBody">
                    <CardTitle className="confirmNewEpisTitle Title">Confirm New Episode</CardTitle>
                
                    <CardText>
                        Review new episode details and click submit to creat a new episode
                        <br /><br />
                    </CardText>
                    <ListGroup>
                        <h3>Next Appointment</h3>
                        {this.props.nextAppointment.next_appt ? 
                            <ListGroupItem>
                                Date/time : {this.props.nextAppointment.next_appt}
                            </ListGroupItem>
                            : null}
                        <ListGroupItem>
                            Comments : {this.props.nextAppointment.comments}
                        </ListGroupItem>
                    </ListGroup>
                    {
                        this.props.confirmNewEpisodeDetailsCard && this.props.newEpisode ? 
                            <ListGroup>
                                <h3>Medication Prescribed</h3>
                                {this.props.newEpisode.map( (med, index) =>{
                                    return (
                                        <ListGroupItem key={med.medication}>
                                            Name : {med.medication} <br />
                                            Label : {med.label} <br />
                                            Time :  
                                            {med.times ? 
                                                med.times.map( (time,index) => {
                                                    return(
                                                    <Label key={index}> {time.value ? time.value : time} {index < med.times.length-1 ? "|" : null} </Label>
                                                    )
                                                })
                                            : null
                                            }
                                        </ListGroupItem>
                                    )
                                })}            
                            </ListGroup>
                        : null
                    }

                    <br /><br />
                    <Button className="confirmNewEpisSubmitBtn SubmitBtn" onClick={() =>this.props.createNewEpisode()}>Submit</Button>
                    <a href={"/admin"}> 
                    <Button className="confirmNewEpisBackBtn BackBtn">Back</Button></a> 
                    <a href={"/admin"}> 
                    <Button className="confirmNewEpisCanelBtn CancelBtn">Cancel</Button></a> 
                    
                </CardBody>
            </Card>
        )
    }
}