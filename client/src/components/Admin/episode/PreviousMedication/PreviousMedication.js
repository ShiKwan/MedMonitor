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

let medFound = {};
let ddlPreviousDoses = [];
let selectedPreviousDoses = "";
export default class PreviousMedication extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            selectedPreviousDoses : [],
            medication : "",
            time : [],
            allMedications : [],
            allPreviousDoses : [],
            dosageValue : "",
            dosageLabel : "",
            ddlDosage : []
        })
    }
    componentWillReceiveProps(newProp){
        let ddlMedDosage = [];
        this.props.allMedications.map((x) => {
            if(x.name === this.props.medication){
                    ddlMedDosage = x.doses
            }
            
        })
        console.log(ddlMedDosage)
        this.setState({
            medication : this.props.medication,
            time : this.props.previousTimes,
            allMedications : this.props.allMedications,
            allTime : this.props.allTime,
            dosageValue : this.props.value,
            dosageLabel : this.props.label,
            ddlDosage : ddlMedDosage
         })
    }

    removeMedicine = (e) =>{
        e.preventDefault();
        this.setState({
            toRemove: this.props.medication
        });
    }
    editMedicine = (e) => {
        e.preventDefault();
        this.setState({
        })
    }
    handleDosage = (selectedPreviousDoses) =>{
        console.log("selectedOption : " , selectedPreviousDoses);
        this.setState({
            dosageValue : `${selectedPreviousDoses.value}`,
            dosageLabel : `${selectedPreviousDoses.label}`
        });
        console.log("new selected time: ", this.state.dosageValue);
    };
    handlePreviousTimeChange = (selectedOption) => {
        console.log("Selected : " , selectedOption);
        const newSelectedOption = selectedOption
        this.setState({
            time : newSelectedOption
        })
        console.log(this.state.time);
    }
    showState = () => {
        console.log("Show state: " , this.state);
    }
    populateDropDown = (item) => {
       let ddlPreviousTime = [];

        if(medFound.doses && medFound.doses.length >0){
            medFound.doses.map( (item, index) => {
                console.log("medFound: at index" + index , medFound.doses)
                let objPreviousDoses = {
                    value : "",
                    label : ""
                }
                objPreviousDoses.value = index;
                objPreviousDoses.label = `${item.dose} ${item.form} ${item.route}`;
                ddlPreviousDoses.push(objPreviousDoses);
            })
            console.log(`${this.props.dose} ${this.props.form} ${this.props.route}`);
        }
        return(
            <Container>
                <Select 
                    name= "previous-medication-doses"
                    value = {this.state.dosageValue}
                    placeholder = 'previous medication doses'
                    onChange = {this.handleDosage}
                    options= {this.state.ddlDosage}
                />
                <Label>Medication intake time:</Label>
                <Select 
                    name= "previous-medication-intake-time"
                    value = {this.state.time}
                    placeholder = 'previous medication intake time'
                    onChange = {this.handlePreviousTimeChange}
                    options= {this.state.allTime}
                    multi= {true}
                />
            </Container>
        )
    }


    render = () => {
        
        
        return (
            
            <Container style={{display: this.state.toRemove? "none" : "block"}}>
            <Button onClick={this.showState}>Show State</Button>
            <label>Medication</label> <br/>
            {this.props.medication}<br />

            Type: <br /> {this.state.dosageValue}

            <Label>Dose: {this.props.dose}  Form: {this.props.form} Route: {this.props.route}</Label>
            {this.populateDropDown(this.state.medication)}
            
            <Button color="success" onClick={()=> this.EditMedicine()}>Edit</Button>
            <Button color="danger" onClick={()=>this.removeMedicine()}>Remove</Button>
            </Container>
        )
    }
}