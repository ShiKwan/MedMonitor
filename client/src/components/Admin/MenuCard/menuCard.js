import React, { Component } from 'react';
import {
    Card, CardBody, CardTitle, CardText,
} from 'reactstrap';
import './menuCard.css';

export default class MenuCard extends React.Component {


    onClicked(selection) {
        this.props.menuSelect(selection)
    }


    render () {
        return (

            <Card style={{display: this.props.menuCard ? "block" : "none"}}>
            <CardBody>
                <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Actions</CardTitle>
                <CardText> 
                    <div style={{fontWeight: this.props.selectPatientCard || this.props.confirmPatientCard? "bold" : ""}}><a onClick={() => this.onClicked("select patient")}>Select patient</a></div>

                    <div style={{fontWeight: this.props.addPatientCard || this.props.registerPatientCard || this.props.successPatientCard? "bold" : ""}}><a onClick={() => this.onClicked("add patient")}>Enroll new patient</a></div>

                    <hr />
                </CardText>

                <CardText> 
                    <div style={{fontWeight: this.props.selectPhysicianCard ? "bold" : ""}}>Select physician</div>
                    <div style={{fontWeight: this.props.addPhysicianCard || this.props.registerPhysicianCard ||this.props.successPhysicianCard ? "bold" : ""}}><a onClick={() => this.onClicked("add physician")}>Add new physician</a></div>
                    <hr />
                </CardText>

                <CardText> 
                    <div style={{fontWeight: this.props.selectMedcationCard ? "bold" : ""}}>Select medication</div>
                    <div style={{fontWeight: this.props.addMedicationtCard ? "bold" : ""}}>Add new medication</div>
                </CardText>
            </CardBody>
        </Card>



        )    
    }
}