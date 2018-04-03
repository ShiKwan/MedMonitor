import React from "react";
import "./PatMedDue.css";

import { 
    Container,
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


const PatMedDue = (props) => {

    return (
        <Container fluid className="patMedInfo">
                
            <Card className="patMedInfoCard" body fluid inverse style={{ backgroundColor: '#2d5366', borderColor: '#2d5366' }}>
                <CardHeader tag="h4" className="patMedInfoHeader">WHEN YOUR NEXT MEDS ARE DUE</CardHeader>
                <Card className="patMedInfo">
                    <CardText className="patMedInfoDue"><h4>Your Next Medication(s) Is Due</h4></CardText>
                    <br>
                    </br>
                    <Label className="text-center patMedDueHours">
                        In: 2 HOURS
                    </Label>
                    <br>
                    </br>
                    <Label className="text-center patMedDueTime">
                        At: 4:00 PM
                    </Label>
                    <br>
                    </br>

                    <div className="patMedDueRemind">
                        <Button className="patMedRemindBtn" color="secondary" size="lg"><h4>Remind Me!</h4></Button>
                    </div>

                </Card>
            </Card>

        </Container>

    );
};

export default PatMedDue;