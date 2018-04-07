import React, { Component } from 'react';
import {
    Container, Row, Col, 
    Button, 
    Card, CardBody, CardTitle, CardText,
    Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';
import moment from 'moment';

export default class Header extends React.Component {

        render () {
        return (

            <Container>
                <Row>
                    <Col md='6' className="text-left">
                        <h3>Doctor : this.props.doctorName{this.props.doctorName}</h3>
                    </Col>
                    <Col md='6' className="text-right">
                        <h3>Report Date : {moment().format("dddd, MMMM Do YYYY")}</h3>
                    </Col>
                </Row>
            </Container>

        )
    }
}           