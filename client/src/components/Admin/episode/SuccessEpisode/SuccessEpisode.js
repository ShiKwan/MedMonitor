import React, { Component } from 'react';
import './SuccessEpisode.css';

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
           <Card className="successNewEpisTableCard" style={{display: this.props.successEpisodeCreatedCard ? "block" : "none", width: "100%"}}>
                <CardBody className="successNewEpisTableBody">
                    <CardTitle className="successNewEpisTitle">Confirm New Episode</CardTitle>
                
                    <CardText>
                        A new episode has been successfully created for this patient
                        <br /><br />
                        The patient has been emailed with details
                        <br /><br />
                        Offer to place medication reminders in pts google calander
                    </CardText>

                    <br /><br />
                    <a href={"/admin"}>
                    <Button className="successNewEpisFinishBtn">Finish</Button></a>
                    
                </CardBody>
            </Card>
        )
    }
}