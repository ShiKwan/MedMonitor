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
                <p>
                    Hospital No : {this.props.patientNumber}
                    <br />
                    Patient Name : {this.props.lastName}, {this.props.firstName}
                </p>
            </Container>

        )
    }
}           