import React from 'react';

import {
    Container, 
    Button,
    Label,
    Link,
} from 'reactstrap';

export default class Video extends React.Component {

    render() {
        return (

            <Container>
                <Label>
                    Patient video posted : {this.props.videoDateTime}&nbsp;&nbsp;
                    <a href={this.props.videoLink} target="_blank">
                        <Button size="sm" style={{padding: 6, display: this.props.videoLink ? "inline" : "none"}}>View video</Button>
                    </a>
                        
                </Label>
            </Container>

        )
    }
}           