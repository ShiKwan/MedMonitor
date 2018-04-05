import React, { Component } from 'react';
import {
    Container, Row, Col, 
    Button, 
    Card, CardBody, CardTitle, CardText,
    Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';
import FormGroup3_9Name from "../FormGroup/formGroup3_9Name";
import FormGroup3_9Input from "../FormGroup/formGroup3_9Input";
import FormGroup3_9Contact from "../FormGroup/formGroup3_9Contact";
import './updatePhysicianCard.css';


export default class UpdatePhysicianCard extends React.Component {

    onClicked(id) {
        this.props.updatePhysician(id)
    }


    onChanged(event) {
        this.props.handleInputChange(event)
    }


    render () {
        return (

            <Card style={{display: this.props.updatePhysicianCard ? "block" : "none"}}>
                <CardBody style={{minHeight: 400}}>
                    <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Update physician details </CardTitle>
                        <br />
                        <Form>

                            <FormGroup row>
                                <Label sm={3}>Physician Id</Label>
                                <Label sm={9}>{this.props.idNumber}</Label>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={3}>Name</Label>
                                <Label sm={9}>Dr. {this.props.firstname} {this.props.lastname}</Label>
                            </FormGroup>

                            <FormGroup3_9Input
                                label = {"Office"}
                                placeholder = {this.props.office}
                                name = {"dr_office"}
                                //value = {this.props.office}
                                onChanged = {(event) => this.onChanged(event)}
                            />

                            <FormGroup3_9Contact
                                labelEmail = {"Contact email"}
                                placeholderEmail = {this.props.email}
                                nameEmail = {"dr_email"}
                                //valueEmail = {this.props.email}

                                labelPhone = {"Contact phone"}
                                placeholderPhone = {this.props.phone}
                                namePhone = {"dr_phone"}
                                //valuePhone = {this.props.phone}
                                
                                onChanged = {(event) => this.onChanged(event)}
                            />

                            <br />
                            <Button style={{marginRight: 6}} onClick={() => this.onClicked(this.props.dr_id)}>Update</Button>
                            <a href="/admin"><Button style={{marginRight: 6}}>Cancel</Button></a>
                        </Form>
                    
                </CardBody>
            </Card>

        )
    }
}           