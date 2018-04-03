import React, { Component } from 'react';
import {
    Card, CardBody, CardTitle, CardText,
} from 'reactstrap';
import './dataMenuCard.css';

export default class DataMenuCard extends React.Component {

    render () {
        return (

            <Card style={{display: this.props.dataMenuCard ? "block" : "none"}}>
                <CardBody>
                    <CardTitle style={{backgroundColor: "#eeeeee", padding: 6}}>Data Mining</CardTitle>

                        <div>Drug data</div>
                        <div>Disease data</div>

                </CardBody>
            </Card>

        )    
    }
}       