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
                    <Label className="appDate" for="appDate">Date:</Label>
                    <br>
                    </br>
                    <Label className="appTime" for="appTime">Time:</Label>
                    <br>
                    </br>
                    <Label className="appDoctorName" for="appDocName">Doctor:</Label>
                    <br>
                    </br>
                    <Label className="appAddress" for="appAddress">Address:</Label>
                    <br>
                    </br>
                    <Label className="appCity" for="appCity">City:</Label>
                    <br>
                    </br>
                    <Label className="appNum" for="appPhNum">Phone Number:</Label>

                <Button className="appRemindBtn" color="success">Remind Me!</Button>{' '}
            </Card>
        </Container>
    );
};

export default UpcomingApp;