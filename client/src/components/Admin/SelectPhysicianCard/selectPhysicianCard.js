import React, { Component } from 'react';
import {
    Card, CardBody, CardTitle, CardText,
    Table,
} from 'reactstrap';
import './selectPhysicianCard.css';

export default class SelectPhysicianCard extends React.Component {

    onClicked(id) {
        this.props.confirmPhysician(id);
    }
    

    render () {
        return (

            <Card className="selectPhysTableCard" style={{display: this.props.selectPhysicianCard ? "block" : "none"}}>
                <CardBody className="selectPhysTableBody">
                    <CardTitle className="selectPhysTitle">Select Physician</CardTitle>

                    <br />
                        {this.props.physiciansLength ? (

                            <Table className="selectPhysTable">
                                <tbody>
                                    {this.props.physicians.map(item => (
                                            <tr className="selectPhysDetail" onClick={() => this.onClicked(item._id)}>
                                                    <td style={{width: 50}}>{item.id_number}</td>
                                                    <td style={{width: 150}}>{item.name.first}&nbsp;{item.name.last}</td> 
                                                    <td style={{width: 400}}>{item.office}</td> 
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