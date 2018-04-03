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
let ddlDosage = [];
let selectedPreviousDoses = "";
export default class PreviousMedication extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            patientLastEpisodeMedications : [],
            selectedPreviousDoses : [],
            medication : "",
            times : [],
            allMedications : [],
            allPreviousDoses : [],
            dosageValue : "",
            dosageLabel : ""
        })
    }
    componentWillReceiveProps(newProp){
        console.log("allMedication", this.props.allMedications);
        console.log("this med:", this.props.medication);
        
        this.setState({
            patientLastEpisodeMedications : this.props.patientLastEpisodeMedications,
            medication : this.props.medication,
            times : this.props.previousTimes,
            allMedications : this.props.allMedications,
            allTime : this.props.allTime,
            dosageValue : this.props.value,
            dosageLabel : this.props.label,
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
        let newPatientLastEpisodeMedications = this.state.patientLastEpisodeMedications;
        newPatientLastEpisodeMedications.value  = `${selectedPreviousDoses.value}`,
        newPatientLastEpisodeMedications.label  = `${selectedPreviousDoses.label}`
        console.log("selectedOption : " , selectedPreviousDoses);
        this.setState({
            patientLastEpisodeMedications : newPatientLastEpisodeMedications,
            dosageValue : `${selectedPreviousDoses.value}`,
            dosageLabel : `${selectedPreviousDoses.label}`
        });
        console.log("new selected time: ", this.state.dosageValue);
    };
    handlePreviousTimeChange = (selectedOption) => {
        console.log("Selected : " , selectedOption);
        const newSelectedOption = selectedOption
        this.setState({
            times : newSelectedOption
        })
        console.log(this.state.times);
    }
    showState = () => {
        console.log("Show state: " , this.state);
        console.log("Show comp")
    }
    renderState = (value, label) =>{
        this.setState({
            selectedValue : value,
            selectedLabel : label
        })
    }

    populateDropDown = (item) => {
        console.log("in populatedropdown, item" , item);
        
        let ddlDosage = [];
        this.state.allMedications.map((med, index) =>{
            if(med.name === item){
                console.log("found med");
                ddlDosage = med.doses;
            }
        } )
        console.log("ddlDosage state :", ddlDosage);
        return(ddlDosage)
    }


    render(){

            return(
            this.state.patientLastEpisodeMedications.map( (x,index) =>    
                <Container key={index} style={{display: this.state.toRemove? "none" : "block"}}>
                <Button onClick={this.showState}>Show State</Button>
                <label>Medication</label> <br/>
                {x.medication}<br />

                Doses: <br /> {this.state.label}

                <Label>Dose: {x.dose}  Form: {x.form} Route: {x.route}</Label>

                <Select 
                    key = {x.medication}
                    name= {x.medication}
                    value = {this.state.dosageValue? this.state.dosageValue : x.value}
                    placeholder = 'previous medication doses'
                    onChange = {this.handleDosage}
                    options= {this.populateDropDown(x.medication)}
                />
                <Label>Medication intake time:</Label>
                <Select 
                    key= {`${x.medication}-times`}
                    name= {`${x.medication}-times`}
                    value = {this.state.times? this.state.times : x.times}
                    placeholder = 'previous medication intake time'
                    onChange = {this.handlePreviousTimeChange}
                    options= {this.props.allTime}
                    multi= {true}
                />
                
                <Button color="success" onClick={()=> this.EditMedicine()}>Edit</Button>
                <Button color="danger" onClick={()=>this.removeMedicine()}>Remove</Button>
                </Container>
            )
            
        )
        
    }
}