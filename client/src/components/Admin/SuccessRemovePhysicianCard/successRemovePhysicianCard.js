import React, { Component } from 'react';
import {
    Card, CardBody, CardTitle, CardText,
    Button,
} from 'reactstrap';
import './successRemovePhysicianCard.css';


export default class SuccessRemovePhysicianCard extends React.Component {

    render () {
        return (

            <Card style={{display: this.props.successRemovePhysicianCard ? "block" : "none"}}>
            <CardBody style={{minHeight: 550}}>
                <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Remove Physician</CardTitle>
                <CardText>
                <br />
                    Dr. {this.props.physician_name} has been successfully enrolled and registered.
                    <br /><br />
                    An email has been sent to {this.props.physician_email} informing them of their removal.
                    <br />      
                </CardText>

                <a href="/admin"><Button style={{marginRight: 6}}>Finish</Button></a>
            </CardBody>
        </Card>
        
        )
    }
}