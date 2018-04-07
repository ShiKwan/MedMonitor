import React, { Component } from 'react';
import {
    Container, Row, Col,
    Button,
    Card, CardBody, CardTitle, CardText,
    Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';

export default class PatientInfo extends React.Component {

    render() {
        return (

            <Container className='text-right'>
                <Label>
                    Video : this.props.video_link {this.props.video_link}
                </Label>
                <Label>
                    Posted on : this.props.video_datetime {this.props.video_datetime}
                </Label>
            </Container>

        )
    }
}           