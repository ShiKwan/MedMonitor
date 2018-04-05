import React, { Component } from 'react';
import './ConfirmEpisode.css';

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
            <Card className="confirmNewEpisTableCard"style={{display: this.props.confirmNewEpisodeDetailsCard ? "block" : "none", width: "100%"}}>
                <CardBody className="confirmNewEpisTableBody">
                    <CardTitle className="confirmNewEpisTitle">Confirm New Episode</CardTitle>
                
                    <CardText>
                        Review new episode details and click submit to creat a new episode
                        <br /><br />
                    </CardText>

                    <br /><br />
                    <Button className="confirmNewEpisSubmitBtn" onClick={() =>this.props.createNewEpisode()}>Submit</Button>
                    <a href={"/admin"}> 
                    <Button className="confirmNewEpisBackBtn">Back</Button></a> 
                    <a href={"/admin"}> 
                    <Button className="confirmNewEpisCanelBtn">Cancel</Button></a> 
                    
                </CardBody>
            </Card>
        )
    }
}