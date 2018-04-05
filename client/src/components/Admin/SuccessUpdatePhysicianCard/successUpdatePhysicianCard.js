import React, { Component } from 'react';
import {
    Card, CardBody, CardTitle, CardText,
    Button,
} from 'reactstrap';
import './successUpdatePhysicianCard.css';


export default class SuccessUpdatePhysicianCard extends React.Component {

    render () {
        return (

            <Card className="successUpdatePhysTableCard" style={{display: this.props.successUpdatePhysicianCard ? "block" : "none"}}>
            <CardBody className="suceessUpdatePhysTableBody">
                <CardTitle className="successUpdatePhysTitle">Update Physician Details</CardTitle>
                <CardText>
                    <br />
                    Dr. {this.props.physician_name}'s details have been successfully updated.
                    <br /><br /> <br />      
                </CardText>

                <a href="/admin">
                <Button className="successUpdatePhysFinishBtn">Finish</Button></a>
            </CardBody>
        </Card>
        
        )
    }
}