import React, { Component } from 'react';
import {
    Container, Row, Col, 
    Button, 
    Card, CardBody, CardTitle, CardText,
    Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';
import FormGroup3_9Name from "../FormGroup/formGroup3_9Name";
import FormGroup3_9Input from "../FormGroup/formGroup3_9Input";
import FormGroup3_9Contact from "../FormGroup/formGroup3_9Contact";
import './changeAppointmentCard.css';

import '../../../pages/Admin';


export default class ChangeAppointmentCard extends React.Component {

    onClicked(id) {
        this.props.updateAppointment(id)
    }


    onChanged(event) {
        this.props.handleInputChange(event)
    }


    render () {
        return (

            <Card className="updatePatDetailTableCard TableCard" style={{display: this.props.changeAppointmentCard ? "block" : "none"}}>
                <CardBody className="updatePatDetailTableBody TableBody">
                    <CardTitle className="updatePatDetailTitle Title">Update Patient Details </CardTitle>
                        <br />
                        <Form className="updatePatDetailForm Form">

                            <FormGroup row>
                                <Label sm={3}>Hospital number</Label>
                                <Label sm={9}>{this.props.patientNumber}</Label>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={3}>Name</Label>
                                <Label sm={9}>{this.props.nextAppt}</Label>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={3}>Enrollment Status</Label>
                                <Label sm={9}>{this.props.active ? "Active" : "Currently inactive"} </Label>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={3}>Next appointment currently on </Label>
                                <Label sm={9}>{this.props.nextAppt}</Label>
                            </FormGroup>

                            <FormGroup3_9Input
                                label = {"Change next appt to: "}
                                placeholder = {this.props.nextAppt}
                                name = {"pt_appt"}
                                
                                onChanged = {(event) => this.onChanged(event)}
                            />

                            <br />
                            <Button className="updatePatDetailUpdateBtn UpdateBtn" onClick={() => this.onClicked(this.props.pt_id)}>Update</Button>
                            <a href="/admin">
                            <Button className="updatePatDetailCancelBtn CancelBtn">Cancel</Button></a>
                        </Form>
                    
                </CardBody>
            </Card>

        )
    }
}           