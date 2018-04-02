import React, { Component } from 'react';
import {
    Col,
    Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';
import './formGroup.css';



export default class FormGroup3_9Input extends React.Component {


    onChanged(event) {
        this.props.onChanged(event)
    }


    render () {
        return (

            <FormGroup row>
                <Label sm={3}>{this.props.label}</Label>
                <Col sm={9}>
                    <Input type={"text"} name={this.props.name} placeholder={this.props.placeholder} onChange={(event) => this.onChanged(event)}  value={this.props.value} />  
                </Col>
            </FormGroup>
        )
    }
}