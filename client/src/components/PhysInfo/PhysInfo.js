import React from 'react';
import "./PhysInfo.css";

import { 
    Container,
    Card,
    Button,
    CardTitle,
    CardSubtitle,
    CardText,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';

const PhysInfo = (props) => {

    return (
        <Container className="AppointmentCard">
            <Card className="physInfoCard" body outline color="warning">
                <CardTitle className="physInfoHeader">Physician Information</CardTitle>
                <Label className="patDoc" for="patDoc">Doctor: </Label>
                <br>
                </br>
                <Label className="patDocAddress" for="patDocAddress">Address: </Label>
                <br>
                </br>
                <Label className="patDocCity" for="patDocCity">City: </Label>
                <br>
                </br>
                <Label className="patDocPhNum" for="patDocPhNum">Phone Number: </Label>
                <CardTitle className="physInfoHours">Office Hours</CardTitle>
             
                <Label className="patDocPhNum" for="patDocPhNum">From: </Label>
                <br>
                </br>
                <Label className="patDocPhNum" for="patDocPhNum">To: </Label>
            </Card>
        </Container>
    );
};

export default PhysInfo;