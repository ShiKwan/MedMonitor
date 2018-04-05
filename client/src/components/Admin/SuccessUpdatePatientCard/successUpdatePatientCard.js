import React, { Component } from 'react';
import {
    Card, CardBody, CardTitle, CardText,
    Button,
} from 'reactstrap';
import './successUpdatePatientCard.css';


export default class SuccessUpdatePatientCard extends React.Component {

    render () {
        return (

            <Card style={{display: this.props.successUpdatePatientCard ? "block" : "none"}}>
            <CardBody style={{minHeight: 550}}>
                <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Update patient details</CardTitle>
                <CardText>
                    <br />
                    Patient, {this.props.patient_name}, details have been successfully updated.
                    <br /><br /> <br />      
                </CardText>

                <a href="/admin"><Button style={{marginRight: 6}}>Finish</Button></a>
            </CardBody>
        </Card>
        
        )
    }
}