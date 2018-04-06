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
import './addPatientsDrCard.css';


export default class AddPatientCard extends React.Component {

    onClicked(event) {
        this.props.enrollPatient(event)
    }

    onChanged(event) {
        this.props.handleInputChange(event)
    }


    render () {
        return (

            <Card className="enrollNewPatTableCard" style={{display: this.props.addPatientCard ? "block" : "none"}}>
                <CardBody className="enrollNewPatTableBody">
                    <CardTitle className="enrollNewPatTitle">Enroll A New Patient</CardTitle>
                        <br />
        
                        <Form className="enrollNewPatForm">

                            {/* <FormSelect3_9Physician
                                name =
                                value = 
                                onChanged = {(event) => this.onChanged(event)}
                            /> */}


                            <br />
                            <Button className="enrollNewPatEnrollBtn" onClick={(event) => this.onClicked(event)}>Enroll</Button>
                            <Button className="enrollNewPatCanelBtn">Cancel</Button>
                        </Form>
                    
                </CardBody>
            </Card>

        )
    }
}  