import React, { Component } from 'react';
import {
    Card, CardBody, CardTitle, CardText,
} from 'reactstrap';
import './dataMenuCard.css';

export default class DataMenuCard extends React.Component {

    render () {
        return (

            <Card className="dateMiningTableCard" style={{display: this.props.dataMenuCard ? "block" : "none"}}>
                <CardBody className="dateMiningTableBody">
                    <CardTitle className="dateMiningTitle">Data Mining</CardTitle>

                        <div>Drug data</div>
                        <div>Disease data</div>

                </CardBody>
            </Card>

        )    
    }
}       