import React, { Component } from 'react';
import {
    Col,
    Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';
import './formGroup.css';



export default class FormGroup3_9Contact extends React.Component {


    onChanged(event) {
        this.props.onChanged(event)
    }


    render () {
        return (

            <FormGroup row>
                <Label sm={3}>Contact email</Label>
                <Col sm={9}>
                    <Input type="email" name={this.props.nameEmail} placeholder="john.smith@mail.com" onChange={(event) => this.onChanged(event)} value={this.props.valueEmail} />  
                </Col>
                <Label sm={3}>Contact phone</Label>
                <Col sm={9}>
                    <Input type="text" name={this.props.namePhone} placeholder="216-394-2420" onChange={(event) => this.onChanged(event)} value={this.props.valuePhone} />  
                </Col>
            </FormGroup>
            
        )
    }
}