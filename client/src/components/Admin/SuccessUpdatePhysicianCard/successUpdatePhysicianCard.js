import React, { Component } from 'react';
import {
    Card, CardBody, CardTitle, CardText,
    Button,
} from 'reactstrap';
import './successUpdatePhysicianCard.css';


export default class SuccessUpdatePhysicianCard extends React.Component {

    render () {
        return (

            <Card style={{display: this.props.successUpdatePhysicianCard ? "block" : "none"}}>
            <CardBody style={{minHeight: 550}}>
                <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Update physician details</CardTitle>
                <CardText>
                    <br />
                    Dr. {this.props.physician_name}'s details have been successfully updated.
                    <br /><br /> <br />      
                </CardText>

                <a href="/admin"><Button style={{marginRight: 6}}>Finish</Button></a>
            </CardBody>
        </Card>
        
        )
    }
}