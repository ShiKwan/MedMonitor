import React, { Component } from 'react';
import {
    Nav, Navbar, NavItem, NavLink, 
    Form, FormGroup, Label, Input, FormText,
    Button, 
    ListGroup, ListGroupItem,
    Container, Row, Col, 
    Card, CardBody, CardTitle, CardSubtitle, CardText,
    Table
} from 'reactstrap';

export default class SuccessEpisode extends React.Component {
    render () {
        return (
           <Card style={{display: this.props.successEpisodeCreatedCard ? "block" : "none", width: "100%"}}>
                <CardBody style={{minHeight: 550}}>
                    <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Confirm New Episode</CardTitle>
                
                    <CardText>
                        A new episode has been successfully created for this patient
                        <br /><br />
                        The patient has been emailed with details
                        <br /><br />
                        Offer to place medication reminders in pts google calander
                    </CardText>

                    <br /><br />
                    <a href={"/admin"}> <Button style={{marginRight: 6}}>Finish</Button></a>
                    
                </CardBody>
            </Card>
        )
    }
}