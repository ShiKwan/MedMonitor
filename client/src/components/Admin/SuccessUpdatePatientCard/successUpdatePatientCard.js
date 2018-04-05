import React, { Component } from 'react';
import {
    Card, CardBody, CardTitle, CardText,
    Button,
} from 'reactstrap';
import './successUpdatePatientCard.css';


export default class SuccessUpdatePatientCard extends React.Component {

    render () {
        return (

            <Card className="successUpdatePatTableCard" style={{display: this.props.successUpdatePatientCard ? "block" : "none"}}>
            <CardBody className="successUpdatePatTableBody">
                <CardTitle className="successUpdatePatTitle">Update Patient Details</CardTitle>
                <CardText>
                    <br />
                    Patient, {this.props.patient_name}, details have been successfully updated.
                    <br /><br /> <br />      
                </CardText>

                <a href="/admin">
                <Button className="successUpdatePatFinishBtn">Finish</Button></a>
            </CardBody>
        </Card>
        
        )
    }
}