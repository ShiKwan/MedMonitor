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

export default class PatientConfirmEpisode extends React.Component {
    render () {
        return (
            <Card style={{display: this.props.confirmNewEpisodeDetailsCard ? "block" : "none", width: "100%"}}>
                <CardBody style={{minHeight: 550}}>
                    <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Confirm New Episode</CardTitle>
                
                    <CardText>
                        Review new episode details and click submit to creat a new episode
                        <br /><br />
                    </CardText>

                    <br /><br />
                    <Button style={{marginRight: 6}} onClick={() =>this.props.createNewEpisode()}>Here Submit</Button>
                    <a href={"/admin"}> <Button style={{marginRight: 6}}>Back</Button></a> 
                    <a href={"/admin"}> <Button style={{marginRight: 6}}>Cancel</Button></a> 
                    
                </CardBody>
            </Card>
        )
    }
}