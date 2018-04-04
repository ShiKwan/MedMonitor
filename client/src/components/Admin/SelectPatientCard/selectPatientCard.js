import React, { Component } from 'react';
import {
    Card, CardBody, CardTitle, CardText,
    Table,
} from 'reactstrap';
import './selectPatientCard.css';


export default class SelectPatientCard extends React.Component {

    onClicked(id) {
        this.props.confirmPatient(id);
    }
    

    render () {
        return (

            <Card className="selectPatTableCard" style={{display: this.props.selectPatientCard ? "block" : "none"}}>
                <CardBody className="selectPatTableBody">
                    <CardTitle className="selectPatTitle">Select patient</CardTitle>

                    <br />
                        {this.props.patientsLength ? (

                            <Table className="selectPatTable">

                                <tbody className="selectPatTableBody">
                                    {this.props.patients.map(item => (
                                            <tr className="selectPatDetail" onClick={() => this.onClicked(item._id)}>
                                                    <td style={{width: 100}}>{item.details.patient_number}</td>
                                                    <td style={{width: 150}}>{item.details.first_name}&nbsp;{item.details.last_name}</td> 
                                            </tr>
                                    ))} 
                                </tbody>
                            </Table>

                        ) : (
                        <h3>No Results to Display</h3>
                        )}
                      
                </CardBody>
            </Card> 

        )
    }
}