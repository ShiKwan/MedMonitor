import React, { Component } from 'react';
import {
    Container, Row, Col, 
    Button, 
    Card, CardBody, CardTitle, CardText,
    Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';

export default class PatientInfo extends React.Component {

        render () {
        return (

            <Container>
                <Label>
                    Patient No : this.props.patientNumber {this.props.patientNumber}
                </Label><br />
                <Label>
                    Patient Name : this.props.firstName this.props.lastName {this.props.firstName}, {this.props.lastName}
                </Label>
            </Container>

        )
    }
}           