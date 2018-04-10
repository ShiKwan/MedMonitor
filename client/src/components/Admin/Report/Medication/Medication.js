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

            this.props.showMeds ? 

                <Container>

                    <div style={{minHeight: 476, border: '1px solid grey', padding: 10}}>
                    <p style={{fontWeight: "bold"}}>{this.props.title}</p>
                    <ListGroup>

                        {this.props.medications.map( (med) => {
                            return (

                                <p> <span style={{fontWeight: "bold"}}> {med.medication.slice(0,    med.medication.indexOf("("))} </span>
                                    &nbsp;
                                    {med.dose} &nbsp;
                                    {med.route} &nbsp;
                                    {med.form}.<br />

                                    Times : &nbsp;
                                        {
                                        med.times?
                                            med.times.map( (time) => {
                                                return (
                                                <Label>{time}, &nbsp;</Label>
                                                )
                                            })
                                        : 
                                        null
                                        }
                                </p>
                            )
                        })}
        
                    </ListGroup>
                    </div>
                </Container>

            :

            null
        )
    }
}           