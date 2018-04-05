import React, { Component } from 'react';
import {
    Card, CardBody, CardTitle, CardText,
    Button,
} from 'reactstrap';
import './successRemovePhysicianCard.css';


export default class SuccessRemovePhysicianCard extends React.Component {

    render () {
        return (

            <Card className="successRemovePhysTableCard" style={{display: this.props.successRemovePhysicianCard ? "block" : "none"}}>
            <CardBody className="successRemovePhysTableBody">
                <CardTitle className="successRemovePhysTitle">Remove Physician</CardTitle>
                <CardText>
                <br />
                    Dr. {this.props.physician_name} has been successfully enrolled and registered.
                    <br /><br />
                    An email has been sent to {this.props.physician_email} informing them of their removal.
                    <br />      
                </CardText>

                <a href="/admin">
                <Button className="successRemovePhysFinishBtn">Finish</Button></a>
            </CardBody>
        </Card>
        
        )
    }
}