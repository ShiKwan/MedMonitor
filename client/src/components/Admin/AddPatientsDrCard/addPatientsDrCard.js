import React, { Component } from 'react';
import {
    Container, Row, Col, 
    Button, 
    Card, CardBody, CardTitle, CardText,
    Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';

import FormGroup3_9Select from "../FormGroup/formGroup3_9Select";


import '../../../pages/Admin';


export default class AddPatientCard extends React.Component {


    onClicked(event) {
        this.props.enrollPatientWithDr(event)
    }

    onChanged(event) {
        this.props.handleInputChange(event)
    }


    render () {
        return (

            <Card className="enrollNewPatTableCard TableCard" style={{display: this.props.addPatientCard ? "block" : "none"}}>
                <CardBody className="enrollNewPatTableBody TableBody">
                    <CardTitle className="enrollNewPatTitle Title">Enroll A New Patient</CardTitle>

                        <br />
        
                        <Form className="enrollNewPatForm Form">

                            <FormGroup3_9Select

                                label="Select patient's primary physician:"
                                firstOption="select physician"
                                name = "pt_physician"
                                selectList={this.props.physicians}
                                onChanged = {(event) => this.onChanged(event)}
                            />

                            <br />

                            <Button className="enrollNewPatEnrollBtn EnrollBtn" onClick={(event) => this.onClicked(event)}>Enroll</Button>
                            <Button className="enrollNewPatCanelBtn CancelBtn">Cancel</Button>

                        </Form>
                    
                </CardBody>
            </Card>

        )
    }
}  