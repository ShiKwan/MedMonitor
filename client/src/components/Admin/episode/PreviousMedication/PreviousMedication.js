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
import medicationAPI from "../../../../utils/medicationAPI";


export default class PreviousMedication extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dosage : [],
            medication: this.props.medication
        };
        
    }
    handleDosage = (selectedOption) =>{
        console.log("selectedOption : " , selectedOption);
        this.setState({ selectedDosage : `${selectedOption.value}`});
        console.log("new selected time: ", this.state.selectedDosage);
    };
    ComponentDidMount = () => {
        medicationAPI.findOne(this.state.medication)
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
    populateDropDown = (item) => {
        console.log(item);
        let doses = [];
        setTimeout(() => {
        medicationAPI
            .findOne(item)
            .then(data => console.log(data))
            .catch(err => console.log(err));
            },500)
        return(
            
            <Container>Test</Container>
        )
    }


    render () {
        let ddlPreviousTime = [];
        console.log("medication : " + this.props.medication);
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
            <label>Medication</label> <br/>
            {this.props.medication}
            Type: <br />

            <Label>Dose: {this.props.dose}  Form: {this.props.form} Route: {this.props.route}</Label>
            {this.populateDropDown(this.state.medication)}
            <Select 
                name= "previous-medication-intake-time"
                value = {ddlPreviousTime}
                placeholder = 'previous medication intake time'
                onChange = {()=>this.handlePreviousTimeChange()}
                options= {this.props.allTime}
                multi= {true}
            />
            <Button color="success">Edit</Button>
            <Button color="danger">Remove</Button>
            </Container>
        )
    }
}