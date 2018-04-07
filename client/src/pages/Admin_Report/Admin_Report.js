import React, { Component } from "react";
import '../Admin/Admin.css';
import {
    Nav,
    Navbar,
    NavItem,
    NavLink,
    Input,
    Form,
    FormGroup,
    Label,
    Button,
    Container,
    Row, 
    Col
} from 'reactstrap';
import Chart from "../../components/Admin/Report/Chart";
import Video from "../../components/Admin/Report/Video";
import EpisodeInfo from "../../components/Admin/Report/EpisodeInfo";
import ReportHeader from "../../components/Admin/Report/Header";
import Medication from "../../components/Admin/Report/Medication";
import PatientInfo from "../../components/Admin/Report/PatientInfo";

class Admin_Report extends Component {
    state = { 
        patientId: ""

    };
    
componentDidMount() {
    this.setState({patientId: window.location.search});
    console.log("patientId: " + this.state.patientId)
};

    render() {
        return (
            <Container fluid>
                <ReportHeader />
                <hr />
                <Container fluid>
                    <Row>
                        <Col md='6'>
                            <PatientInfo />
                        </Col>
                        <Col md='6'>
                            <EpisodeInfo />
                            <Video />
                        </Col>
                    </Row>
                    <Row>
                        <Col md='3'>
                            <Medication />
                        </Col>
                        <Col md='9'>
                            <Chart />
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
};

export default Admin_Report;
