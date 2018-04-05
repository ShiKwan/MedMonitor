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
import './removePhysicianCard.css';


export default class RemovePhysicianCard extends React.Component {

    onClicked(id) {
        this.props.removePhysician(id)
    }

        render () {
        return (

            <Card style={{display: this.props.removePhysicianCard ? "block" : "none"}}>
                <CardBody style={{minHeight: 550}}>
                    <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Remove Physician</CardTitle>
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

                            <FormGroup row>
                                <Label sm={3}>Office</Label>
                                <Label sm={9}>{this.props.office}</Label>
                            </FormGroup>
                            <br />
                            <br />
                            Click 'Remove' to PERMANENTLY remove this physician from using the application.
                            <br />
                            <br />
                            <Button style={{marginRight: 6}} onClick={() => this.onClicked(this.props.dr_id)}>Remove</Button>
                            <a href="/admin"><Button style={{marginRight: 6}}>Cancel</Button></a>
                        </Form>
                    
                </CardBody>
            </Card>

        )
    }
}           