import React from 'react';

import {
    Container, 
    Button,
    Label, 
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