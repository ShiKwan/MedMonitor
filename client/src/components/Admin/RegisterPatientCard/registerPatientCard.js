import React, { Component } from 'react';
import {
    Container, Row, Col, 
    Button, 
    Card, CardBody, CardTitle, CardText,
    Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';
import FormGroup3_9Input from "../FormGroup/formGroup3_9Input";
import './registerPatientCard.css';



export default class registerPatientCard extends React.Component {

    onClicked(event) {
        this.props.registerPatient(event)
    }


    onChanged(event) {
        this.props.handleInputChange(event)
    }


    render () {
        return (

            <Card className="registNewPatTableCard" style={{display: this.props.registerPatientCard ? "block" : "none"}}>
                <CardBody className="registNewPatTableBody">
                    <CardTitle className="registNewPatTitle">Enroll A New Patient</CardTitle>
                        <br />
                        New patient: {this.props.patient_name} successfully enrolled.
                        <br /><br />
                        You can set a username and password now for this patient now or let the patient rgeister a username and password on first accessing the application. 
                        <br /><br />
    
                        <Form className="registNewPatForm">
                            <FormGroup3_9Input
                                label = {"Username"}
                                type = {"text"}
                                placeholder = {"username"}
                                name = {"pt_username"}
                                value = {this.props.username}
                                onChanged = {(event) => this.onChanged(event)}
                            />
                            <FormGroup3_9Input
                                label = {"Password"}
                                placeholder = {"password"}
                                name = {"pt_password"}
                                value = {this.props.password}
                                onChanged = {(event) => this.onChanged(event)}
                            />

                            <br />
                            <Button className="registNewPatRegistBtn" onClick={(event) => this.onClicked(event)}>Register</Button>
                            <Button className="registNewPatCanelBtn">Cancel</Button>
                        </Form>
                
                </CardBody>
            </Card>

        )
    }
}           