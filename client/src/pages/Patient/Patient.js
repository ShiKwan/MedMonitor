import React, { Component } from "react";
import PatSurvey from "../../components/PatSurvey";
import PatMedDue from "../../components/PatMedDue";
import DoSomethingBtn from "../../components/DoSomethingBtn";
import patientAPI from "../../utils/patientAPI";

import './Patient.css';

import {
    Button,
    Container,
    Row,
    Col,
} from 'reactstrap';


class Patient extends Component {
    constructor(props){
        super(props);
        console.log(props.test);
        this.state = {
            finishedQuestion : false,
            next_appt : '',
            medication : [],
            details : {}
        }

    }
    componentDidMount() {
        console.log("user id : " + localStorage.getItem("userId"));
        if(localStorage.getItem("userId")){
            patientAPI.findPatientInfoForPatient(localStorage.getItem("userId").toString())
                .then(res => {
                    console.log("data for patient: ", res.data)
                    this.setState({
                        next_appt: `${res.data.appointment.next_appt}`,
                        medication: res.data.episode[0].medications,
                        details: res.data.details
                    })
                    console.log(this.state);
                })
                .catch(err => console.log(err));
        }
    }
    handleFinishedCallback= () => {
        this.setState({
            finishedQuestion : true
        })
        console.log(this.state.finishedQuestion)
    }
    render(){
        return (
            <Container fluid>
                <Container>
                    <Button onClick={this.props.handleIncident}>Alert Admin</Button>
                    <Row>
                        <Col size='md-12'>
                            <PatSurvey handleFinishedCallback={this.handleFinishedCallback} />
                        </Col>
                    </Row>
                    {
                        this.state.finishedQuestion === true ?
                            <Row>
                                <Col size='md-6'>
                                    <PatMedDue medication={this.state.medication} />
                                </Col>
                                <Col size='md-6'>
                                    <DoSomethingBtn />
                                </Col>
                            </Row>
                        :
                        null
                    }
                </Container>
            </Container>
        )
    }
}

export default Patient;


