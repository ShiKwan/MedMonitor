import React, { Component } from 'react';

import '../../../../pages/Admin';


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
           <Card className="successNewEpisTableCard TableCard" style={{display: this.props.successEpisodeCreatedCard ? "block" : "none", width: "100%"}}>
                <CardBody className="successNewEpisTableBody TableBody">
                    <CardTitle className="successNewEpisTitle Title">Confirm New Episode</CardTitle>
                
                    <CardText>
                        A new episode has been successfully created for this patient
                        <br /><br />
                        <Container>
                            The patient has been emailed with details
                            <br /><br />
                            Offer to place medication reminders in pts google calander
                        </Container>
                    </CardText>

                    <br /><br />
                    <a href={"/admin"}>
                    <Button className="successNewEpisFinishBtn FinishBtn">Finish</Button></a>
                    
                </CardBody>
            </Card>
        )
    }
}