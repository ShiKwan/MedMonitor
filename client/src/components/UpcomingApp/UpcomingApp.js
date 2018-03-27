import React from 'react';
import "./UpcomingApp.css";

import { 
    Container,
    Card, 
    Button, 
    CardTitle, 
    CardText,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';

const UpcomingApp = (props) => {

    return (
        <Container className="AppointmentCards">
            <Card className="appCard" body outline color="warning">
                <CardTitle className="upcomingAppCard">Upcoming Appointment</CardTitle>
                <Form>
                    <Label for="appDate">Date</Label>
                    <Input type="text" size="lg" name="date" id="appDate" placeholder="date" />

                    <Label for="appTime">Time</Label>
                    <Input type="text" size="lg" name="time" id="appTime" placeholder="time" />

                    <Label for="appDocName">Doctor</Label>
                    <Input type="text" size="lg" name="email" id="appDoctorName" placeholder="doctors name" />

                    <Label for="appAddress">Address</Label>
                    <Input type="text" size="lg" name="email" id="appAddress" placeholder="app address" />

                    <Label for="appCity">City</Label>
                    <Input type="text" size="lg" name="email" id="appCity" placeholder="app city" />

                    <Label for="appPhNum">Phone #</Label>
                    <Input type="text" size="lg" name="email" id="officNum" placeholder="app phone number" />

                </Form>
                {/* <CardText className="addCalNote">Add This Appointment To Your Calander.</CardText> */}
                <Button className="appRemindBtn" color="success">Remind Me!</Button>{' '}
            </Card>
        </Container>
    );
};

export default UpcomingApp;