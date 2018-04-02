import React, { Component } from 'react';
import {
    Card, CardBody, CardTitle, CardText,
    Table
} from 'reactstrap';
import './selectPatientCard.css';


export default class SelectPatientCard extends React.Component {

    onClicked(id) {
        this.props.confirmPatient(id);
    }
    

    render () {
        return (

            <Card style={{display: this.props.selectPatientCard ? "block" : "none"}}>
                <CardBody style={{minHeight: 550}}>
                    <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Select patient</CardTitle>

                    <CardText>
                    <br />
                        {this.props.patientsLength ? (

                            <Table>
                                <tbody>
                                    {this.props.patients.map(item => (
                                            <tr>
                                                <a  onClick={() => this.onClicked(item._id)}>
                                                    <td style={{width: 100}}>{item.details.patient_number}</td>
                                                    <td style={{width: 150}}>{item.details.first_name}&nbsp;{item.details.last_name}</td> 
                                                </a>
                                            </tr>
                                    ))} 
                                </tbody>
                            </Table>

                        ) : (
                        <h3>No Results to Display</h3>
                        )}

                    </CardText>
                </CardBody>
            </Card> 

        )
    }
}