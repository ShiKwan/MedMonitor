import React, { Component } from 'react';
import Select, {Async} from 'react-select';
import medicationAPI from "../../../../utils/medicationAPI"
import 'react-select/dist/react-select.css';
import PreviousMedication from "../PreviousMedication"

import {
    Nav, Navbar, NavItem, NavLink, 
    Form, FormGroup, Label, Input, FormText,
    Button, 
    ListGroup, ListGroupItem,
    Container, Row, Col, 
    Card, CardBody, CardTitle, CardSubtitle, CardText,
    Table
} from 'reactstrap';
let ddlSelectedDoses = [];
const ddlMedications = [];
const ddlTime = [
    {value: '0000', label: '12:00am'},
    {value: '0100', label: '1:00am'},
    {value: '0200', label: '2:00am'},
    {value: '0300', label: '3:00am'},
    {value: '0400', label: '4:00am'},
    {value: '0500', label: '5:00am'},
    {value: '0600', label: '6:00am'},
    {value: '0700', label: '7:00am'},
    {value: '0800', label: '8:00am'},
    {value: '0900', label: '9:00am'},
    {value: '1000', label: '10:00am'},
    {value: '1100', label: '11:00am'},
    {value: '1200', label: '12:00pm'},
    {value: '1300', label: '1:00pm'},
    {value: '1400', label: '2:00pm'},
    {value: '1500', label: '3:00pm'},
    {value: '1600', label: '4:00pm'},
    {value: '1700', label: '5:00pm'},
    {value: '1800', label: '6:00pm'},
    {value: '1900', label: '7:00pm'},
    {value: '2000', label: '8:00pm'},
    {value: '2100', label: '9:00pm'},
    {value: '2200', label: '10:00pm'},
    {value: '2300', label: '11:00pm'}
];

export default class PatientMedications extends React.Component {
    constructor(props){
        super(props);   
        this.state= {
            patientMedications : [],
            selectedOption : "",
            selectedTime : [],
            drugType: "",
            drugDoses: [],
            ddlSelectedDoses : []
        }
    }
    onGenerateMedications= () => {
        console.log("this patient previous med: " , this.props.patientLastEpisodeMedications);
        console.log("all meds : ", this.props.medications);
        console.log("ddl Medications: " , ddlMedications);
    }

    handleNewChange = (selectedOption) => {
        this.setState({
            selectedOption: `${selectedOption.label}`
        });
        console.log(`Selected: ${selectedOption.label}`);
        console.log("selected med state: " , this.state.selectedOption)
    }

    handleChange = (item) => {
        console.log(item);
        this.setState({selectedOption: item.label},function(){
            console.log(`Selected: ${item.label}`);
            console.log("selected med state: " , this.state)
            medicationAPI.findOne(this.state.selectedOption)
                        .then(med => {
                            console.log(med.data[0]);
                            this.setState({
                                drugType: med.data[0].type,
                                drugDoses : med.data[0].doses
                            }, function(){
                                ddlSelectedDoses = [];
                                this.state.drugDoses.map((x,index) => {
                                    const objSelectedDoses = {
                                        value: "",
                                        label: ""
                                    }
                                    objSelectedDoses.label = `${x.dose} ${x.form} ${x.route}`;
                                    objSelectedDoses.value = index;
                                    ddlSelectedDoses.push(objSelectedDoses);
                                    this.setState({ddlSelectedDoses})
                                })
                                console.log("ddlSelectedDoses populated, ", ddlSelectedDoses);
                            })
                            console.log("after find one med :", this.state);
                        })
                        .catch(err => console.log(err));
        });
        
    }

    handleTimeChange = (selectedOption) => {
        console.log("selectedOption : " , selectedOption);
        this.setState({ selectedTime : selectedOption });
        console.log("new selected time: ", this.state.selectedTime);
    }
    handlePreviousTimeChange = (selectedOption) => {
        console.log("selectedOption : " , selectedOption);
        this.setState({ selectedTime : selectedOption });
        console.log("new selected time: ", this.state.selectedTime);
    }

    
    render () {
        setTimeout(() => {},500)

        this.props.medications.map(x => {
            //console.log(x.name);
            const objMedication = {
                                value : "",
                                label : ""
                            }
            objMedication.value= x.name;
            objMedication.label= x.name;
            ddlMedications.push(objMedication)
        })
        
        return (


            <Container fluid className="text-center">
                <Row>
                    <Col className='md-12'>
                        <Card style={{display: this.props.addEpisodeMedicationsCard ? "block" : "none"}}>
                            <Button onClick ={()=> this.onGenerateMedications()}> </Button>
                            <CardBody style={{minHeight: 550}}>
                                <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Enter patient medications</CardTitle>
                            
                                <CardText>
                                    Enter each Parkinsons medication with doses, and times that the patient will take during the next episode.
                                </CardText>
                                <h2>Previous medication(s)</h2>
                                {this.props.patientLastEpisodeMedications ?
                                    <Container>
                                        {this.props.patientLastEpisodeMedications.map(x => 
                                            <PreviousMedication 
                                                name="medication-name"
                                                value = {x.medication}
                                                handleNewChange = {this.handleNewChange}
                                                ddlMedications = {ddlMedications}
                                                dose = {x.dose}
                                                form = {x.form}
                                                route = {x.route}
                                                previousTimes = {x.times}
                                                handlePreviousTimeChange = {this.handlePreviousTimeChange}
                                                allTime = {ddlTime}
                                            />
                                        )}
                                    </Container>
                                : null
                                }

                                <h2>New medication(s)</h2>
                                <Container>
                                {this.props.medications ? 
                                    <Container>
                                    Medication: 
                                    <Select 
                                        name= "medication-name"
                                        placeholder = "new medication..."
                                        value = {this.state.selectedOption}
                                        onChange = {this.handleChange}
                                        options= {ddlMedications}
                                    /><hr/>
                                    Type : {this.state.drugType} <br />
                                    Doses : --- TO DO --- (Apply value here once a new medicine is selected) <br />
                                    {
                                        this.state.drugDoses.length > 0 ? 
                                            <Select
                                                name = "new-med-dosage"
                                                value = {this.state.selectedDosage}
                                                placeholder = 'medication dosage'
                                                onChange = {this.handleDosageChange}
                                                options = {ddlSelectedDoses}
                                            />
                                        : null 
                                    }<hr />
                                    Medication intake time:
                                    <Select 
                                        name= "medication-intake-time"
                                        value = {this.state.selectedTime}
                                        placeholder = 'medication intake time'
                                        onChange = {this.handleTimeChange}
                                        options= {ddlTime}
                                        multi= {true}
                                    />
                                    <br /> <Button color="success">Add</Button>
                                    
        {/* 
        {this.props.medications.map(x => 
            <ul>
                <li>{x.name}
                    <li>{x.type}</li>
                    {x.doses.map( item => 
                        <ul>
                            <li>dose : {item.dose}</li>
                            <li>form : {item.form}</li>
                            <li>route : {item.route}</li>
                        </ul>
                    )}
                </li>
                
                
            </ul>
        )} */}
                                    </Container>
                                    : null}
                                </Container>
                                <br /><br />
                                <Button style={{marginRight: 6}} onClick={() => this.props.enterNextAppointment()}>Here Next</Button>
                                <a href={"/admin"}> <Button style={{marginRight: 6}}>Cancel</Button></a> 

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}