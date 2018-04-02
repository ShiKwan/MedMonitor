import React, { Component } from 'react';
import Select, {Async} from 'react-select';
import {
    Nav, Navbar, NavItem, NavLink, 
    Form, FormGroup, Label, Input, FormText,
    Button, 
    ListGroup, ListGroupItem,
    Container, Row, Col, 
    Card, CardBody, CardTitle, CardSubtitle, CardText,
    Table
} from 'reactstrap';


export default class PatientMedications extends React.Component {
    render () {
        let ddlPreviousTime = [];
        {
            console.log(this.props.previousTimes)
            {this.props.previousTimes.map( (item, index) =>
                {                    
                    let objPreviousTime = {
                        value : "",
                        label : ""
                    };
                    objPreviousTime.value = index;
                    objPreviousTime.label = `${item}`;
                    ddlPreviousTime.push(objPreviousTime);
                }   
            )}
        }
        return (

            <Container>
            <label>Medication</label>
            <Select 
                name= "medication-name"
                value = {this.props.medication}
                onChange = {this.props.handleNewChange}
                options= {this.props.ddlMedications}
            />
            Type: <br />
            <Label>Dose: {this.props.dose}  Form: {this.props.form} Route: {this.props.route}</Label>
            
            <Select 
                name= "previous-medication-intake-time"
                value = {ddlPreviousTime}
                placeholder = 'previous medication intake time'
                onChange = {()=>this.handlePreviousTimeChange()}
                options= {this.props.allTime}
                multi= {true}
            />
            </Container>
        )
    }
}