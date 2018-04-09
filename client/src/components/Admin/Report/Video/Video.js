import React, { Component } from 'react';
import {
    Container, Row, Col,
    Button,
    Card, CardBody, CardTitle, CardText,
    Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';

export default class PatientInfo extends React.Component {

    
    onClickedVideo() {
       
    }

    render() {
        return (

            <Container>
                <Label>
                    Patient video posted on : {this.props.video_datetime}
                    <Button size="sm" style={{padding: 6}} onClick = {() => this.onClickedVideo()}>View video</Button>
                </Label>
            </Container>

        )
    }
}           