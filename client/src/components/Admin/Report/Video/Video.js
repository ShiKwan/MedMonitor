import React from 'react';

import {
    Container, 
    Button,
    Label, 
} from 'reactstrap';

import './Video.css';


export default class Video extends React.Component {

    
    onClickedVideo(videoLink) {
       
    }

    render() {
        return (

            <Container>
                <Label className="patVidPost">
                    Patient video posted : {this.props.videoDateTime}&nbsp;&nbsp;
                    <Button className="videoBtn" color="primary" size="sm" onClick = {() => this.onClickedVideo(this.props.videoLink)}>View Video</Button>
                </Label>
            </Container>

        )
    }
}           