import React, { Component } from 'react';
import './ConfirmEpisode.css';

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

export default class PatientConfirmEpisode extends React.Component {
    render () {
        return (
            <Card className="confirmNewEpisTableCard TableCard" style={{display: this.props.confirmNewEpisodeDetailsCard ? "block" : "none", width: "100%"}}>
                <CardBody className="confirmNewEpisTableBody TableBody">
                    <CardTitle className="confirmNewEpisTitle Title">Confirm New Episode</CardTitle>
                
                    <CardText>
                        Review new episode details and click submit to creat a new episode
                        <br /><br />
                    </CardText>

                    <br /><br />
                    <Button className="confirmNewEpisSubmitBtn SubmitBtn" onClick={() =>this.props.createNewEpisode()}>Submit</Button>
                    <a href={"/admin"}> 
                    <Button className="confirmNewEpisBackBtn BackBtn">Back</Button></a> 
                    <a href={"/admin"}> 
                    <Button className="confirmNewEpisCanelBtn CancelBtn">Cancel</Button></a> 
                    
                </CardBody>
            </Card>
        )
    }
}