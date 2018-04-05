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

                    <div style={{fontWeight: this.props.notificationCard ? "bold" : ""}}><a onClick={() => this.onClicked("dash board")}>Dashboard</a></div>
                    
                    <hr />
                    <div style={{fontWeight: this.props.selectPatientCard || this.props.confirmPatientCard || this.props.updatePatientCard || this.props.successUpdatePatientCard || this.props.changeAppointmentCard || this.props.successChangeAppointmentCard ? "bold" : ""}}><a onClick={() => this.onClicked("select patient")}>Select patient</a></div>

                    <div style={{fontWeight: this.props.addPatientCard || this.props.registerPatientCard || this.props.successPatientCard? "bold" : ""}}><a onClick={() => this.onClicked("add patient")}>Enroll new patient</a></div>

                    <hr />
                    <div style={{fontWeight: this.props.selectPhysicianCard || this.props.confirmPhysicianCard || this.props.updatePhysicianCard || this.props.successUpdatePhysicianCard || this.props.removePhysicianCard || this.props.successRemovePhysicianCard ? "bold" : ""}}><a onClick={() => this.onClicked("select physician")}>Select physician</a></div>

                    <div style={{fontWeight: this.props.addPhysicianCard || this.props.registerPhysicianCard ||this.props.successPhysicianCard ? "bold" : ""}}><a onClick={() => this.onClicked("add physician")}>Add new physician</a></div>
  
                    <hr />
                    <div style={{fontWeight: this.props.selectMedcationCard ? "bold" : ""}}>Select medication</div>
                    
                    <div style={{fontWeight: this.props.addMedicationtCard ? "bold" : ""}}>Add new medication</div>
  
            </CardBody>
        </Card>



        )    
    }
}