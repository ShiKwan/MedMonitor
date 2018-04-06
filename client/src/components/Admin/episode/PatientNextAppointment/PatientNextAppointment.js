import React, { Component } from 'react';
import DatetimePicker from 'react-datetime';
import {
    Nav, Navbar, NavItem, NavLink, 
    Form, FormGroup, Label, Input, FormText,
    Button, 
    ListGroup, ListGroupItem,
    Container, Row, Col, 
    Card, CardBody, CardTitle, CardSubtitle, CardText,
    Table
} from 'reactstrap';
import './PatientNextAppointment.css';
import moment from "moment";
import mailerAPI from "../../../../utils/nodemailerAPI";
import { Value } from 'react-select';

export default class PatientNextAppointment extends React.Component {
    state = {
        next_appt : '',
        comments : '',
        date : moment().add(2,'day').format("YYYY-MM-DD"),
        time : moment().format("HH:mm"),

    }
    handleSubmit = () =>{
        if(this.validateDate(this.state.date, this.state.time)){
            this.setState({
                next_appt : moment(this.state.date + " " + this.state.time).format("dddd, MMMM Do YYYY h:mm a")
            },function(){
                this.props.handleApptCallback(this.state);
                this.props.confirmNewEpisodeDetails();
                mailerAPI.sendToPatient({
                    subject : "MedMonitor - Appointment Created",
                    name: this.props.first_name + ", " + this.props.last_name,
                    email: this.props.email,
                    message:
                        `
                        Dear ${this.props.first_name} ${this.props.last_name},
                        We have scheduled an appointment for you with ${this.props.patientLastEpisode.doctor} on ${moment(this.state.next_appt).format()}. 
                        These are the comment from your doctor: 
                        
                        ${this.state.comments}

                        As we are progressing through your health wealthness, we would like to remind you to keep track of your wellness frequently with our application.
                        If you need a reminder for medication time for current episode and appointment time, please visit the application. 
                        
                        From:

                        MedMonitor
                        `
                })
                    .then(res => {
                        console.log(res);
                    })
                    .catch(err => {
                        console.log(err);
                    });
                })
        }
    }
    validateDate = (date, time) => {
        let valid = true
        if(date && time){
            console.log("Date and time : " , date, time)
            if(moment(date).isAfter(moment())){
                console.log("date is later than today. ")
                this.setState({
                    next_appt : moment(date + " " + time).format("dddd, MMMM Do YYYY h:mm a")
                }, function() {
                    console.log("state in next appointment : ", this.state);
                    this.props.getBackMessage(null)
                    this.props.getBackMessageStatus(null)
                })
            }else{
                this.props.getBackMessage("Date must be later than today.")
                this.props.getBackMessageStatus("danger")
                valid = false;
            }
        }else{
            this.props.getBackMessage("Date/time cannot be empty.")
                this.props.getBackMessageStatus("danger")
                valid = false;
        }
        return valid;
        //this.setState({ next_appt : date._d.toString() }, () => console.log(this.state.next_appt));
    };
    // Form handlers
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(event.target.value);
    };

    render () {
        return (
            <Card className="nextAppTableCard TableCard" style={{display: this.props.addNextAppointmentCard ? "block" : "none"}}>
                <CardBody className="nextAppTableBody TableBody">
                    <CardTitle className="nextAppTitle Title">Enter Next Appointment</CardTitle>
                
                    <CardText>
                        Enter the time of this patients next appointment and any comments for the patient to view.
                    </CardText>
                    <Container>
                        <Label>Date: </Label>
                        <Input type='date' name='date' onChange={this.handleInputChange} value={this.state.date} />
                        <Label>Time: </Label>
                        <Input type='time' name='time' onChange={this.handleInputChange} value={this.state.time} /> 
                    </Container>

                    <br />
                    
                    <Label>
                        Notes for patient:
                    </Label>
                    <Input type="text" name='comments' onChange={this.handleInputChange} placeholder='reminder or notes for patient' />

                    <br />

                    <Button className="nextAppNextBtn NextBtn" onClick={() => this.handleSubmit()}>Next</Button>
                    <a href={"/admin"}> 
                    <Button className="nextAppCancelBtn CancelBtn" style={{marginRight: 6}}>Cancel</Button></a> 
                    
                </CardBody>
            </Card>
        )
    }
}