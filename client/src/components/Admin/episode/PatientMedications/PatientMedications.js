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
    {value: '0000',test:'test', label: '12:00am'},
    {value: '0100',test:'test', label: '1:00am'},
    {value: '0200',test:'test', label: '2:00am'},
    {value: '0300',test:'test', label: '3:00am'},
    {value: '0400',test:'test', label: '4:00am'},
    {value: '0500',test:'test', label: '5:00am'},
    {value: '0600',test:'test', label: '6:00am'},
    {value: '0700',test:'test', label: '7:00am'},
    {value: '0800',test:'test', label: '8:00am'},
    {value: '0900',test:'test', label: '9:00am'},
    {value: '1000',test:'test', label: '10:00am'},
    {value: '1100',test:'test', label: '11:00am'},
    {value: '1200',test:'test', label: '12:00pm'},
    {value: '1300',test:'test', label: '1:00pm'},
    {value: '1400',test:'test', label: '2:00pm'},
    {value: '1500',test:'test', label: '3:00pm'},
    {value: '1600',test:'test', label: '4:00pm'},
    {value: '1700',test:'test', label: '5:00pm'},
    {value: '1800',test:'test', label: '6:00pm'},
    {value: '1900',test:'test', label: '7:00pm'},
    {value: '2000',test:'test', label: '8:00pm'},
    {value: '2100',test:'test', label: '9:00pm'},
    {value: '2200',test:'test', label: '10:00pm'},
    {value: '2300',test:'test', label: '11:00pm'}
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
            ddlSelectedDoses : [],
            ddlPreviousSelectedDoses : [],
            allMedications : [],
            allTime : ddlTime
        }

        
    }
    componentWillReceiveProps(newProp){
        this.setState({
            selectedPreviousDoses : this.props.medication,
            medication : this.props.medication,
            allMedications : this.props.allMedications,
         })
    }
    onGenerateMedications= () => {
        console.log("this patient previous med: " , this.props.patientLastEpisodeMedications);
        console.log("all meds : ", this.props.medications);
        console.log("ddl Medications: " , ddlMedications);
        console.log("patient medication's state : ", this.state);
    }

    populateDoses = (item) => {
        console.log("item: ", item);
        medicationAPI
            .findOne(item)
            .then(med => {
                console.log("populate doses :", med);
                return med.data;
            })
            .catch(err => {
                console.log(err);
            })

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
    handleNewChange = (selectedOption) => {
        this.setState({
            selectedOption: `${selectedOption.label}`
        });
        console.log(`Selected: ${selectedOption.label}`);
        console.log("selected med state: " , this.state.selectedOption)
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
    handleDosage = (selectedOption) =>{
        console.log("selectedOption : " , selectedOption);
        this.setState({ selectedDosage : `${selectedOption.value}`});
        console.log("new selected time: ", this.state.selectedDosage);
    }

    
    render () {
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
                                                medication = {x.medication}
                                                handleNewChange = {this.handleNewChange}
                                                ddlMedications = {ddlMedications}
                                                ddlDosage = {this.props.medications}
                                                value = {x.value}
                                                label = {x.label}
                                                dose = {x.dose}
                                                form = {x.form}
                                                route = {x.route}
                                                previousTimes = {x.times}
                                                handlePreviousTimeChange = {this.handlePreviousTimeChange}
                                                handleDosage = {this.handleDosage}
                                                allTime = {ddlTime}
                                                allMedications = {this.props.medications}
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
                                       this.state.drugDoses && this.state.drugDoses.length > 0 ? 
                                            <Select
                                                name = "new-med-dosage"
                                                value = {this.state.selectedDosage}
                                                placeholder = 'medication dosage'
                                                onChange = {this.handleDosage}
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