import React, { Component } from "react";
import './Patient.css';
import Header from "../../components/Header";
import PatSurvey from "../../components/PatSurvey";
import PatMedDue from "../../components/PatMedDue";



import {
    Container,
    Row,
    Col,
} from 'reactstrap';

class Patient extends Component {
    state = {

    };
    render(){
        return (
            <Container fluid>
                <Header />
                <Container>
                    <Row>
                        <Col size='md-12'>
                            <PatSurvey />
                        </Col>
                    </Row>
                    <Row>
                        <Col size='md-12'>
                            <PatMedDue />
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default Patient;


