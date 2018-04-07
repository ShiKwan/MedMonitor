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
                    <Label className="patDoc" for="patDoc">Doctor: Dr. {props.doctorLastName} {props.doctorFirstName}</Label>
                    <br>
                    </br>
                    <Label className="patDocAddress" for="patDocAddress">Office: {props.office}</Label>
                    <br>
                    </br>
                    <Label className="patDocCity" for="patDocCity">Email: {props.email}</Label>
                    <br>
                    </br>
                    <Label className="patDocPhNum" for="patDocPhNum">Phone Number: {props.phone}</Label>
                    <hr>
                    </hr>
                    <CardTitle className="physInfoHours">Office Hours</CardTitle>
                
                    <Label className="patDocPhNum" for="patDocPhNum">Day: {props.officeDay}</Label>
                    <br>
                    </br>
                    <Label className="patDocPhNum" for="patDocPhNum">Hour: {props.officeHour} </Label>
                </Card>
            </Card>
        </Container>
    );
};

export default PhysInfo;