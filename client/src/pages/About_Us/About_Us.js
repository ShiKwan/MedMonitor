import React from 'react';
import moment from 'moment';
import { Link } from "react-router-dom";
import {
    Col,
    Row,
    Container,
    Nav,
    Navbar,
    NavItem,
    NavLink,
    Label
} from 'reactstrap';


export default class Header extends React.Component {
    render() {
        return (
            <Container className='text-left'>
                <Row>
                    <Col md='4'>

                    </Col>
                    <Col md='8'>
                        Mathew Hall
                    </Col>
                </Row>
                <Row>
                    <Col md='4'>

                    </Col>
                    <Col md='8'>
                        Joe Malovasic
                        Joe is a 26 year old aspiring developer from the Cleveland area. 
                        After the CWRU bootcamp, he is looking forward to continuing his self education in various programming languages, 
                        and hoping to eventually dabble in the world of software development.
                    </Col>
                </Row>
                <Row>
                    <Col md='4'>

                    </Col>
                    <Col md='8'>
                        Bradley Schaeman
                    </Col>
                </Row>
                <Row>
                    <Col md='4'>

                    </Col>
                    <Col md='8'>
                        Shi-Kwan Tan (SK)
                    </Col>
                </Row>
            </Container>
        )
    }
}