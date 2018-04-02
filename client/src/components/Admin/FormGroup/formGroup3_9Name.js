import React, { Component } from 'react';
import {
    Col,
    Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';
import './formGroup.css';



export default class FormGroup3_9Name extends React.Component {


    onChanged(event) {
        this.props.onChanged(event)
    }


    render () {
        return (

            <FormGroup row>
                <Label for="name" sm={3}>Name</Label>
                <Col sm={9}>
                    <Input type="text" name={this.props.nameFirstName} id="name" placeholder="firstname" onChange={(event) => this.onChanged(event)}  value={this.props.valueFirstName} />
                    <Input type="text" name={this.props.nameLastName} placeholder="lastname" onChange={(event) => this.onChanged(event)}  value={this.props.valueLastName} />
                </Col>
            </FormGroup>
            
        )
    }
}   