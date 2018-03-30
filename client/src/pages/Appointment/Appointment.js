import React, { Component } from "react";
import './Appointment.css';
// import Header from "../../components/Header";
import UpcomingApp from "../../components/UpcomingApp";
import PhysInfo from "../../components/PhysInfo";



import {
    Container,
    Row,
    Col,
} from 'reactstrap';


class Appointment extends Component {
    state = {

    };
    render() {
        return (
            <Container fluid>
                {/* <Header /> */}
                <Container>
                    <Row>
                        <Col size='md-6'>
                            <UpcomingApp />
                        </Col>
                        <Col size='md-6'>
                            <PhysInfo />
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default Appointment;
