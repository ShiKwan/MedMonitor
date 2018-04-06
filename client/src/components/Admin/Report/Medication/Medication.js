import React, { Component } from 'react';
import {
    Container, Row, Col, 
    Button, 
    Card, CardBody, CardTitle, CardText,
    Form, FormGroup, Label, Input, FormText,
    ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,
} from 'reactstrap';

export default class Medication extends React.Component {

        render () {
        return (

            <Container><h3>Current Medications</h3>
                <Container>
                    <br />
                    <Label><h4>Pass in a single medication array into this (medications.map( (med) => Medication medication= med.medication dose = med.dose etc.... ) )</h4></Label>
                </Container>
                <ListGroup>
                            <ListGroupItem>
                                <ListGroupItemHeading>
                                    this.props.medication{this.props.medication}
                                </ListGroupItemHeading>
                                <ListGroupItemText>
                                    <Label>Dose : this.props.dose {this.props.dose} </Label> <br />
                                    <Label>Form : this.props.form {this.props.form} </Label> <br />
                                    <Label>Route : this.props.route {this.props.route}  </Label><br />
                                    Times : {
                                            this.props.times?
                                                this.props.times.map( (time) =>{
                                                    <Label>{time}</Label>
                                                })
                                            : 
                                            null
                                            }
                                </ListGroupItemText>
                            </ListGroupItem>
                       
                </ListGroup>
            </Container>
        )
    }
}           