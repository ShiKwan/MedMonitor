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
import './addPhysicianCard.css';



export default class AddPhysicianCard extends React.Component {

    onClicked(event) {
        this.props.addPhysician(event)
    }


    onChanged(event) {
        this.props.handleInputChange(event)
    }



    render () {
        return (

            <Card className="addNewPhysTableCard" style={{display: this.props.addPhysicianCard ? "block" : "none"}}>
                <CardBody className="addNewPhysTableBody">
                    <CardTitle className="addNewPhysTitle">Add new physician</CardTitle>
                        <br />
        
                        <Form className="addNewPhysForm">

                            <FormGroup3_9Name
                                nameFirstName = {"dr_firstname"}
                                nameLastName = {"dr_lastname"}
                                valueFirstName = {this.props.firstname}
                                valueLastName= {this.props.lastname}
                                onChanged = {(event) => this.onChanged(event)}
                            />

                              <FormGroup3_9Input
                                label = {"Id nmuber"}
                                placeholder = {"id1234"}
                                name = {"dr_idnum"}
                                value = {this.props.hospnum}
                                onChanged = {(event) => this.onChanged(event)}
                            />

                            <FormGroup3_9Input
                                label = {"Office"}
                                placeholder = {"office name & address"}
                                name = {"dr_office"}
                                value = {this.props.dob}
                                onChanged = {(event) => this.onChanged(event)}
                            />

                            <FormGroup3_9Contact
                                labelEmail = {"Contact email"}
                                labelPhone = {"Contact phone"}
                                valueEmail = {this.props.email}
                                nameEmail = {"dr_email"}
                                valuePhone = {this.props.phone}
                                namePhone = {"dr_phone"}
                                onChanged = {(event) => this.onChanged(event)}
                            />

                            <br />
                            <Button className="addNewPhysEnrollBtn" onClick={(event) => this.onClicked(event)}>Enroll</Button>
                            <Button className="addNewphysCanelBtn">Cancel</Button>
                        </Form>
                    
                </CardBody>
            </Card>

        )
    }
}           