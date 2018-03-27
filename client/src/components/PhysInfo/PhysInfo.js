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
        <Container className="AppointmentCards">
            <Card className="physInfoCard" body outline color="warning">
                <CardTitle className="physInfoHeader">Physician Information</CardTitle>
                <Label for="patientDoc">Doctor</Label>
                <Input type="text" size="lg" name="email" id="PatDocName" placeholder="doctor name" />

                <Label for="patientDocAddress">Address</Label>
                <Input type="text" size="lg" name="email" id="PatDocAddress" placeholder="doctor address" />

                <Label for="patientDocCity">City</Label>
                <Input type="text" size="lg" name="email" id="PatDocCity" placeholder="doctor city" />

                <Label for="patientDocPhNum">Phone #</Label>
                <Input type="text" size="lg" name="email" id="PatientDocNum" placeholder="doctor phone number" />

                <CardTitle className="physInfoHours">Office Hours</CardTitle>

                <Label for="patientDocPhNum">From</Label>
                <Input type="text" size="lg" name="email" id="PatDocOffHrFrom" placeholder="office hour from" />

                <Label for="patientDocPhNum">To</Label>
                <Input type="text" size="lg" name="email" id="PatDocOffHrTo" placeholder="office hours to" />
            </Card>
        </Container>
    );
};

export default PhysInfo;