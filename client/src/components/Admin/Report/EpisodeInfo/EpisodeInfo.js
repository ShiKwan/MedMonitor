import React from 'react';

import moment from "moment";

import {
    Container
} from 'reactstrap';

export default class EpisodeInfo extends React.Component {

        render () {
        return (

            <Container className="text-right">
                <p>
                    Episode Start : {moment(this.props.episodeDate).format("MMMM Do YYYY")} {moment(this.props.episodeDate).format("hh.mm a")}.
                    <br />
                    Episode Data: {this.props.episodeCount} records total over {this.props.episodeDays} days.
                </p>
            </Container>

        )
    }
}           