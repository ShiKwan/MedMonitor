import React, { Component } from "react";
import PatSurvey from "../../components/PatSurvey";
import PatMedDue from "../../components/PatMedDue";
import DoSomethingBtn from "../../components/DoSomethingBtn";

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
        

    }
    render(){
        return (
            <Container fluid>
                <Container>
                    <Button onClick={this.props.handleIncident}>Alert Admin</Button>
                    <Row>
                        <Col size='md-12'>
                            <PatSurvey />
                        </Col>
                    </Row>
                    <Row>
                        <Col size='md-6'>
                            <PatMedDue />
                        </Col>
                        <Col size='md-6'>
                            <DoSomethingBtn />
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default Patient;


