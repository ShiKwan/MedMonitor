import React from "react";
import "./DoSomethingBtn.css";

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


const DoSomethingBtn = (props) => {

    return (
        <Container fluid className="uploadVideoInfo">

            <Card className="uploadVideoInfoCard" body fluid inverse style={{ backgroundColor: '#2d5366', borderColor: '#2d5366' }}>
                <CardHeader tag="h4" className="uploadVideoInfoHeader">UPLOAD EPISODE VIDEO</CardHeader>
                <Card className="uploadVideoInfoBody">
                    <CardText className="shareVideo"><h4>Share Your Episode Video With Your Doctor</h4></CardText>
                        <FormGroup row className="uploadVideo">
                            <Label size="lg">Upload Your Video Link Here</Label>
                            <Input type="text" name="episodeVideo" id="episodeVideo" placeholder="video link" bsSize="lg" />
                        </FormGroup>
                        <Button className="submitVideo" color="secondary" size="lg"><h4>Submit Video</h4></Button>
                </Card>
            </Card>

        </Container>

    );
};

export default DoSomethingBtn;