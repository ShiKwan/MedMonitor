import React, {Component} from "react";
import "./VideoUpload.css";
import videoAPI from '../../utils/videoAPI';
import moment from 'moment';
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    ButtonGroup,
    CardTitle,
    CardHeader,
    CardSubtitle,
    CardText,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';



class DoSomethingBtn extends Component {
    state = {
    video_link: "",
    patient_id: localStorage.getItem("userId"),
    video_datetime : moment().format()
}

    // Dynamic form input handler
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(event.target.value);
        console.log(this.state);
    };
    handleSubmit = (event) => {
        console.log("here");
        let objVideo = {
            video_link: this.state.video_link,
            patient_id : this.state.patient_id,
            video_datetime : this.state.video_datetime
        }
        console.log(objVideo);
        videoAPI.create(objVideo)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    render() {
        return (
            <Container fluid className="uploadVideoInfo">

                <Card className="uploadVideoInfoCard" body fluid inverse style={{ backgroundColor: '#2d5366', borderColor: '#2d5366' }}>
                    <CardHeader tag="h4" className="uploadVideoInfoHeader">UPLOAD EPISODE VIDEO</CardHeader>
                    <Card className="uploadVideoInfoBody">
                        <CardText className="shareVideo"><h4>Share Your Episode Video With Your Doctor</h4></CardText>
                        <FormGroup row className="uploadVideo">
                            <Label size="lg">Upload Your Video Link Here</Label>
                            <Input type="text" id="episodeVideo" onChange={this.handleInputChange} name="video_link" placeholder="video link" bsSize="lg" />
                        </FormGroup>
                        <Button className="submitVideo" color="secondary" size="lg" onClick={(e) => this.handleSubmit(e)}><h4>Submit Video</h4></Button>
                    </Card>
                </Card>

            </Container>

        );
    }
    
};

export default DoSomethingBtn;