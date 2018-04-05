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

            <Card className="actionTableCard" style={{display: this.props.menuCard ? "block" : "none"}}>
            <CardBody className="actionTableBody">
                <CardTitle className="actionTable">Actions</CardTitle>

                    <div className="actTableSelPat" style={{fontWeight: this.props.selectPatientCard || this.props.confirmPatientCard? "bold" : ""}}><a onClick={() => this.onClicked("select patient")}>Select patient</a></div>

                    <div className="actTableEnrollNewPat" style={{fontWeight: this.props.addPatientCard || this.props.registerPatientCard || this.props.successPatientCard? "bold" : ""}}><a onClick={() => this.onClicked("add patient")}>Enroll new patient</a></div>

                    <hr />



                    <div className="actTableSelPhys"style={{fontWeight: this.props.selectPhysicianCard ? "bold" : ""}}>Select physician</div>
                    <div className="actTableAddNewPhys"style={{fontWeight: this.props.addPhysicianCard || this.props.registerPhysicianCard ||this.props.successPhysicianCard ? "bold" : ""}}><a onClick={() => this.onClicked("add physician")}>Add new physician</a></div>
                    <hr />
  

 
                    <div className="actTableSelMed"style={{fontWeight: this.props.selectMedcationCard ? "bold" : ""}}>Select medication</div>
                    <div className="actTableAddNewMed"style={{fontWeight: this.props.addMedicationtCard ? "bold" : ""}}>Add new medication</div>
  
            </CardBody>
        </Card>



        )    
    }
}