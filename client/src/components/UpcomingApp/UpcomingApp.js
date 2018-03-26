import React from 'react';
import "./UpcomingApp.css";

import { 
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
        <div>
            <Card className="appCard" body outline color="secondary">
                <CardTitle>Upcoming Appointments</CardTitle>
                <Form>
                    <Label for="appDate">Date</Label>
                    <Input type="date" name="date" id="appDate" placeholder="date placeholder" />

                    <Label for="appTime">Time</Label>
                    <Input type="time" name="time" id="appTime" placeholder="time placeholder" />

                    <Label for = "exampleEmail">Doctor:</Label>
                    <Input type = "email" name = "email" id = "doctorName" placeholder = "doctors name" />

                    <Label for = "exampleEmail">Address:</Label>
                    <Input type = "email" name = "email" id = "appAddress" placeholder = "app address" />

                    <Label for = "exampleEmail">City</Label>
                    <Input type = "email" name = "email" id = "appCity" placeholder = "app city" />

                    <Label for = "exampleEmail">Phone #</Label>
                    <Input type = "email" name = "email" id = "officNum" placeholder = "app phone number" />

                </Form>
                <CardText>Add this Appointment to your Calander.</CardText>
                <Button className="appRemind-button" color="success">Remind Me!</Button>{' '}
            </Card>
        </div>
    );
};

export default UpcomingApp;