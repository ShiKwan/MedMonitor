import React, { Component } from 'react';
import {
    Button, 
    Card, CardBody, CardTitle, CardText,
    Table
} from 'reactstrap';
import './confirmPhysicianCard.css';






export default class confirmPhysicianCard extends React.Component {
    
    onClickedUpdate(id) {
    this.props.updatePhysicianDisplay(id)
    }

    onClickedRemove(id) {
        this.props.removePhysicianDisplay(id)
    }


    render () {
        return (

            <Card style={{display: this.props.confirmPhysicianCard ? "block" : "none"}}>
                <CardBody style={{minHeight: 550}}>
                    <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Review selected physician</CardTitle>
                    <br />
                    <Table size="sm" style={{width: 500}}>
                        <tbody>
                            <tr>
                                <td>Id Number: </td><td>{this.props.idNumber}</td>
                            </tr><tr>
                                <td>Name:  </td><td>{this.props.firstname}&nbsp;{this.props.lastname}</td>
                            </tr><tr>
                                <td>Date Added:  </td><td>{this.props.date_added}&nbsp;{this.props.lastname}</td>
                            </tr><tr>
                                <td>Office </td><td>{this.props.office}</td>
                            </tr><tr>
                                <td>E-mail: </td><td>{this.props.email}</td>
                            </tr><tr>
                                <td>Phone: </td><td>{this.props.phone}</td>
                            </tr>
                        </tbody>
                        
                    </Table>

                    <br />
                    <br />
                    <Button style={{marginRight: 6}} onClick={(_id) => this.onClickedUpdate(this.props._id)}>Update details</Button>
                    <Button style={{marginRight: 6}} onClick={(_id) => this.onClickedRemove(this.props._id)}>Remove physician</Button>
                    <a href="/admin"><Button style={{marginRight: 6}}>Back</Button></a>

                </CardBody>
            </Card>

        )
    }
}