import React from 'react';

import {
    Container, 
    Button,
    Label, 
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