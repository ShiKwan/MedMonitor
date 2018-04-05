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

            <Card style={{display: this.props.selectPhysicianCard ? "block" : "none"}}>
                <CardBody style={{minHeight: 550}}>
                    <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Select Physician</CardTitle>

                    <br />
                        {this.props.physiciansLength ? (

                            <Table style={{width: 600}}>
                                <tbody>
                                    {this.props.physicians.map(item => (
                                            <tr style={{lineHeight: 1}} onClick={() => this.onClicked(item._id)}>
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