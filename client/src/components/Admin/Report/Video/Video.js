import React, { Component } from 'react';
import {
    Container, Row, Col,
    Button,
    Card, CardBody, CardTitle, CardText,
    Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';

export default class Video extends React.Component {

    
    onClickedVideo(videoLink) {
       
    }

    render() {
        return (

            <Container>
                <Label>
                    Patient video posted : {this.props.videoDateTime}&nbsp;&nbsp;
                    <Button size="sm" style={{padding: 6}} onClick = {() => this.onClickedVideo(this.props.videoLink)}>View video</Button>
                </Label>
            </Container>

        )
    }
}           