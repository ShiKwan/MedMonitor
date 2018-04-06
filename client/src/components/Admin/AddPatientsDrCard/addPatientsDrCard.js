import React, { Component } from 'react';
import {
    Container, Row, Col, 
    Button, 
    Card, CardBody, CardTitle, CardText,
    Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';
import FormGroup3_9Select from "../FormGroup/formGroup3_9Select";

import './addPatientsDrCard.css';


export default class AddPatientCard extends React.Component {


    onClicked(event) {
        this.props.enrollPatientWithDr(event)
    }

    onChanged(event) {
        this.props.handleInputChange(event)
    }


    render () {
        return (

            <Card className="enrollNewPatTableCard" style={{display: this.props.addPatientsDrCard ? "block" : "none"}}>
                <CardBody className="enrollNewPatTableBody">
                    <CardTitle className="enrollNewPatTitle">Enroll A New Patient</CardTitle>
                        <br />
        
                        <Form className="enrollNewPatForm">

                            <FormGroup3_9Select
                                label="Select patient's primary physician:"
                                name = "pt_physician"
                                //value = {this.props.physician}
                                selectList={this.props.physicians}
                                onChanged = {(event) => this.onChanged(event)}
                            />

                            <br />
                            <Button className="enrollNewPatEnrollBtn" onClick={(event) => this.onClicked(event)}>Submit</Button>
                            <Button className="enrollNewPatCanelBtn">Cancel</Button>
                        </Form>
                    
                </CardBody>
            </Card>

        )
    }
}  