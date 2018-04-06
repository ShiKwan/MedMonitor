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
import './updatePatientCard.css';


export default class UpdatePatientCard extends React.Component {

    onClicked(id) {
        this.props.updatePatient(id)
    }


    onChanged(event) {
        this.props.handleInputChange(event)
    }


    render () {
        return (

            <Card className="updatePatTableCard TableCard" style={{display: this.props.updatePatientCard ? "block" : "none"}}>
                <CardBody className="updatePatTableBody TableBody">
                    <CardTitle className="updatePatTitle Title">Update Patient Details </CardTitle>
                        <br />

                        <Form className="updatePatForm Form">
                            <FormGroup row>
                                <Label sm={3}>Hospital number</Label>
                                <Label sm={9}>{this.props.patientNumber}</Label>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={3}>Name</Label>
                                <Label sm={9}>{this.props.firstname} {this.props.lastname}</Label>
                            </FormGroup>

                            <FormGroup3_9Contact
                                labelEmail = {"Contact email"}
                                placeholder = {this.props.email}
                                nameEmail = {"dr_email"}
                                valueEmail = {this.props.email}

                                labelPhone = {"Contact phone"}
                                placeholder = {this.props.phone}
                                namePhone = {"dr_phone"}
                                valuePhone = {this.props.phone}
                                
                                onChanged = {(event) => this.onChanged(event)}
                            />

                            <br />
                            <Button className="updatePatUpdateBtn UpdateBtn" onClick={() => this.onClicked(this.props.pt_id)}>Update</Button>
                            <a href="/admin">
                            <Button className="updatePatCancelBtn CancelBtn">Cancel</Button></a>
                        </Form>
                    
                </CardBody>
            </Card>

        )
    }
}           