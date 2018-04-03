import React from 'react';
import "./PhysInfo.css";

import { 
    Container,
    Card,
    Button,
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

const PhysInfo = (props) => {

    return (
        <Container className="physCard">
            <Card className="physInfoCard" body inverse style={{ backgroundColor: '#2d5366', borderColor: '#2d5366' }}>
            {/* <Card className="physInfoCard" body outline color="info"> */}
                <CardHeader tag="h4"  className="physInfoHeader">Physician Information</CardHeader>
                <Card className="docCardInfo">
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
                    <hr>
                    </hr>
                    <CardTitle className="physInfoHours">Office Hours</CardTitle>
                
                    <Label className="patDocPhNum" for="patDocPhNum">From: </Label>
                    <br>
                    </br>
                    <Label className="patDocPhNum" for="patDocPhNum">To: </Label>
                </Card>
            </Card>
        </Container>
    );
};

export default PhysInfo;