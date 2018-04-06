import React, { Component } from 'react';
import {
    Container, Row, Col, Label
} from 'reactstrap';

export default class EpisodeInfo extends React.Component {

        render () {
        return (

            <Container className="text-right">
                <Label>
                    Episode Start : this.props.episodeDate {this.props.episodeDate}
                </Label><br />
                <Label>
                    No Records : this.props.epidodeCount {this.props.episodeCount}
                </Label>
            </Container>

        )
    }
}           